<template>
  <div
    v-if="visible"
    role="alert"
    class="alert fixed top-0 z-50"
    :class="{
      'alert-error': type === 'error',
      'alert-success': type === 'success',
    }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>

    <span>
      {{ msg || (type === "error"
        ? "خطا! عملیات ناموفق بود."
        : "عملیات موفقیت آمیز بود.") }}
    </span>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "error",
  },
  msg: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 5000, // 5 seconds
  },
});

const visible = ref(true);
let timer = null;

// reset & auto-hide when type or msg changes
watch(
  () => [props.type, props.msg],
  () => {
    visible.value = true;

    clearTimeout(timer);
    timer = setTimeout(() => {
      visible.value = false;
    }, props.duration);
  },
  { immediate: true }
);

onUnmounted(() => clearTimeout(timer));
</script>
