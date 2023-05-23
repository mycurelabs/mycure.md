<template>
<footer>
  <div class="footer-bg h-[218px]" :style="{ backgroundImage: `url(${footerBg})`}"></div>
  <div class="bg-[#d9e4f4] py-10 flex flex-col items-center">
    <span>Copyright {{new Date().getFullYear()}}. Parmazip. All Rights Reserved</span>
    <span class="mb-4">
      <nuxt-link :to="{ name: 'terms-of-use' }" class="hover:text-primary">Terms of Use</nuxt-link> | <nuxt-link :to="{ name: 'privacy-policy' }" class="hover:text-primary">Privacy Policy</nuxt-link>
    </span>
    <div class="flex gap-[10px]">
      <div class="bg-primary rounded-full">
        <a target="_blank" href="https://www.facebook.com/parmazip">
          <i class="lab la-facebook text-[35px] p-[2px] text-white"></i>
        </a>
      </div>
      <div class="bg-primary rounded-full">
        <a target="_blank" href="https://twitter.com/parmazip">
          <i class="lab la-twitter text-[35px] p-[2px] text-white"></i>
        </a>
      </div>
      <div class="bg-primary rounded-full">
        <a target="_blank" href="https://www.linkedin.com/company/parmazip">
          <i class="lab la-linkedin text-[35px] p-[2px] text-white"></i>
        </a>
      </div>

    </div>
  </div>
</footer>
</template>

<script>
import footerBg from '../../assets/images/footer-bg.png';
export default {

  setup () {
    return {
      footerBg,
    };
  },
};
</script>

<style scoped>
.footer-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
