<script setup lang="ts">
const data = ref([
  {
    tipo: "Sub tier 1",
    oportunidad: "1 oportunidad"
  },
  {
    tipo: "Sub tier 2",
    oportunidad: "4 oportunidades"
  },
  {
    tipo: "Sub tier 3",
    oportunidad: "9 oportunidades"
  },
  {
    tipo: "Canjeo puntos (500.000)",
    oportunidad: "máximo 1 por persona = 1 oportunidad"
  },
  {
    tipo: "Donadores de subs",
    oportunidad: "Tier 1 = 1 oportunidad\nTier 2 = 4 oportunidades\nTier 3 = 9 oportunidades"
  },
  {
    tipo: "Donadores de bits (1000 bits)",
    oportunidad: "1 oportunidad"
  },
  {
    tipo: "Donadores directos (10 USD)",
    oportunidad: "1 oportunidad"
  },
  {
    tipo: "Los primos (60 meses o más suscritos)",
    oportunidad: "2 oportunidades"
  }
]);
</script>

<template>
  <main class="flex flex-col md:flex-row gap-2 p-4 items-start">
    <section class="md:w-2/4 w-full">
      <div class="rounded-lg overflow-hidden shadow-lg w-full">
        <video class="w-full h-auto object-cover" playsinline autoplay loop muted preload="metadata" tabindex="0">
          <source src="/videos/sorteo-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    <aside class="md:w-2/4 w-full bg-neutral-950/75 border border-slate-400/40 rounded p-6" aria-labelledby="bases-title">
      <h2 class="text-base mb-2"><span class="font-semibold">FECHA:</span> 9 de agosto, 2026</h2>
      <h2 class="text-lg uppercase font-semibold mb-2">Bases para ganar</h2>
      <div class="overflow-x-auto">
        <UTable
          :data="data"
          :ui="{
            td: 'p-2 text-neutral-300 text-base whitespace-pre-wrap',
          }"
        />
      </div>
    </aside>
  </main>
</template>
