<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base/7 font-semibold text-indigo-600">
          Manage Smarter
        </h2>
        <p
          class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance"
        >
          Everything You Need for Effortless Property Management
        </p>
        <p class="mt-6 text-lg/8 text-gray-600">
          From seamless guest communication to meticulous property upkeep, Nifty
          Rentals Madeira provides a full range of services to maximize your
          property's potential and enhance guest experiences.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt class="text-base/7 font-semibold text-gray-900">
              <div
                class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <component
                  :is="feature.icon"
                  class="size-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base/7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ChatBubbleOvalLeftEllipsisIcon,
  BellAlertIcon,
  HomeModernIcon,
  WrenchIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Property Management",
    description:
      "We handle all aspects of property maintenance, ensuring your villa or apartment remains in pristine condition.",
    icon: HomeModernIcon,
  },
  {
    name: "Guest Communication",
    description:
      "From booking inquiries to post-stay reviews, we provide seamless guest interactions 24/7.",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: "Cleaning & Maintenance",
    description:
      "Our professional team ensures your property stays spotless and well-maintained, ready for every guest.",
    icon: WrenchIcon,
  },
  {
    name: "Concierge Services",
    description:
      "Enhance your guests' experience with personalized recommendations, reservations, and local insights.",
    icon: BellAlertIcon,
  },
];
</script>

<style></style>
