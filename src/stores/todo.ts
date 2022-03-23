import { defineStore } from "pinia";

export const useTodoStore = defineStore({
  id: "todoStore",
  state: () => ({
    todos: [] as Array<string>,
  }),
  getters: {
    todoList: (state) => state.todos,
  },
  actions: {
    addTodo(todo: string) {
      this.todos.push(todo);
    },
    deleteTodo(todoToBeDeleted: string) {
      this.todos = this.todos.filter(
        (todo: string) => todo !== todoToBeDeleted
      );
    },
    updateTodo(prevTodo: string, todoToBeUpdated: string) {
      this.todoList[this.todoList.indexOf(prevTodo)] = todoToBeUpdated;
    },
  },
});
