<script setup lang="ts">
const { data } = defineProps<{
  title: string;
  labels: string[];
  data: { cells: { value: string | number; isBold: boolean }[] }[];
}>();
</script>

<template>
  <div class="relative overflow-x-auto">
    <h2 class="text-center">{{ title }}</h2>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">#</th>
          <th v-for="label in labels" scope="col" class="px-6 py-3" :key="label">{{ label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in data"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">
            {{ index + 1 }}
          </td>
          <template v-for="cell in row.cells">
            <th
              v-if="cell.isBold"
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white pr-4"
            >
              {{ cell.value }}
            </th>
            <td v-else class="px-6 py-4">{{ cell.value }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
