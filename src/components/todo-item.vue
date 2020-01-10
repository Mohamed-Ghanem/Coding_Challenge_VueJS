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

<script>
import store from "@/store/store";
import * as type from "@/actions";

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleTodo() {
      store.dispatch(type.toggleTodo, this.todo.id);
    },
    deleteTodo() {
      store.dispatch(type.deleteTodo, this.todo.id);
    }
  }
};
</script>

<style lang="css">
.completed {
  text-decoration: line-through;
}
</style>
