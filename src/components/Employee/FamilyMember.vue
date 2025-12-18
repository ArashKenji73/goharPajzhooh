<template>
  <div class="relative border border-gray-200 rounded-lg p-4 my-8 pt-8">
    <h2 class="font-bold absolute right-4 -top-3 bg-white text-black px-4">
      #{{ index + 1 }}
    </h2>

    <button
      type="button"
      @click="$emit('remove')"
      class="absolute right-20 -top-5 mb-0 bg-red-500 hover:bg-red-600 px-4 py-2 text-white font-bold rounded-full"
    >
      حذف
    </button>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <input v-model="member.name" class="w-full input p-2 shadow" placeholder="نام" />
      <input type="date" v-model="member.dateOfBirth" class="w-full input p-2 shadow" />

      <select v-model="member.relation" class="w-full input p-2 shadow">
        <option value="spouse">همسر</option>
        <option value="child">فرزند</option>
        <option value="father">پدر</option>
        <option value="mother">مادر</option>
      </select>
    </div>
  </div>
</template>

<script setup>
defineProps({
  member: Object,
  index: Number,
});

defineEmits(["remove"]);
</script>
