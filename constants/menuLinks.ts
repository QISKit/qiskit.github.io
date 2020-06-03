type SegmentData = {
  action: string
}

/**
 * Represent a navigation link for the menus of the site
 */
interface NavLink {
  /** The visible name of the link */
  label: string
  /** Where we want to go */
  url: string
  /** Includes an object with the information of the action. Example:
   * ```ts
   * {
      action: 'Qiskit Community: GitHub'
     }
    ```
   */
  segment?: SegmentData
  /** Only for <a> links. Use `_blank` to open the link in a new tab */
  target?: string
  /** Only for <a> links. Specifies the relationship between the current document
   *  and the linked document. Possible values: `nofollow`, `noreferrer`, `noopener`,
   *  `me` or a combination of them
   */
  rel?: string
}

type LabeledLinks = {
  [key: string]: NavLink
}

type QiskitElements = {
  terra: NavLink,
  aer: NavLink,
  aqua: NavLink,
  ignis: NavLink,
  ibmQAccount: NavLink
}

const QISKIT_ELEMENTS: QiskitElements = {
  terra: {
    label: 'Terra',
    url: '/terra'
  },
  aer: {
    label: 'Aer',
    url: '/aer'
  },
  aqua: {
    label: 'Aqua',
    url: '/aqua'
  },
  ignis: {
    label: 'Ignis',
    url: '/ignis'
  },
  ibmQAccount: {
    label: 'IBM Q Account',
    url: '/ibmqaccount'
  }
}

const ORDERED_QISKIT_ELEMENTS: Array<NavLink> = [
  QISKIT_ELEMENTS.terra,
  QISKIT_ELEMENTS.aer,
  QISKIT_ELEMENTS.aqua,
  QISKIT_ELEMENTS.ignis,
  QISKIT_ELEMENTS.ibmQAccount
]

const SOCIAL_MEDIA: LabeledLinks = {
  github: {
    label: 'GitHub',
    url: 'https://github.com/Qiskit'
  },
  slack: {
    label: 'Slack',
    url: 'http://ibm.co/joinqiskitslack'
  },
  twitter: {
    label: 'Twitter',
    url: 'https://twitter.com/Qiskit'
  },
  medium: {
    label: 'Medium',
    url: 'https://medium.com/Qiskit'
  },
  youtube: {
    label: 'YouTube',
    url: 'https://www.youtube.com/Qiskit'
  },
  stack: {
    label: 'Stack Exchange',
    url: 'https://quantumcomputing.stackexchange.com/questions/tagged/qiskit'
  }
}

const COMMUNITY_SUB_LINKS: LabeledLinks = {
  events: {
    label: 'Events',
    url: '/events'
  },
  education: {
    label: 'Education',
    url: '/education'
  },
  advocates: {
    label: 'Advocates',
    url: '/advocates'
  }
}

const ORDERED_COMMUNITY_SUB_LINKS: Array<NavLink> = [
  COMMUNITY_SUB_LINKS.events,
  COMMUNITY_SUB_LINKS.education,
  COMMUNITY_SUB_LINKS.advocates
]

const QISKIT_EDUCATION: LabeledLinks = {
  textbook: {
    label: 'Textbook',
    url: 'https://qiskit.org/textbook/preface.html'
  }
}

const QISKIT_ADVOCATES: LabeledLinks = {
  advocates: {
    label: 'Advocates',
    url: '/advocates#become-an-advocate'
  }
}

const DOCUMENTATION_LINK: NavLink = {
  label: 'Documentation',
  url: 'https://qiskit.org/documentation/'
}

const QISKIT_VIDEOS: NavLink = {
  label: 'Videos',
  url: 'https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY'
}

const TUTORIALS_LINK: NavLink = {
  label: 'Tutorials',
  url: 'https://qiskit.org/documentation/tutorials/circuits/index.html#',
  segment: {
    action: 'Tutorials'
  }
}

type FooterSection = {
  title: string,
  elements: Array<NavLink>
}

type FooterStructure = Array<FooterSection>

const FOOTER_ELEMENTS: FooterStructure = [
  // Elements in the first footer column
  {
    title: 'Careers',
    elements: []
  },
  // Elements in the second footer column
  {
    title: 'Overview',
    elements: [
      QISKIT_ELEMENTS.terra,
      QISKIT_ELEMENTS.aqua,
      QISKIT_ELEMENTS.aer,
      QISKIT_ELEMENTS.ignis
    ]
  },
  // Elements in the third footer column
  {
    title: 'Learn',
    elements: [
      QISKIT_EDUCATION.textbook,
      TUTORIALS_LINK,
      QISKIT_VIDEOS
    ]
  },
  // Elements in the fourth footer column
  {
    title: 'Community',
    elements: [
      COMMUNITY_SUB_LINKS.events,
      QISKIT_ADVOCATES.advocates
    ]
  },
  // Elements in the fifth footer column
  {
    title: 'Support',
    elements: [
      SOCIAL_MEDIA.github,
      SOCIAL_MEDIA.stack,
      DOCUMENTATION_LINK
    ]
  },
  // Elements in the sixth footer column
  {
    title: 'Stay Connected',
    elements: [
      SOCIAL_MEDIA.twitter,
      SOCIAL_MEDIA.slack,
      SOCIAL_MEDIA.youtube,
      SOCIAL_MEDIA.medium
    ]
  }
]

const SECONDARY_FOOTER_LINKS: Array<NavLink> = [
  {
    label: 'Terms of use',
    url: ''
  },
  {
    label: 'Accessibility',
    url: ''
  },
  {
    label: 'Contact',
    url: ''
  },
  {
    label: 'Privacy',
    url: ''
  }
]

const HOME_LINK: NavLink = {
  label: 'Qiskit',
  url: '/'
}

const COMMUNITY_LINK: NavLink = {
  label: 'Community',
  url: '/education'
}

export {
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_COMMUNITY_SUB_LINKS,
  FOOTER_ELEMENTS,
  SECONDARY_FOOTER_LINKS,
  HOME_LINK,
  COMMUNITY_LINK,
  TUTORIALS_LINK,
  DOCUMENTATION_LINK,
  NavLink
}
