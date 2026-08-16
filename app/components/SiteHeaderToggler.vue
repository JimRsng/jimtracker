<script setup lang="ts">
const showHeader = ref(false);
const pointerEvents = ref(false);

const toggleSubHeader = () => {
  showHeader.value = !showHeader.value;
  if (pointerEvents.value) {
    pointerEvents.value = false;
    return;
  }
  setTimeout(() => {
    pointerEvents.value = true;
  }, 600);
};

const icon = computed(() => showHeader.value ? "lucide:chevron-up" : "lucide:chevron-down");
</script>

<template>
  <div class="lg:flex hidden justify-center z-1">
    <div
      class="fixed transition-all duration-300 group"
      :class="showHeader ? 'top-24.5 hover:top-25.5' : 'top-12.5 hover:top-13.5'"
    >
      <UButton
        class="absolute rounded-t-none rounded-b-full opacity-50 -z-1"
        :class="{ 'animate-ping': !showHeader }"
        :ui="{ base: 'py-0 px-3' }"
        size="sm"
      >
        <template #leading>
          <span class="size-4" />
        </template>
      </UButton>
      <UButton
        class="rounded-t-none rounded-b-full"

        :ui="{ base: 'py-0 px-3 hover:bg-primary' }"
        size="sm"
        @click="toggleSubHeader"
      >
        <template #leading>
          <UIcon :key="icon" :name="icon" class="size-4" />
        </template>
      </UButton>
    </div>
  </div>
  <span
    class="sticky top-14 z-50 *:transition-all *:duration-200"
    :class="[showHeader ? '*:top-14 *:h-12' : '*:h-0 *:-z-1 *:opacity-0', { 'pointer-events-none': !pointerEvents }]"
  >
    <slot />
  </span>
</template>
