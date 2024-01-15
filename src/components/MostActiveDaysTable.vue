<script setup lang="ts">
import type { IHistoryElement } from '@/interfaces/IHistoryElement';
import { useHistoryStore } from '@/stores/historyStore';
import { groupByDay, groupByTitles } from '@/utils';
import TableComponent from '@/components/TableComponent.vue';
import dayjs from 'dayjs';

const historyStore = useHistoryStore();

const grouped = groupByDay(historyStore.history as IHistoryElement[]).slice(0, 5);

const data = grouped.map((items) => {
  return {
    cells: [
      {
        value: dayjs(items.day).format('dddd, D MMMM YYYY'),
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
  <TableComponent :data="data" :labels="['Dzień', 'Ilość filmów']" title="Top 5 aktywnych dni" />
</template>

<style scoped></style>
