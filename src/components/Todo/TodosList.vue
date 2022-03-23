<script setup lang="ts">
import { useTodoStore } from "../../stores/todo";
const todos = useTodoStore();
const onUpdatehandler = (todo: string) => {
  const updatedTodo = prompt(`update this todo with text : ${todo}`, todo);
  todos.updateTodo(todo, updatedTodo);
};
</script>

<template>
  <div v-for="todo in todos.todoList" :key="todo" class="todosContainer">
    <div class="todos">
      <h1>{{ todo }}</h1>
      <div>
        <button @click="todos.deleteTodo(todo)" class="button">delete</button>
        <button @click="onUpdatehandler(todo)" class="button update">
          update
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.todosContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.todos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  width: 40%;
  padding: 10px;
  margin: 10px;
}

.button {
  background-color: red;
  border: none;
  color: white;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 10px;
}
.update {
  background-color: lightblue;
}
</style>
