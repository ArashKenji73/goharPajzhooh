<template>
  <Alerts v-if="error" :type="'error'" :msg="error" />
  <Alerts v-if="success" :type="'success'" />
  <section class="rounded-xl shadow p-6 space-y-4">
    <h2 class="text-lg font-semibold text-gray-800">اطلاعات کارمند</h2>

    <Form :validation-schema="schema" v-slot="{ meta }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field
          name="firstName"
          v-model="model.firstName"
          class="w-full input p-2 shadow"
          placeholder="نام"
        />

        <Field
          name="lastName"
          v-model="model.lastName"
          class="w-full input p-2 shadow"
          placeholder="نام خانوادگی"
        />

        <div>
          <Field
            name="email"
            type="email"
            v-model="model.email"
            class="w-full input p-2 shadow"
            placeholder="ایمیل"
          />
          <ErrorMessage name="email" class="text-red-500 text-sm" />
        </div>
        <Field
          name="dateOfBirth"
          type="date"
          v-model="model.dateOfBirth"
          class="w-full input p-2 shadow"
        />
      </div>
      <FamilySection v-model="model.family" />
      <button
        :disabled="!meta.valid || meta.pending"
        @click.prevent="handleSubmit(model.id)"
        class="mt-4 btn-success py-2 px-4 bg-blue-500 text-white"
      >
        ذخیره اطلاعات
      </button>
    </Form>
  </section>
</template>

<script setup>
import { reactive, computed } from "vue";
import Alerts from "@/components/Alerts.vue";
import useEmployee from "@/composables/useEmployee";
import FamilySection from "./FamilySection.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
const { updateEmployeeByID, createEmployee, error, success } = useEmployee();

// Determine mode
const isUpdate = computed(() => !!props.employee?.id);
// Vue 3.4+ model
const props = defineProps({
  employee: {
    type: Object,
    default: () => ({}),
  },
});

const model = reactive({
  id: props.employee?.id || null,
  firstName: props.employee?.firstName || "",
  lastName: props.employee?.lastName || "",
  email: props.employee?.email || "",
  dateOfBirth: props.employee?.dateOfBirth || "",
  family: props.employee?.family || [],
});
// Yup validation schema
const schema = yup.object({
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
});

// Submit handler
const handleSubmit = async () => {
  if (isUpdate.value) {
    await updateEmployeeByID(props.employee.id, model);
  } else {
    await createEmployee(model);
  }
};
</script>
