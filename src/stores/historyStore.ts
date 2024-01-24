import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { IHistoryElement } from '@/interfaces/IHistoryElement';

export const useHistoryStore = defineStore('statistics', () => {
  const history = ref<IHistoryElement[] | null>(null);
  const allVideosCount = ref<number | null>(null);

  function setHistory(h: any[]) {
    history.value = h;
  }

  function setAllVideosCount(count: number) {
    allVideosCount.value = count;
  }

  return { history, setHistory, allVideosCount, setAllVideosCount };
});
