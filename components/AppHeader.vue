<template>
  <header class="inset-x-0 top-0 z-50">
    <div class="mx-auto max-w-7xl">
      <div class="px-6 pt-6 lg:pl-8 lg:pr-0">
        <nav
          class="flex items-center justify-between lg:justify-start"
          aria-label="Global"
        >
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Nifty Rentals Madeira</span>
            <img alt="Nifty Rentals Madeira" class="h-20 w-auto" :src="Logo" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
          <div class="hidden lg:ml-12 lg:flex lg:gap-x-14">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-sm/6 font-semibold text-gray-900"
              >{{ item.name }}</a
            >
          </div>
        </nav>
      </div>
    </div>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Nifty Rentals Madeira</span>
            <img class="h-20 w-auto" :src="Logo" alt="Nifty Rentals Madeira" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Logo from "~/assets/images/nifty-rentals-logo.png";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Boat Tours", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Contact", href: "#" },
];

const mobileMenuOpen = ref(false);
</script>

<style></style>
