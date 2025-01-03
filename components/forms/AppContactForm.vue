<template>
  <form
    name="contact"
    ref="contactForm"
    class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
    netlify
    method="POST"
  >
    <input type="hidden" name="form-name" value="contact" />
    <div class="flex-1">
      <!-- Header -->
      <FormsAppFormDrawerHeader>
        <div class="space-y-1 flex flex-col gap-3">
          <DialogTitle class="text-base font-semibold text-gray-900">
            Contact Us
          </DialogTitle>
          <div>
            <button
              @click="drawerContent = 'AppInquiryForm'"
              class="text-sm/6 font-semibold text-gray-900"
            >
              Prefer Full Inquiry Form?
            </button>
          </div>
        </div>
      </FormsAppFormDrawerHeader>
      <!-- Divider container -->
      <div
        class="space-y-6 px-4 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0"
      >
        <!-- name -->
        <div
          class="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
        >
          <div>
            <label
              for="name"
              class="block text-sm/6 font-medium text-gray-900 sm:mt-1.5"
            >
              Name
            </label>
          </div>
          <div class="sm:col-span-2">
            <input
              :disabled="sending"
              v-model="name"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <!-- name -->
        <div
          class="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
        >
          <div>
            <label
              for="email"
              class="block text-sm/6 font-medium text-gray-900 sm:mt-1.5"
            >
              Email
            </label>
          </div>
          <div class="sm:col-span-2">
            <input
              :disabled="sending"
              v-model="email"
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <!-- message -->
        <div
          class="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5"
        >
          <div>
            <label
              for="message"
              class="block text-sm/6 font-medium text-gray-900 sm:mt-1.5"
            >
              Message
            </label>
          </div>
          <div class="sm:col-span-2">
            <textarea
              :disabled="sending"
              v-model="message"
              rows="10"
              name="message"
              id="message"
              placeholder="Your Message"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Action buttons -->
    <div class="shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
      <div class="flex justify-end space-x-3">
        <button
          type="button"
          class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          @click="isDrawerOpen = false"
        >
          Cancel
        </button>
        <button
          v-if="sending"
          disabled
          class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Sending...
        </button>
        <button
          v-else
          type="submit"
          @click.prevent="submitForm"
          class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send Message
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { DialogTitle } from "@headlessui/vue";

type FormFeedbackType = "incomplete" | "consent" | "invalid" | "success" | null;

const { isDrawerOpen, drawerContent } = useUiState();
const sending = ref(false);
const contactForm = ref<HTMLFormElement>();

const name = ref("");
const email = ref("");
const message = ref("");

const formFeedback: Ref<FormFeedbackType> = ref(null);
const success = ref(true);

const submitForm = () => {
  sending.value = true;
  formFeedback.value = null;

  if (!name.value.trim() || !email.value.trim()) {
    formFeedback.value = "incomplete";
    sending.value = false;
    return;
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (email.value && !regex.test(email.value)) {
    formFeedback.value = "invalid";
    success.value = false;
    sending.value = false;
    return;
  }

  const formData = new FormData(contactForm.value);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};
</script>

<style></style>
