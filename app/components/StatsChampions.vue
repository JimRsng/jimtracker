<script setup lang="ts">
defineProps<{
  data: ChampionStats[];
  champions?: { id: string, name: string }[];
}>();
</script>

<template>
  <div class="flex items-center justify-start gap-0 overflow-auto max-w-180 pb-4 pt-2">
    <div v-for="champ in data" :key="champ.champion_id" class="flex flex-col items-center gap-3 min-w-26 md:min-w-36">
      <img :src="getChampionIcon(champ.champion_id)" class="w-12 h-12" :alt="String(champ.champion_id)" :title="champions?.find(c => c.id === String(champ.champion_id))!.name">
      <span class="text-xs md:text-base text-slate-400 font-semibold leading-none text-nowrap">
        <span class="text-blue-400 text-nowrap">{{ champ.wins }}</span>V · <span class="text-rose-400">{{ champ.losses }}</span>D (<span class="text-slate-100">{{ champ.count }}</span>)
      </span>
      <span class="text-xs md:text-base text-slate-100 font-semibold leading-none text-nowrap">{{ ((champ.wins / champ.count) * 100).toFixed(1) }}% WR</span>
      <span class="text-xs text-slate-400 font-semibold leading-none flex flex-col gap-2">
        <span class="text-nowrap"><span class="text-blue-400">{{ champ.kills.toFixed(0) }}</span> / <span class="text-rose-400">{{ champ.deaths.toFixed(0) }}</span> / <span class="text-yellow-200">{{ champ.assists.toFixed(0) }}</span></span>
        <span class="text-nowrap">(<span class="text-slate-100">{{ champ.deaths > 0 ? ((Number(champ.kills.toFixed(0)) + Number(champ.assists.toFixed(0))) / (Number(champ.deaths.toFixed(0)))).toFixed(2) : "Perfect" }}</span> KDA)</span>
      </span>
    </div>
  </div>
</template>
