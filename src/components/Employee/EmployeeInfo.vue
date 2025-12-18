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

      <slot></slot>

      <button
        :disabled="!meta.valid || meta.pending"
        @click.prevent="updateEmployee(model.id)"
        class="mt-4 btn-success py-2 px-4 bg-blue-500 text-white"
      >
        ذخیره اطلاعات
      </button>
    </Form>
  </section>
</template>

<script setup>
import Alerts from "@/components/Alerts.vue";
import useEmployee from "@/composables/useEmployee";
import { defineModel } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
const { updateEmployeeByID, error, success } = useEmployee();

// Vue 3.4+ model
const model = defineModel();

// Yup validation schema
const schema = yup.object({
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
});

const updateEmployee = async (id) => {
  const result = await updateEmployeeByID(id, model.value);
};
</script>
