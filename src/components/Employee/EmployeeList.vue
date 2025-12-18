<template>

  <div v-if="loading">loading</div>
  <div v-else-if="error">Error: {{ error }}</div>
  
  <div v-else v-for="employee in employees" :key="employee.id" class="mb-4">
    <Employee :employee="employee" />
  </div>
</template>

<script setup>

import Employee from "./Employee.vue";
import useEmployee from "@/composables/useEmployee";
const { employees, loading, error, getEmployees } = useEmployee();
getEmployees();
</script>

<style lang="scss" scoped></style>
