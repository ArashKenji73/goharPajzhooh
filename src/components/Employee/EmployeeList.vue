<template>

  <div v-if="loading"><span class="loading loading-spinner loading-md"></span></div>
  <div v-else-if="error">Error: {{ error }}</div>
  
  <div v-else v-for="employee in employees" :key="employee.id" class="mb-4">
    <Employee :employee="employee" />
  </div>

  <!-- Open the modal using ID.showModal() method -->
  <button class="flex gap-2 h-10 px-4 items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold rounded-full" onclick="my_modal_2.showModal()">افزودن کارمند</button>
  <dialog id="my_modal_2" class="modal">
    <div class="modal-box p-0">
      <EmployeeInfo/>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

</template>

<script setup>
import EmployeeInfo from "./EmployeeInfo.vue";
import Employee from "./Employee.vue";
import useEmployee from "@/composables/useEmployee";
const { employees, loading, error, getEmployees } = useEmployee();
getEmployees();
</script>

<style lang="scss" scoped></style>
