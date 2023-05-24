<template>
  <generic-panel class="text-center mt-32 mb-20">
    <div class="flex flex-col text-center max-w-3xl mx-auto">
      <h1 data-aos="fade-down" class="title-hero mb-6">Helping Your Clinic Succeed Faster</h1>
      <h2 data-aos="fade-down" data-aos-delay="200" class="subtitle-hero mb-6">Affordable enterprise-grade health solutions for hospitals, clinics, pharmacies, and HMOs.</h2>
    </div>
    <button class="btn btn-primary mb-4">Start for Free <i class="las la-arrow-right text-2xl"></i></button>
    <p class="text-gray-400 mb-16">It works online and offline too!</p>
    <img src="../assets/images/screenshot-emr.png" alt="MYCURE EMR Screenshot">
  </generic-panel>

  <generic-panel class="mb-32 py-12">
    <div class="grid grid-cols-6">
      <h1>Medicard</h1>
      <h1>Skin 101</h1>
      <h1>Unihealth</h1>
      <h1>Nueve de Febrero</h1>
      <h1>MDR OBGYN</h1>
      <h1>Better Fam</h1>
    </div>
  </generic-panel>

  <generic-panel class="mb-24">
    <h1 class="title-panel mb-6 font-medium">Streamline Efficiency. <br> Eliminate Clinic Problems.</h1>
    <h2 data-aos-delay="200" class="subtitle-panel mb-6">As a healthcare provider, your entire day is committed to helping people. But so much of your time is lost to disorganization and inefficiency when you’re using the wrong electronic health records software.</h2>
  </generic-panel>

  <generic-panel class="mb-32">
    <div class="grid grid-cols-2 gap-16 mb-16">
      <template v-for="(feature, index) in featuresData" :key="index">
        <div class="flex flex-col">
          <h1 class="text-4xl font-medium mb-5">{{ feature.title }}</h1>
          <p class="text-3xl text-gray-500">{{ feature.description }}</p>
        </div>
      </template>
    </div>
  </generic-panel>

  <div class="py-32 mb-32 panel-blue-gradient">
    <generic-panel class="mb-24">
      <h1 class="text-6xl font-medium text-white mb-5">Join the Next Generation of Healthcare IT Solutions: MYCURE</h1>
      <p class="text-3xl text-white mb-8">MYCURE's mission is to create an affordable yet effective patient records system. Featuring a variety of tools, you can customize your experience to fit the needs of your practice perfectly.</p>
      <button class="btn btn-primary">Start for Free <i class="las la-arrow-right text-2xl"></i></button>
    </generic-panel>
    <div class="carousel carousel-center px-10 space-x-5">
      <template v-for="x in 10" :key="x">
        <div class="carousel-item w-[250px] pb-3 pl-5">
          <div class="card text-white drop-shadow-sm search-card">
            <div class="card-body">
              <img class="w-[160px]" src="../assets/images/magnifier.png" alt="">
              <h1 class="text-4xl">Hospital OPD</h1>
              <p class="text-xl">Get simplified workflows, real-time reports</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

  <generic-panel class="mb-32">
    <div class="grid grid-cols-2 items-center">
      <div>
        <h1 class="title-panel font-medium mb-5">Internet connection won't be a problem</h1>
        <p class="subtitle-panel mb-8">Work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.</p>
        <a href="" class="text-primary text-3xl">Get Started <i class="las la-angle-right"></i></a>
      </div>
      <div>
        <video playsinline autoplay muted loop>
          <source src="../assets/images/syncbase-workflow.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </generic-panel>

  <div class="relative h-[700px] mb-32">
    <generic-panel class="mb-32">
      <div class="grid grid-cols-2 items-center">
        <div>
          <img
            src="../assets/images/telehealth-screenshot.png"
            alt="MYCURE Telehealth"
            class="w-[800px] absolute left-0 top-0"
          />
        </div>
        <div>
          <h1 class="title-panel font-medium mb-5">An easy, compact database of electronic medical records.</h1>
          <p class="subtitle-panel mb-8">MYCURE features an advanced user experience that stands out from the competition. With smooth transitions that help you streamline your workflow you won't miss pen and paper forms.</p>
          <a href="" class="text-primary text-3xl">Explore the Features <i class="las la-angle-right"></i></a>
        </div>
      </div>
    </generic-panel>
  </div>

  <div class="bg-[#FAFDFE] py-32 mb-32">
    <generic-panel>
      <h1 class="title-panel font-medium mb-5">Comprehensive Security in your Clinic</h1>
      <p class="subtitle-panel mb-8">At MYCURE, we understand that safeguarding your patients' electronic health records is paramount. Our commitment to your patients' privacy is unwavering. Our CSI guarantee ensures that your patient information is always secure.</p>
      <a href="" class="text-primary text-3xl">Read more about MYCURE CSI <i class="las la-angle-right"></i></a>
      <div class="grid grid-cols-2 gap-16 mt-24">
        <div>
          <img class="w-full" src="../assets/images/compliance.png" alt="">
        </div>
        <div>
          <img class="w-full" src="../assets/images/security.png" alt="">
        </div>
        <div class="col-span-2">
          <img class="w-full" src="../assets/images/interoperability.png" alt="">
        </div>
      </div>
    </generic-panel>
  </div>

  <generic-panel class="mb-32">
    <h1 class="title-panel font-medium mb-5">Trusted, Accredited, and Compliant: Discover MYCURE's Commitment to Excellence</h1>
    <p class="subtitle-panel mb-24">MYCURE is accredited and compliant with industry standards, ensuring that your patient data is kept secure and private at all times.</p>
    <div class="grid grid-cols-2 gap-16">
      <div>
        <img class="w-full mb-10" src="../assets/images/hipaa.png" alt="">
        <h2 class="text-4xl font-medium mb-5">Achieving HIPAA Compliance for Secure Electronic Health Records</h2>
        <p class="text-3xl text-gray-500 mb-8">MYCURE has gone the extra mile by maintaining HIPAA compliance, so you and your patients can have peace of mind knowing that their electronic health records are secure and private.</p>
        <a href="" class="text-primary text-3xl">Read more <i class="las la-angle-right"></i></a>
      </div>
      <div>
        <img class="w-full mb-10" src="../assets/images/philhealth.png" alt="">
        <h2 class="text-4xl font-medium mb-5">MYCURE is PhilHealth-Accredited</h2>
        <p class="text-3xl text-gray-500 mb-8">MYCURE partnered with the Philippine Health Insurance Corporation (PhilHealth) to help simplify the claims processing of the PhilHealth eClaims and eKonsulta packages in health facilites nationwide.</p>
        <a href="" class="text-primary text-3xl">Read more <i class="las la-angle-right"></i></a>
      </div>
    </div>
  </generic-panel>

  <div class="bg-[#FAFDFE] py-32">
    <generic-panel class="mb-24">
      <h1 class="title-panel font-medium mb-5">Hear from Our Satisfied Customers</h1>
      <p class="subtitle-panel mb-8">We are grateful to receive feedback from our clients regarding the quality of our services. Their testimonials help us improve and provide better healthcare solutions.</p>
      <a href="" class="text-primary text-3xl">We value your opinion! Share your thoughts with us <i class="las la-angle-right"></i></a>
    </generic-panel>
    <div class="carousel px-10 mt-24 space-x-5">
      <template v-for="x in 20" :key="x">
        <div class="carousel-item w-[400px] md:w-[700px] pb-3 pl-5">
          <div class="card bg-white drop-shadow-sm">
            <div class="card-body">
              <i class="las la-quote-right text-primary text-4xl"></i>
              <p class="text-2xl text-gray-500 mb-8">MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are. It enables them also to prescribe and countercheck their prescriptions, issue medical certificate, communicate with other doctors for referrals.</p>
              <p class="text-2xl text-gray-500">Patients could check and follow their medical progress, check their medications and look for doctors anywhere and set up appointments. I look forward to enjoying this app to improve my practice.</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
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

.search-card {
  background: linear-gradient(167.97deg, #004770 8.78%, rgba(0, 35, 88, 0.45) 108.57%);
}
</style>
