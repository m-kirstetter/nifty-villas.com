<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <h2
          class="col-span-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          Tailored Property Management Services.
        </h2>
        <dl class="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          <div v-for="feature in features" :key="feature.name">
            <dt class="text-base/7 font-semibold text-gray-900">
              <div
                class="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <component
                  :is="feature.icon"
                  class="size-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 text-base/7 text-gray-600">
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
  ClockIcon,
  Cog6ToothIcon,
  HomeModernIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "24/7 availability",
    description:
      "Always here for you and your guests, no matter the time of day.",
    icon: ClockIcon,
  },
  {
    name: "Luxury property specialization",
    description:
      "Expertly managing high-end villas and apartments with exceptional care.",
    icon: HomeModernIcon,
  },
  {
    name: "Expert local team",
    description:
      "A dedicated team with deep knowledge of Madeira and its market.",
    icon: UserPlusIcon,
  },
  {
    name: "Seamless Airbnb & Booking integration",
    description:
      "Effortlessly manage listings with our platform integration expertise.",
    icon: Cog6ToothIcon,
  },
];
</script>

<style></style>
