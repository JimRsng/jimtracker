<script setup lang="ts">
const data = ref([
  {
    tipo: "Sub tier 1",
    chances: "1 chance de ganar."
  },
  {
    tipo: "Sub tier 2",
    chances: "4 chances de ganar."
  },
  {
    tipo: "Sub tier 3",
    chances: "9 chances de ganar."
  },
  {
    tipo: "Canjeo puntos (500.000)",
    chances: "máximo 1 por persona = 1 chance de ganar."
  },
  {
    tipo: "Donadores de subs (1 sub)",
    chances: "máximo 1 por persona = 1 chance de ganar."
  },
  {
    tipo: "Donadores de bits (1000 bits)",
    chances: "1 chance de ganar."
  },
  {
    tipo: "Donadores directos (10 USD)",
    chances: "1 chance de ganar."
  },
  {
    tipo: "Los primos (60 meses o más suscritos)",
    chances: "2 chances de ganar."
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
      <h2 class="text-lg uppercase font-semibold mb-2">Bases</h2>
      <div class="overflow-x-auto">
        <UTable
          :data="data"
          :ui="{
            td: 'p-2 text-neutral-300 text-base whitespace-normal',
          }"
        />
      </div>
    </aside>
  </main>
</template>
