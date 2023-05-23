<template>
  <!-- <generic-panel>
</generic-panel> -->
  <header>
    <nav class="bg-white">
      <div
        class="max-w-7xl px-5 flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <div class="flex justify-between md:order-2 w-[100%] md:w-auto">
          <nuxt-link
            type="button"
            class="hidden md:inline text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            href="https://calendly.com/parmazipapp/demo?month=2023-05"
            target="_blank"
          >
            Book a Demo
          </nuxt-link>
          <img
            src="../../assets/images/parmazip-logo.png"
            class="h-8 mr-3 md:hidden"
            alt="Parmazip Logo"
          />
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <a href="/" class="hidden md:flex items-center mr-4">
            <img
              src="../../assets/images/parmazip-logo.png"
              class="h-8 mr-3"
              alt="Parmazip Logo"
            />
          </a>

          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <nuxt-link
                href="/#how-it-works"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                >How it Works</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                href="/#bir"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                >BIR Accreditation</nuxt-link
              >
            </li>
            <li class="md:hidden mt-4">
              <nuxt-link
                type="button"
                class="block md:inline text-center text-white bg-primary focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-20 py-2.5 mr-2 mb-2 focus:outline-none"
                href="https://calendly.com/parmazipapp/demo?month=2023-05"
                target="_blank"
              >
                Book a Demo
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import GenericPanel from './GenericPanel';
import { useRuntimeConfig } from '#imports';
export default {
  components: {
    // GenericPanel,
  },
  setup () {
    const config = useRuntimeConfig();
    const signupURL = config.public.signupURL;
    return { signupURL };
  },
};
</script>
