<script setup lang="ts">
import { ref } from 'vue'

const fileRef = ref<File | null>(null)

const handleJsonUpload = (event: Event) => {
  const files = (event.target as HTMLInputElement).files
  if (files && files.length > 0) {
    fileRef.value = files[0]
  }
}
</script>

<template>
  <div class="bg-amber-300 w-screen h-screen">
    <!--    <input type="file" :value="fileRef" @change="handleJsonUpload" />-->
    TESt
  </div>
</template>
