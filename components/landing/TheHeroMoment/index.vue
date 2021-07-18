<template>
  <article class="the-hero-moment">
    <MetalGrid>
      <div class="bx--grid the-hero-moment__container">
        <VersionInfo
          class="the-hero-moment__version-info"
          :version="version"
        />
        <div class="bx--row">
          <h1 class="bx--col-md-4 bx--col-lg-9 bx--col-xlg-7 bx--col-max-7 the-hero-moment__title">
            Open-Source Quantum Development
          </h1>
        </div>
        <div class="bx--row">
          <p class="bx--col-sm bx--col-md-4 bx--col-lg-6 bx--col-xlg-4 the-hero-moment__description">
            Qiskit {{ qiskitPronunciation }} is an open-source SDK for working
            with quantum computers at the level of pulses, circuits, and
            application modules.
          </p>
        </div>
        <AppCta
          class="the-hero-moment__cta"
          v-bind="getStartedLink"
        />
      </div>
    </MetalGrid>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

@Component
export default class TheHeroMoment extends Vue {
  @Prop({ type: String, required: true }) version!: string

  getStartedLink: GeneralLink = {
    url: 'https://qiskit.org/documentation/getting_started.html',
    label: 'Get started',
    segment: { cta: 'get-started', location: 'hero-moment' }
  }

  data () {
    return { qiskitPronunciation: Math.random() < 0.5 ? '[kiss-kit]' : '[quiss-kit]' }
  }
}
</script>

<style lang="scss">
.the-hero-moment {
  height: calc(#{56rem * 40 / 64} + 2px);
  position: relative;
  overflow: hidden;

  @include mq($from: large) {
    // In Figma, the height is not enforced but the background is always
    // visible completely so we do it in the CSS. A small correction is needed
    // to be able of displaying the bottom lines of the grid.
    height: calc(56rem + 2px);
  }

  &__square-link {
    width: 4rem;
    height: 4rem;
    background-color: $background-color-black;
    position: absolute;
    top: 21%;
    left: 43%;
  }

  &__container {
    background-image: url("/images/landing-page/hero-illustration.png");
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    padding-top: $spacing-10;
    pointer-events: none;

    @include mq($until: medium) {
      background-image: none;
    }
  }

  &__version-info {
    margin-bottom: $spacing-06;

    @include mq($from: medium) {
      margin-bottom: $spacing-07;
    }

    @include mq($from: large) {
      margin-bottom: $spacing-11;
    }
  }

  &__title {
    margin-bottom: $spacing-06;
    // TODO: Force pointer events to allow the user to select text. Remove
    // when decomissioning the Metal page.
    pointer-events: auto;

    @include mq($from: medium) {
      margin-bottom: $spacing-07;
    }

    @include mq($from: large) {
      margin-bottom: $spacing-11;
    }
  }

  &__description {
    margin-bottom: $spacing-06;
    // TODO: Force pointer events to allow the user to select text. Remove
    // when decomissioning the Metal page.
    pointer-events: auto;

    @include mq($from: medium) {
      margin-bottom: $spacing-07;
    }

    @include mq($from: large) {
      margin-bottom: $spacing-11;
    }
  }

  &__cta {
    // TODO: Force pointer events to allow the user to select text. Remove
    // when decomissioning the Metal page.
    pointer-events: auto;
  }
}
</style>
