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

<script>
import store from "@/store/store";
import * as type from "@/actions";

export default {
  data() {
    return {
      title: "",
      newId: 0
    };
  },
  methods: {
    addTodo() {
      store.dispatch(type.addTodo, this);
      this.newId++;
      this.title = "";
    }
  }
};
</script>

<style lang="css">
</style>
