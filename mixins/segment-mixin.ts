declare global {
  interface Window {
    _analytics: any,
    bluemixAnalytics: any
  }
}

/**
 * Send a page visitation event to segment.
 * @param pageComponent the page component.
 */
function trackPage (pageComponent: any) {
  if (!window.bluemixAnalytics || !window.bluemixAnalytics.pageEvent) { return }
  if (!pageComponent.routeName) {
    console.warn('Component', pageComponent, 'is missing the `routeName` property.')
    return
  }

  const category: string = 'Qiskit.org'
  const routeName: string = pageComponent.routeName

  window.bluemixAnalytics.pageEvent(category, routeName, {
    navigationType: 'pushState',
    productTitle: 'IBM Q Experience',
    title: pageComponent.$metaInfo.title
  })
}

/**
 * Mixin enabling page visitation tracking in Bluemix Analytics. To use it:
 * 1. Add the mixin to the page component.
 * 2. In the page component, include the title of the page in the meta info.
 * 3. In the page component, add the `routeName` property set to a string
 * identifying the route regardless the URL changing over time.
 */
export const segmentMixin = {
  created () {
    if (!process.client) { return }

    // See window._analytics default values at:
    // https://github.ibm.com/Bluemix/Bluemix.Analytics/blob/master/webpack.constants.js
    window._analytics = {
      segment_key: process.env.analyticsKey,
      optimizely: false,
      googleAddServices: false,
      autoPageView: false
    }

    const script = document.createElement('script')
    script.async = true
    script.src = process.env.analyticsScriptUrl || ''
    document.head.appendChild(script)
  },

  beforeRouteEnter (to, from, next) {
    next((pageComponent) => {
      if (document.readyState === 'complete') {
        trackPage(pageComponent)
      } else {
        window.addEventListener('load', () => {
          trackPage(pageComponent)
        })
      }
    })
  }
}
