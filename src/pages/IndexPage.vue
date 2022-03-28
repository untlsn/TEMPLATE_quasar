<script lang="ts" setup>

const num = ref(0);
</script>

<template>
  <q-page class="flex flex-col gap-4 items-center justify-center">
    <p class="text-5xl animate-bounce animate-duration-1000">
      Hello World!
    </p>
    <button
      class="text-2xl rounded-lg border-2 transition-bgc"
      hover="bg-black bg-opacity-10"
      p="x-4 y-1"
      @click="num++"
    >
      Count
      {{ num }}
    </button>
  </q-page>
</template>

<style>
.transition-bgc {
  transition: background-color .3s;
}
</style>
