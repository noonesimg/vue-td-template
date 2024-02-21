<script setup lang="ts">
import { computed } from 'vue';
import { useTdStore } from '@/stores/useTdStore';

const { td } = useTdStore();

const props = defineProps({
  name: String
})

const value = computed(() => {
  if (!props.name)
    return 0;
  
  if (td.channels[props.name])
    return td.channels[props.name][0]
  else 
    return 0;
})

</script>

<template>
  <div class="td-visualizer-container">
    <span>{{ name }}</span>
    <div class="td-value">
      <div class="thumb" :style="{
        left: `${value}%`
      }">
      </div>
    </div>
  </div>
</template>

<style scoped>
.td-visualizer-container {
  min-height: 10px;
  display: flex;
  gap: 10px;
}
.td-value {
  display: flex;
  flex: 1;
  border: 1px solid var(--color-border);
  position: relative;
}
.thumb {
  height: 100%;
  width: 10px;
  background-color: gold;
  position: absolute;
}
</style>