<template>
    <div class="collapse collapse-arrow bg-base-100 border border-base-300" @click.once="getData">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title font-semibold">
       {{ employee.firstName }} {{ employee.lastName }}
      </div>
      <div class="collapse-content text-sm">
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
import EmployeeForm from './EmployeeForm.vue';
import useEmployee from "@/composables/useEmployee";
const { getEmployeeByID, loading } = useEmployee();
const props = defineProps({
  employee: {
    type: Object,
    required: true,
  },
});

const singleEmployee = ref(null);
const getData = async () => {
  const data =  await getEmployeeByID(props.employee.id);
  singleEmployee.value = data;  
} 
</script>

<style lang="scss" scoped>

</style>