<script setup lang="ts">
import type { IHistoryElement } from '../interfaces/IHistoryElement';
import { getSubtextFromVideoCount, groupByTitles } from '@/utils';
import { useHistoryStore } from '@/stores/historyStore';
import DayOfTheWeekChart from '@/components/DayOfTheWeekChart.vue';
import MostVideosWatchedTable from '@/components/MostVideosWatchedTable.vue';
import MostActiveDaysTable from '@/components/MostActiveDaysTable.vue';

const historyStore = useHistoryStore();
</script>

<template>
  <div class="prose max-w-none w-full mb-16 mt-4">
    <div>
      <h1 class="text-center text-5xl my-4">
        Wszystkie filmy: <i>{{ (historyStore.history as IHistoryElement[]).length }}</i>
      </h1>
      <h2 class="text-center text-3xl my-6 font-black">
        Unikalnych filmów:
        <i>{{ groupByTitles(historyStore.history as IHistoryElement[]).length }}</i>
      </h2>
      <p class="text-center italic text-sm">
        {{ getSubtextFromVideoCount((historyStore.history as IHistoryElement[]).length) }}
      </p>
    </div>

    <MostVideosWatchedTable />

    <MostActiveDaysTable />

    <div class="mt-12">
      <DayOfTheWeekChart />
    </div>
  </div>
</template>

<style scoped></style>
