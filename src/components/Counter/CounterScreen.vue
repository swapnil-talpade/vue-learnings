<template>
  <button @click="incrementCounter">Increment me</button>
  <h1>{{ count }}</h1>
  <button @click="decrementCounter">Decrement me</button>
</template>

<script setup lang="ts">
import { defineProps } from "vue-demi";
defineProps<{
  decrementCounter: () => void;
  incrementCounter: () => void;
  count: number;
}>();
</script>
