<script setup lang="ts">
import { useTdStore } from '@/stores/useTdStore'
import { BUTTON_CH } from './channels';

const { sendCHOP } = useTdStore()

const btnDown = () => {
  sendCHOP(BUTTON_CH, [1])
}
const btnUp = () => {
  sendCHOP(BUTTON_CH, [0])
}
</script>


<template>
  <button class="button"
    @mousedown="btnDown"
    @mouseup="btnUp"
  >
    Button
  </button>
</template>

<style scoped>
.button {
  font-size: 1rem;
  min-height: 30px;
  box-sizing: border-box;
  background-color: var(--color-button);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  transition: all 0.07s ease-in;
  box-shadow: var(--box-shadow);
  border-radius: 4px;
}
.button:hover {
  color: var(--color-accent);
}

.button:active {
  border: 1px solid var(--color-border2);
  color: var(--color-bg);
  box-shadow: none;
}
</style>