<script setup lang="ts">
import { useTimeAgoIntl } from "@vueuse/core";

const config = useRuntimeConfig();
const buildInfo = config.public.buildInfo;
const timeAgo = useTimeAgoIntl(buildInfo.time, {
  locale: "es",
  relativeTimeFormatOptions: {
    style: "long"
  }
});
</script>

<template>
  <div id="layout" class="flex flex-col min-h-screen items-center *:w-full">
    <SiteHeader />
    <div class="relative grow max-w-screen">
      <img class="absolute top-0 inset-s-0 w-40 md:w-60 p-2 pointer-events-none select-none -z-1" src="/images/corner.png">
      <img class="absolute top-0 inset-e-0 w-40 md:w-60 p-2 rotate-y-180 pointer-events-none select-none -z-1" src="/images/corner.png">
      <div class="lg:container mx-auto py-5 px-2">
        <slot />
      </div>
    </div>
    <UFooter id="footer" :ui="{ top: 'p-0!', center: 'm-0!', container: 'pt-7.5! bg-elevated' }">
      <template #top>
        <USeparator
          color="primary"
          class="-mb-3.5"
          :avatar="{
            src: SITE.logo,
            alt: SITE.main,
            size: 'sm',
            ui: { image: 'light:invert' },
          }"
        />
      </template>
      <template #left>
        <div class="flex flex-col gap-2 lg:gap-1 lg:text-left text-center">
          <div class="flex flex-col lg:flex-row items-center gap-2">
            <p class="text-sm">{{ SITE.name }} · {{ SITE.main }} © {{ new Date().getFullYear() }}</p>
            <UPopover mode="hover" :content="{ side: 'top' }" arrow>
              <NuxtLink :to="`${SITE.github.repository}/commit/${buildInfo.commit}`" target="_blank">
                <UBadge
                  color="neutral"
                  variant="subtle"
                  class="flex hover:text-highlighted hover:underline text-muted"
                >
                  <span class="font-mono">Build {{ buildInfo.shortCommit }}</span>
                </UBadge>
              </NuxtLink>
              <template #content>
                <p>{{ timeAgo }}</p>
              </template>
            </UPopover>
          </div>
          <p class="text-muted text-sm max-w-150 lg:max-w-full">
            {{ SITE.name }} ({{ SITE.main }}) no está respaldado por Riot Games y no refleja las opiniones o puntos de vista de Riot Games ni de nadie involucrado oficialmente en la producción o gestión de League of Legends.
          </p>
        </div>
      </template>
      <template #center />
      <span class="text-sm">
        <NuxtLink :to="SITE.github.repository" target="_blank" class="dark:text-blue-300 light:text-blue-500 font-semibold hover:underline">Creado</NuxtLink>
        con ❤️ por
        <NuxtLink :to="SITE.github.authors.ahmed.url" target="_blank" class="dark:text-emerald-300 light:text-emerald-600 font-semibold hover:underline">
          {{ SITE.github.authors.ahmed.name }}
        </NuxtLink>
        y
        <NuxtLink :to="SITE.github.authors.yizack.url" target="_blank" class="dark:text-yellow-300 light:text-yellow-600 font-semibold hover:underline">
          {{ SITE.github.authors.yizack.name }}
        </NuxtLink>
      </span>
      <template #right>
        <NuxtLink :to="SITE.github.repository" target="_blank" class="hover:text-highlighted">
          <Icon name="simple-icons:github" size="2rem" />
        </NuxtLink>
      </template>
    </UFooter>
  </div>
</template>
