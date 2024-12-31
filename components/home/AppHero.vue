<template>
  <div class="relative">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
        <svg
          class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="0,0 90,0 50,100 0,100" />
        </svg>

        <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <div class="hidden sm:mb-10 sm:flex">
              <div
                class="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Learn how we simplify property management.
                <a
                  href="#"
                  class="whitespace-nowrap font-semibold text-indigo-600"
                  ><span class="absolute inset-0" aria-hidden="true" />Read more
                  <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>
            <h1
              class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            >
              Effortless Property Management in Madeira.
            </h1>
            <p
              class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8"
            >
              Nifty Rentals Madeira offers
              <strong>expert property management</strong> for
              <strong>luxury villas</strong> and apartments. From
              <strong>guest communication</strong> to <strong>cleaning</strong>,
              we handle it all for a
              <strong>seamless rental experience</strong>.
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Contact Us</a
              >
              <a href="#" class="text-sm/6 font-semibold text-gray-900"
                >Learn more <span aria-hidden="true">→</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
        :src="HeroImage"
        alt="Madeira Background"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeroImage from "~/assets/images/hero-bg.jpg";
</script>

<style></style>
