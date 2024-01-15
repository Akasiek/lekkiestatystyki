<script setup lang="ts">
import type { IHistoryElement } from '@/interfaces/IHistoryElement';
import { groupByTitles } from '@/utils';
import { useHistoryStore } from '@/stores/historyStore';
import TableComponent from '@/components/TableComponent.vue';

const historyStore = useHistoryStore();

const grouped = groupByTitles(historyStore.history as IHistoryElement[]).slice(0, 5);

const data = grouped.map((items) => {
  return {
    cells: [
      {
        value: items.title,
        isBold: false
      },
      {
        value: items.count,
        isBold: true
      }
    ]
  };
});
</script>

<template>
  <TableComponent :data="data" :labels="['Tytuł', 'Liczba wyświetleń']" title="Top 5 filmów" />
</template>

<style scoped></style>
