<script setup lang="ts">
import type { IHistoryElement } from '@/interfaces/IHistoryElement';
import { groupByTitles } from '@/utils';
import { useHistoryStore } from '@/stores/historyStore';
import TableComponent from '@/components/TableComponent.vue';

const historyStore = useHistoryStore();

const grouped = groupByTitles(historyStore.history as IHistoryElement[]).slice(0, 10);

const data = grouped.map((items) => {
  return {
    cells: [
      {
        value: items.title,
        isBold: false,
        link: items.link
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
  <TableComponent :data="data" :labels="['Tytuł', 'Liczba wyświetleń']" title="Top 10 filmów" />
</template>

<style scoped></style>
