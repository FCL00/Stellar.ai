<script setup>
  import { logo } from "@/assets/logo/index";
</script>
<template>
  <nav
    class="fixed top-0 z-20 w-full bg-black-0 start-0 md:border-b md:border-black-12"
  >
    <div
      class="container flex flex-wrap items-center justify-between p-4 mx-auto md:max-w-7xl"
    >
      <a
        href="https://flowbite.com/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          :src="logo"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Stellar.ai</span
        >
      </a>
      <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          class="p-2 text-white bg-purple-700 rounded-lg hover:purple-600"
        >
          Get started
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-black-12"
          aria-controls="navbar-sticky"
          :aria-expanded="isToggle"
          @click="onToggle"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        :class="( isToggle ? 'hidden' : '') + ' items-center justify-between w-full md:flex md:w-auto md:order-1' "
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col gap-2 p-4 mt-4 bg-black border rounded-lg md:p-0 border-black-12 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-black md:gap-0"
        >
          <li>
            <a
              href="#"
              class="block px-3 py-2 text-white bg-purple-700 rounded-md md:bg-transparent md:p-0"
              aria-current="page"
              >Features</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-3 py-2 text-white rounded-md md:p-0 hover:bg-purple-700 md:hover:bg-transparent"
              >Clients</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-3 py-2 text-white rounded-md md:p-0 hover:bg-purple-700 md:hover:bg-transparent"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-3 py-2 text-white rounded-md md:p-0 hover:bg-purple-700 md:hover:bg-transparent"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-3 py-2 text-white rounded-md md:p-0 hover:bg-purple-700 md:hover:bg-transparent"
              >Changelog</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>


export default {

  data() {
    return {
      isToggle: true,
    }
  },

  methods: {
    onToggle(){
      this.isToggle = !this.isToggle;
    },
  }
};
</script>

<style scoped>


</style>
