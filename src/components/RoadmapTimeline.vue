<template lang="pug">
q-timeline(
  layout="comfortable"
  color="primary"
)
  q-timeline-entry(
    title="CURIE + FLEMING"
    subtitle="2016 - 2021"
    icon="star"
  )
    p.text-body 5 years development of Health Applications, Modules, and APIs

  q-timeline-entry(
    title="Hippocrades Protocol"
    subtitle="Q4 2021"
  )
    p.text-body Whitepaper released November
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

  q-timeline-entry(
    title="Hippocrades Protocol"
    subtitle="Q2 2022"
  )
    p.text-body Hippr (Whitepaper)
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
    ).q-mr-sm

    q-btn(
      tag="a"
      label="Medical Anatomy"
      aria-label="Medical Anatomy"
      size="sm"
      color="primary"
      no-caps
      outline
      @click="medicalAnatomyDialog = true"
    )

  q-timeline-entry(
    title="Ariob / Iceaddis Incubator"
    subtitle="Q2 2022"
  )
    div
      p.text-body Accepted in program, Ethiopia, and Africa (ONGOING)

  q-timeline-entry(
    title="Developer Portal"
    subtitle="Q3 2022"
  )
    div
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

  q-timeline-entry(
    title="Self Hosting"
    subtitle="Q3 2022"
  )
    div
      ul
        li Deployment dashboard ✅
        li Onboarding
        li GCP provider ✅
        li AWS provider
        li Azure provider

  q-timeline-entry(
    title="SDK & Developer Tools"
    subtitle="Q4 2022"
  )
    div
      ul
        li OpenAPI Generator
        li Public Protobuf Specs 💻
        li Javascript SDK ✅
        li Rust SDK
        li GoLang SDK
        li Python SDK

  q-timeline-entry(
    title="Syncbase WASM"
    subtitle="Q1 2023"
  )
    div
      p.text-body Convert Syncbase to Web Assembly

  q-timeline-entry(
    title="Reward System"
    subtitle="Q2 2023"
  )
    div
      ul
        li RAD token reward system
        li RAD rewards Smart Contract

  q-timeline-entry(
    title="Marketplace"
    subtitle="Q2 2023"
  )
    div
      ul
        li Sell Offer
        li Buy Offer
        li Secureshare

  q-timeline-entry(
    title="Wallet Integration"
    subtitle="Q2 2023"
  )
    div
      ul
        li Mobile Wallet

q-dialog(
  v-model="medicalAnatomyDialog"
  persistent
  maximized
)
  q-card
    q-toolbar
      q-space
      q-btn(
        icon="close"
        round
        flat
        @click="medicalAnatomyDialog = false"
      )
    q-card-section.q-pa-xl.text-center
      q-img(
        src="@/assets/images/hippocrades-medical-anatomy.png"
        :width="isMobile ? '100%' : '900px'"
      )
</template>

<script>
import { ref } from 'vue';
export default {
  setup () {
    const medicalAnatomyDialog = ref(false);
    return {
      medicalAnatomyDialog,
    };
  },
};
</script>
