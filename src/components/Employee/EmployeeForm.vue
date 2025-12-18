<template>

  <form class="" v-if="props.modelValue">
    <EmployeeInfo v-model="props.modelValue">
      <FamilySection v-model="props.modelValue.family" />
    </EmployeeInfo>

  </form>
</template>

<script setup>


import EmployeeInfo from "./EmployeeInfo.vue";
import FamilySection from "./FamilySection.vue";
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
});
</script>
