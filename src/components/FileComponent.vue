<script setup lang="ts">
import { filterLSVideosFromHistory, filterVideosWithChannelNames } from '@/utils';
import { useHistoryStore } from '@/stores/historyStore';

const historyStore = useHistoryStore();

const handleJsonUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  const reader = new FileReader();

  if (file && file.name.endsWith('.json')) {
    reader.readAsText(file, 'UTF-8');
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === 'string') {
        const json = JSON.parse(result);
        historyStore.setHistory(filterLSVideosFromHistory(filterVideosWithChannelNames(json)));
      }
    };
  }
};
</script>

<template>
  <div class="mx-auto w-full">
    <label class="block mb-2 text-sm font-medium" for="file-input">
      Wgraj plik JSON z historią oglądanych filmów
    </label>

    <input
      type="file"
      id="file-input"
      @change="handleJsonUpload"
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      placeholder="Nie wgrano pliku"
    />

    <small class="mt-4 block text-gray-600">
      Instrukcja jak wyeksportować historię oglądanych filmów z YouTube znajduje się
      <a
        href="https://github.com/Akasiek/lekkiestatystyki#jak-wyeksportowa%C4%87-plik"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 hover:underline"
        >tutaj</a
      >.
    </small>
  </div>
</template>
