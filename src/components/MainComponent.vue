<script setup lang="ts">
import { useTdStore } from '@/stores/useTdStore'
import { onMounted } from 'vue'
import { BUTTON_CH, CHECK_CH, COUNTER_CH } from './channels';
import TDButton from './TDButton.vue';
import TDCounter from './TDCounter.vue';
import TDCheckbox from './TDCheckbox.vue';
import TDValueVisualizer from './TDValueVisualizer.vue';

const { connect } = useTdStore();


onMounted(() => {
  const channels = [
    { name: COUNTER_CH, values: [0] },
    { name: BUTTON_CH, values: [0] },
    { name: CHECK_CH, values: [0] }
  ] as TDChannel[]

  connect(9966, 'VueUI', channels)
})
</script>

<template>
  <div class="main-container">
    <TDCounter/>
    <TDButton/>
    <TDCheckbox/>
    <TDValueVisualizer name="chan1"/>
    <TDValueVisualizer name="chan2"/>
  </div>
</template>

<style scoped>
.main-container {
  width: 80%;
  padding: 20px;
  user-select: none;
  background-color: var(--color-bg2);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  opacity: 0.95;
}
.channels {
  display: flex;
  flex-direction: column;
  position: absolute;
}
.channels:hover {
  color: red;
}
.channels > span {
  /* transition: all 0.1s; */
  width: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
