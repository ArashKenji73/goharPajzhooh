<template>

  <form class="" v-if="props.modelValue">
    <EmployeeInfo  :employee="props.modelValue" />
  </form>
</template>

<script setup>


import EmployeeInfo from "./EmployeeInfo.vue";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
});
</script>
