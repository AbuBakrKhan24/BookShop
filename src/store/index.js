import { createStore } from "vuex";

export default createStore({
  state: {
    books: null,
    user: null,
  },
  getters: {},
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    login: async (context, payload) => {
      const { email, password } = payload;
      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const userData = await response.json();
      context.commit("setUser", userData[0]);
    },
  },
  modules: {},
});
