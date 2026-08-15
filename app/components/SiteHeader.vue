<script setup lang="ts">
const { pages: navPages, bodyPages } = await useNavbar();

const subHeader = ref(false);
const subHeaderPointerEvents = ref(false);
const toggleSubHeader = () => {
  subHeader.value = !subHeader.value;
  if (subHeaderPointerEvents.value) {
    subHeaderPointerEvents.value = false;
    return;
  }
  setTimeout(() => {
    subHeaderPointerEvents.value = true;
  }, 600);
};
</script>

<template>
  <!-- center div -->
  <div
    class="fixed flex justify-center z-1 transition-all"
    :class="subHeader ? 'top-24.5 hover:top-26' : 'top-12.5 hover:top-14 duration-200'"
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
  <UHeader>
    <template #title>
      <div class="flex items-center gap-2">
        <img :src="SITE.logo" class="h-10 w-auto light:invert" :alt="SITE.main">
        <h1 class="font-normal text-lg uppercase font-bebas tracking-widest">{{ SITE.main }}</h1>
      </div>
    </template>
    <UNavigationMenu
      id="nav-main"
      :items="navPages.main"
      variant="link"
      class="w-full justify-center"
      :ui="{ linkLabel: 'uppercase', item: 'p-0' }"
    />
    <USeparator orientation="vertical" class="h-8 mx-4" color="primary" />
    <UNavigationMenu
      :items="navPages.apps"
      variant="link"
      class="w-full justify-center"
      :ui="{ linkLabel: 'uppercase', item: 'p-0' }"
    />
    <template #body>
      <UNavigationMenu
        id="nav-body-main"
        :items="bodyPages.main"
        variant="link"
        orientation="vertical"
        class="w-full justify-center"
        :ui="{ linkLabel: 'uppercase' }"
      />
      <USeparator orientation="horizontal" class="my-4" color="primary" />
      <UNavigationMenu
        :items="bodyPages.apps"
        variant="link"
        orientation="vertical"
        class="w-full justify-center"
        :ui="{ linkLabel: 'uppercase' }"
      />
    </template>
  </UHeader>
  <UHeader
    class="transition-all duration-200"
    :class="[subHeader ? 'top-14 h-12' : 'h-0 -z-1 opacity-0', { 'pointer-events-none': !subHeaderPointerEvents }]"
    :toggle="false"
  >
    <UNavigationMenu
      :items="bodyPages.apps?.find(item => item.label === SITE.name)?.children || []"
      variant="link"
      arrow
    />

    <template #title>
      <div class="flex items-center gap-2">
        <h2>{{ SITE.name }}</h2>
      </div>
    </template>
  </UHeader>
</template>
