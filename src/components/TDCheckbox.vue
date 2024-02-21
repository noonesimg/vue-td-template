<script setup lang="ts">
import { useTdStore } from '@/stores/useTdStore'
import { ref } from 'vue'
import { CHECK_CH } from './channels';

const { sendCHOP } = useTdStore();

const check = ref(0);

const onCheck = () => {
  sendCHOP(CHECK_CH, [check.value])
}
</script>

<template>
  <span class="checkbox-container">
    <input type="checkbox" v-model="check" @change="onCheck">
    <label>Checkbox</label>
  </span>
</template>

<style>

</style>