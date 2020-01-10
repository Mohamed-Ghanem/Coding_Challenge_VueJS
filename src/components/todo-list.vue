<template lang="html">
  <div>
    <TodoItem
      class="mb-3"
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"/>
  </div>
</template>

<script>
import TodoItem from "@/components/todo-item";
import { mapState } from "vuex";

export default {
  computed: mapState({
    todos: state => state.todos.todos
  }),
  components: {
    TodoItem
  }
};
</script>

<style lang="css">
</style>
