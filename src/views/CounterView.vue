<script setup lang="ts">
import CounterScreen from "../components/Counter/CounterScreen.vue";
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();

const incrementCounter = () => {
  counter.increment();
};
const decrementCounter=()=>{
  counter.decrement();
}
</script>
<template>
  <main>
    <CounterScreen :incrementCounter="incrementCounter" :decrementCounter="decrementCounter" :count="counter.count" />
  </main>
</template>

<style></style>
