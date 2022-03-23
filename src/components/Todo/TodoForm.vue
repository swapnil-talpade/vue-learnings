<template>
  <div class="form">
    <input
      type="text"
      name="todo"
      id="todo"
      :value="todoState"
      class="textbox"
      placeholder="enter your todo task"
      @input="handleChange"
    />
    <button @click="handleAddTodo" class="form-button">AddTodo</button>
  </div>
  <TodosList />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../../stores/todo";
import TodosList from "./TodosList.vue";
const todos = useTodoStore();
const todoState = ref("");

const handleAddTodo = () => {
  todos.addTodo(todoState.value);
  todoState.value = "";
};

const handleChange = (e: Event) => {
  const target = <HTMLInputElement>e.target;
  todoState.value = target.value;
};
</script>

<style>
.textbox {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
.form-button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
