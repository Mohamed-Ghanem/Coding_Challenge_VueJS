import * as type from "@/actions"

const state = {
  todos: [
    // {
    //   id
    //   title
    //   completed
    // }
  ]
};

const mutations = {
  [type.addTodo]: (state, payload) => {
    const newTask = {
      id: payload.newId,
      title: payload.title,
      completed: false
    };
    state.todos = [newTask, ...state.todos]
  },
  [type.toggleTodo]: (state, payload) => {
    state.todos = state.todos.map(todo => {
      if (todo.id === payload) {
        todo.completed = !todo.completed;
        return todo;
      }
      else {
        return todo
      }
    })
  },
  [type.deleteTodo]: (state, payload) => {
    state.todos = state.todos.filter(todo => todo.id !== payload);
  }
};

const actions = {
  [type.addTodo]: (context, payload) => {
    context.commit(type.addTodo, payload);
  },
  [type.toggleTodo]: (context, payload) => {
    context.commit(type.toggleTodo, payload);
  },
  [type.deleteTodo]: (context, payload) => {
    context.commit(type.deleteTodo, payload);
  }
};

export default {
  state,
  mutations,
  actions
}
