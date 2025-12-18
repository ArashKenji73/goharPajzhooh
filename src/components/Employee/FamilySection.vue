<template>
  <section class="rounded-xl shadow p-6 space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold text-gray-800">
        اعضای خانواده
      </h2>

      <button
        type="button"
        @click="addMember"
        class="h-10 px-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded-full"
      >
        + افزودن عضو
      </button>
    </div>

    <FamilyMember
      v-for="(member, index) in props.modelValue"
      :key="member.id"
      :member="member"
      :index="index"
      @remove="removeMember(index)"
    />

    <!-- <p
      v-if="!model.length"
      class="text-sm text-gray-500 text-center py-6"
    >
      هنوز عضوی اضافه نشده است
    </p> -->
  </section>
</template>

<script setup>
import FamilyMember from "./FamilyMember.vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const addMember = () => {
  props.modelValue.push({
    name: "",
    dateOfBirth: "",
    relation: "",
  });
};

const removeMember = (index) => {
  modelValue.value.splice(index, 1);
};
</script>
