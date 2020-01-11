<template lang="html">
  <form @submit.prevent="addTodo">
    <v-text-field
      label="Todo"
      placeholder="What do you have to do?"
      solo
      v-model="title"
    />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import store from "@/store/store";
import * as type from "@/actions";

@Component
export default class TodoForm extends Vue {
  private id: number = 0;
  private title: string = "";

  addTodo(): void {
    store.dispatch(type.addTodo, this);
    this.id++;
    this.title = "";
  }
}
</script>

<style lang="css">
</style>
