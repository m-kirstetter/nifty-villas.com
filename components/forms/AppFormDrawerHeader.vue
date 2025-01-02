<template>
  <div class="bg-gray-50 px-4 py-6 sm:px-6">
    <div class="flex items-start justify-between space-x-3">
      <slot>
        <div class="space-y-1 flex flex-col gap-3">
          <DialogTitle class="text-base font-semibold text-gray-900"
            >Tell Us About Your Property</DialogTitle
          >
          <p class="text-sm text-gray-500">
            Help us understand your needs better by sharing some details about
            your property. This allows us to provide the most accurate and
            tailored advice.
          </p>
          <div>
            <button
              v-if="isInquiryForm"
              @click="drawerContent = 'AppContactForm'"
              class="text-sm/6 font-semibold text-gray-900"
            >
              Prefer a Simple Contact Form?
            </button>
          </div>
        </div>
      </slot>
      <div class="flex h-7 items-center">
        <button
          type="button"
          class="relative text-gray-400 hover:text-gray-500"
          @click="isDrawerOpen = false"
        >
          <span class="absolute -inset-2.5" />
          <span class="sr-only">Close panel</span>
          <XMarkIcon class="size-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DialogTitle } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const { isDrawerOpen, drawerContent } = useUiState();

const isInquiryForm = computed(() => drawerContent.value === "AppInquiryForm");
const isContactForm = computed(() => drawerContent.value === "AppContactForm");
</script>
