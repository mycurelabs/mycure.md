<template lang="pug">
q-scroll-area(style="height: 650px; max-width: 100%;")
  timeline-container
    timeline-year(year="2016")

    //- div(style="width: 200px; margin-top: -120px;").text-center.timeline-content
    timeline-content(
      width="200"
      margin-top="-140"
    ).text-center
      h2.text-subtitle1.text-primary CURIE + FLEMING
      p.text-body 5 years development of Health Applications, Modules, and APIs

    timeline-year(year="2021")

    timeline-content(
      width="250"
      top-line="100"
    ).text-center
      h2.text-subtitle1.text-primary Hippocrades Whitepaper
      p.text-body Released November
        br
        | POC Blockchain ✅
      q-btn(
        tag="a"
        label="Read Whitepaper"
        aria-label="Read Whitepaper"
        href="/hippocrades-whitepaper-v3.pdf"
        target="_blank"
        size="sm"
        color="primary"
        no-caps
        outline
      )

    timeline-year(year="2022")

    timeline-content(
      width="250"
      margin-top="-140"
      bottom-line="24"
    ).text-center
      h2.text-subtitle1.text-primary Ariob / Iceaddis Incubator
      p Accepted in program, Ethiopia, and Africa (ONGOING)

    timeline-content(
      width="200"
      top-line="68"
    )
      h2.text-subtitle1.text-primary Hippr (Protocol) Whitepaper
      p Released May, 2022
      q-btn(
        tag="a"
        label="Read Whitepaper"
        aria-label="Read Whitepaper"
        href="/hip-protocol.pdf"
        target="_blank"
        size="sm"
        color="primary"
        no-caps
        outline
      )

    timeline-content(
      width="350"
      top-line="68"
    )
      h2.text-center.text-subtitle1.text-primary Developer Portal
      ul
        li Website ✅
        li Onboarding experience
        li Setup guides
        li Integration guides
        li Demo ✅
        li Testing guides
        li Going live guides
        li API guides ✅
        li Video & Blogs Tutorials
        li Community ✅

    timeline-content(
      width="250"
      top-line="68"
    )
      h2.text-center.text-subtitle1.text-primary Self Hosting
      ul
        li Deployment dashboard ✅
        li Onboarding
        li GCP provider ✅
        li AWS provider
        li Azure provider

    timeline-content(
      width="250"
      top-line="68"
    )
      h2.text-center.text-subtitle1.text-primary SDK & Developer Tools
      ul
        li OpenAPI Generator
        li Public Protobuf Specs 💻
        li Javascript SDK ✅
        li Rust SDK
        li GoLang SDK
        li Python SDK

    timeline-content(
      width="200"
      margin-top="-120"
      bottom-line="34"
    )
      h2.text-center.text-subtitle1.text-primary Medical Anatomy Whitepaper

    timeline-content(
      width="200"
      top-line="34"
    )
      h2.text-center.text-subtitle1.text-primary Syncbase WASM
      p.subtitle1 Convert Syncbase to Web Assembly

    timeline-content(
      width="200"
      top-line="34"
    )
      h2.text-center.text-subtitle1.text-primary Reward System
      ul
        li RAD token reward system
        li RAD rewards Smart Contract

    timeline-content(
      width="200"
      top-line="34"
    )
      h2.text-center.text-subtitle1.text-primary Marketplace
      ul
        li Sell Offer
        li Buy Offer
        li Secureshare

    timeline-content(
      width="200"
      top-line="34"
    )
      h2.text-center.text-subtitle1.text-primary Wallet Integration
      ul
        li Mobile Wallet

</template>

<script>
import TimelineContainer from './TimelineContainer.vue';
import TimelineContent from './TimelineContent.vue';
import TimelineYear from './TimelineYear.vue';
export default {
  components: {
    TimelineContainer,
    TimelineContent,
    TimelineYear,
  },
};
</script>
