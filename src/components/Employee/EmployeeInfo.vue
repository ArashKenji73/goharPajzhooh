<template>
  <section class="rounded-xl shadow p-6 space-y-4">
    <h2 class="text-lg font-semibold text-gray-800">
      اطلاعات کارمند
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input v-model="model.firstName" class="w-full input p-2 shadow" placeholder="نام" />
      <input v-model="model.lastName" class="w-full input p-2 shadow" placeholder="نام خانوادگی" />
      <input v-model="model.email" class="w-full input p-2 shadow" placeholder="ایمیل" />
      <input type="date" v-model="model.dateOfBirth" class="w-full input p-2 shadow" />
    </div>
    <slot></slot>
  </section>
</template>

<script setup>
const model = defineModel(); // Vue 3.4+
</script>
