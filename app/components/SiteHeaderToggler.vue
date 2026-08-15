<script setup lang="ts">
const subHeader = ref(false);
const pointerEvents = ref(false);

const toggleSubHeader = () => {
  subHeader.value = !subHeader.value;
  if (pointerEvents.value) {
    pointerEvents.value = false;
    return;
  }
  setTimeout(() => {
    pointerEvents.value = true;
  }, 600);
};
</script>

<template>
  <div
    class="fixed justify-center z-1 transition-all lg:flex hidden duration-300"
    :class="subHeader ? 'top-24.5 hover:top-26' : 'top-12.5 hover:top-14'"
  >
    <UButton
      v-if="subHeader"
      class="rounded-t-none rounded-b-full"
      icon="lucide:chevron-up"
      :ui="{ base: 'py-0 px-3 hover:bg-primary' }"
      size="sm"
      @click="toggleSubHeader"
    />
    <UButton
      v-else
      class="rounded-t-none rounded-b-full"
      icon="lucide:chevron-down"
      :ui="{ base: 'py-0 px-3 hover:bg-primary' }"
      size="sm"
      @click="toggleSubHeader"
    />
  </div>
  <span
    class="sticky top-14 z-50 *:transition-all *:duration-200"
    :class="[subHeader ? '*:top-14 *:h-12' : '*:h-0 *:-z-1 *:opacity-0', { 'pointer-events-none': !pointerEvents }]"
  >
    <slot />
  </span>
</template>
