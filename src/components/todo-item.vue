<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3
          class="headline mb-0"
          :class="{'completed': todo.completed}">
          {{ todo.title }}
        </h3>
      </div>
    </v-card-title>
    <v-btn @click="toggleTodo()">
      {{ todo.completed ? 'UnComplete': 'Complete' }}
    </v-btn>
    <v-btn
      color="error"
      @click="deleteTodo()">
      Delete
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "@/store/store";
import * as type from "@/actions";
import ITodo from '@/models/todo';

@Component
export default class TodoItem extends Vue {
  @Prop() private todo!: ITodo;

  toggleTodo(): void {
    store.dispatch(type.toggleTodo, this.todo.id);
  }
  deleteTodo(): void {
    store.dispatch(type.deleteTodo, this.todo.id);
  }
}
</script>

<style lang="css">
.completed {
  text-decoration: line-through;
}
</style>
