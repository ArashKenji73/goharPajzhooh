<template>
  <form class="" v-if="props.modelValue">
    <EmployeeInfo v-model="props.modelValue">
      <FamilySection v-model="props.modelValue.family" />
        <button @click.prevent="updateEmployee(props.modelValue.id)" class="btn-success py-2 px-4 bg-blue-500 text-white">ذخیره اطلاعات</button>
    </EmployeeInfo>

  </form>
</template>

<script setup>
import { reactive } from "vue";
import EmployeeInfo from "./EmployeeInfo.vue";
import FamilySection from "./FamilySection.vue";
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
});

const updateEmployee = (id) => {
  console.log("Updating employee with ID:", id);
};

</script>
