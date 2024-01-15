<script setup lang="ts">
import { useHistoryStore } from '@/stores/historyStore';
import FileComponent from '@/components/FileComponent.vue';
import StatisticsComponent from '@/components/StatisticsComponent.vue';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import Footer from '@/components/Footer.vue';

dayjs.locale('pl');
const historyStore = useHistoryStore();
</script>

<template>
  <main class="flex flex-col items-center justify-center min-h-svh py-12 px-4 max-w-4xl mx-auto">
    <h1 class="text-4xl font-black mb-8">LekkieStatystyki</h1>
    <FileComponent v-if="!historyStore.history" />
    <StatisticsComponent v-else />
  </main>

  <Footer />
</template>
