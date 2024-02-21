<script setup lang="ts">
import { useTdStore } from '@/stores/useTdStore'
import { ref } from 'vue'
import { COUNTER_CH } from './channels';

const { sendCHOP } = useTdStore();
const count = ref(0);

const incCounter = () => {
  count.value++;
  sendCHOP(COUNTER_CH, [count.value])
}
const resetCounter = () => {
  count.value = 0;
  sendCHOP(COUNTER_CH, [count.value])
}

</script>

<template>
  <h3 @click="incCounter" @contextmenu.prevent="resetCounter">
    Counter {{ count }}
  </h3>
</template>

<style scoped>
h3 {
  font-size: 2rem;
  transition: all 0.1s ease-out;
}

h3:hover {
  font-size: 2.5rem;
  color: var(--color-accent);
}
</style>