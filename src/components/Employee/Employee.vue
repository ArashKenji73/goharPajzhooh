<template>
  <Alerts v-if="error" :type="'error'" :msg="error" />
  <Alerts v-if="success" :type="'success'" />
  <div
    class="collapse collapse-arrow bg-base-100 border border-base-300"
    @click.once="getData"
  >
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title font-semibold">
      {{ employee.firstName }} {{ employee.lastName }}
    </div>
    <div class="collapse-content text-sm">
      <button
        class="w-8 h-8 rounded-lg flex justify-center items-center bg-red-500"
        @click="deleteEmployee(employee.id)"
      >
        <TrashIcon class="size-5 text-white" />
      </button>
      <div v-if="loading">
        <span class="loading loading-spinner loading-md"></span>
      </div>
      <template v-else>
        <!-- {{ singleEmployee }} -->
        <EmployeeForm :modelValue="singleEmployee" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Alerts from "@/components/Alerts.vue";
import EmployeeForm from "./EmployeeForm.vue";
import useEmployee from "@/composables/useEmployee";
import { TrashIcon } from "@heroicons/vue/24/solid";
const { getEmployeeByID, deleteEmployee, loading, success, error } = useEmployee();
const props = defineProps({
  employee: {
    type: Object,
    required: true,
  },
});

const singleEmployee = ref(null);
const getData = async () => {
  const data = await getEmployeeByID(props.employee.id);
  singleEmployee.value = data;
};
</script>

<style lang="scss" scoped></style>
