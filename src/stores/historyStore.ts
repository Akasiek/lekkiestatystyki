import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { IHistoryElement } from '@/interfaces/IHistoryElement';

export const useHistoryStore = defineStore('statistics', () => {
  const history = ref<IHistoryElement[] | null>(null);

  function setHistory(h: any[]) {
    history.value = h;
  }

  return { history, setHistory };
});
