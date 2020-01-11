<template lang="html">
  <div>
    <TodoItem
      class="mb-3"
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoItem from "@/components/todo-item.vue";
import { mapState } from "vuex";
import ITodo from '@/models/todo';

@Component({
  computed: mapState({
    todos: (state: any) => state.todos.todos
  }),
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  private todos!: ITodo[]; // is assigned via mapState
}
</script>

<style lang="css">
</style>
