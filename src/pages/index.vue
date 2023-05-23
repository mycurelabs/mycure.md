<template>
  <generic-panel class="text-center">
    <div class="flex flex-col text-center max-w-3xl mx-auto mt-32">
      <h1 data-aos="fade-down" class="title-hero mb-6">Helping Your Clinic Succeed Faster</h1>
      <h2 data-aos="fade-down" data-aos-delay="200" class="subtitle-hero mb-6">Affordable enterprise-grade health solutions for hospitals, clinics, pharmacies, and HMOs.</h2>
    </div>
    <button class="btn btn-primary mb-4">Start for Free <i class="las la-arrow-right text-2xl"></i></button>
    <p class="text-gray-400 mb-16">It works online and offline too!</p>
    <img src="../assets/images/screenshot-emr.png" alt="MYCURE EMR Screenshot">
  </generic-panel>

  <generic-panel>
    <div class="grid grid-cols-6">
      <h1>Medicard</h1>
      <h1>Skin 101</h1>
      <h1>Unihealth</h1>
      <h1>Nueve de Febrero</h1>
      <h1>MDR OBGYN</h1>
      <h1>Better Fam</h1>
    </div>
  </generic-panel>

  <generic-panel class="pt-32">
    <h1 data-aos="fade-down" class="title-hero mb-6">Streamline Efficiency. <br> Eliminate Clinic Problems.</h1>
    <h2 data-aos="fade-down" data-aos-delay="200" class="subtitle-hero mb-6">As a healthcare provider, your entire day is committed to helping people. But so much of your time is lost to disorganization and inefficiency when you’re using the wrong electronic health records software.</h2>
  </generic-panel>

  <generic-panel>
    <div class="grid grid-cols-2 gap-16 mb-16">
      <template v-for="(feature, index) in featuresData" :key="index">
        <div class="flex flex-col">
          <h1 class="text-4xl font-medium mb-5">{{ feature.title }}</h1>
          <p class="text-4xl text-gray-500">{{ feature.description }}</p>
        </div>
      </template>
    </div>
  </generic-panel>

  <div class="panel-blue-gradient">
    <generic-panel>
      <h1 class="text-6xl text-white mb-5">Join the Next Generation of Healthcare IT Solutions: MYCURE</h1>
      <h2 class="text-3xl text-white mb-8">MYCURE's mission is to create an affordable yet effective patient records system. Featuring a variety of tools, you can customize your experience to fit the needs of your practice perfectly.</h2>
      <button class="btn btn-primary">Start for Free <i class="las la-arrow-right text-2xl"></i></button>
    </generic-panel>
    <div class="grid grid-flow-col gap-5 overflow-scroll">
      <template v-for="x in 10">
        <h1 class="text-6xl text-white">Hello MYCURE</h1>
      </template>
    </div>
  </div>

  <generic-panel>
    <h1>MYCURE</h1>
    <button class="btn">Button</button>
    <button class="btn btn-primary">Button</button>
    <button class="btn btn-secondary">Button</button>
    <button class="btn btn-accent">Button</button>
    <button class="btn btn-ghost">Button</button>
    <button class="btn btn-link">Button</button>
  </generic-panel>
</template>

<script>
import { definePageMeta } from '#imports';
import GenericPanel from '~/components/commons/GenericPanel';
export default {
  components: {
    GenericPanel,
  },
  setup () {
    definePageMeta({
      layout: 'main',
    });

    const featuresData = [
      {
        img: 'https://picsum.photos/200/300',
        title: 'Bid Farewell to Wasting Money on Unnecessary Tools',
        description: 'Choose Only the Tools You Need to Manage Your Practice. Don\'t Pay for Unused Features.',
      },
      {
        img: 'https://picsum.photos/200/300',
        title: 'Reduce Workload for Medical and Administrative Staff',
        description: 'Improve Staff Productivity and Minimize Errors with Efficient IT Solutions.',
      },
      {
        img: 'https://picsum.photos/200/300',
        title: 'Guarantee Patient Satisfaction and Happiness',
        description: 'Enhance Patient Care and Fulfillment with Streamlined Workflow, Accurate Documents, and Reduced Wait Times',
      },
      {
        img: 'https://picsum.photos/200/300',
        title: 'Ensure Compliance and Minimize Penalties',
        description: 'Protect Your Business from Costly Fines and Penalties by Securing Compliance with Data Privacy Regulations',
      },
    ];

    return {
      title: 'MYCURE',
      featuresData,
    };
  },
};
</script>

<style scoped>
.panel-blue-gradient {
  background: linear-gradient(135.54deg, #03486A 4.52%, #002B4A 65.48%, #00104A 120.82%);
}
</style>
