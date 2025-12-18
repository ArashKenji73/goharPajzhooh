<template>
  <Alerts v-if="error" :type="'error'" :msg="error" />
  <Alerts v-if="success" :type="'success'" />
  <form class="" v-if="props.modelValue">
    <EmployeeInfo v-model="props.modelValue">
      <FamilySection v-model="props.modelValue.family" />
        <button @click.prevent="updateEmployee(props.modelValue.id)" class="btn-success py-2 px-4 bg-blue-500 text-white">ذخیره اطلاعات</button>
    </EmployeeInfo>

  </form>
</template>

<script setup>

import Alerts from "@/components/Alerts.vue";
import EmployeeInfo from "./EmployeeInfo.vue";
import FamilySection from "./FamilySection.vue";
import useEmployee from "@/composables/useEmployee";
const { updateEmployeeByID, error, success } = useEmployee();
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
});

const updateEmployee = async(id) => {
  const result = await updateEmployeeByID(id, props.modelValue);
  console.log(result);
};

</script>
