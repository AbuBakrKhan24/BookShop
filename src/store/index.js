// import { createStore } from "vuex";

// export default createStore({
//   state: {
//     books: null,
//     user: null,
//   },
//   getters: {},
//   mutations: {
//     setUser: (state, user) => {
//       state.user = user;
//     },
//   },
//   actions: {
//     login: async (context, payload) => {
//       const { email, password } = payload;
//       const response = await fetch(
//         `http://localhost:3000/users?email=${email}&password=${password}`
//       );
//       const userData = await response.json();
//       context.commit("setUser", userData[0]);
//     },
//   },
//   modules: {},
// });

import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    book: null,
    books: null,
},

  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setBook: (state, book) => {
      state.book = book;
    },
    setBooks: (state, books) => {
      state.books = books;
    },
},
actions: {
    // USER
    // LOGIN USER
    login: async (context, payload) => {
      const { email, password } = payload;
      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const userData = await response.json();
      if (userData.length) return context.commit("setUser", userData[0]);
      if (!userData.length) return alert("No user found");
    },
    // REGISTER USER
    register: async (context, user) => {
      fetch("`http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },

    // BOOKS
    // SHOW ALL OF EM BOOKS
    getBooks: async (context) => {
      fetch("http://localhost:3000/books")
        .then((res) => res.json())
        .then((data) => context.commit("setBooks", data))
        .catch((err) => console.log(err.message));
    },

    // SHOW ONE BOOK
    getBook: async (context, id) => {
      fetch("http://localhost:3000/books/" + id)
        .then((response) => response.json())
        .then((json) => context.commit("setBook", json));
    },

    // ADD A BOOK
    addBook: async (context, book) => {
      fetch("http://localhost:3000/books", {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setBook", json));
    },

    // DELETE A BOOK
    deleteBook: async (context, id) => {
      fetch("http://localhost:3000/books/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => context.dispatch("getBooks"));
    },

    // UPDATE A BOOK
    updateBook: async (context, book) => {
      const {
        id,
        genre,
        file,
        cover,
        title,
        pages,
        tags,
        audience,
        description,
        year,
      } = book;
      fetch("http://localhost:3000/books/" + id, {
        method: "PUT",
        body: JSON.stringify({
          genre: genre,
          file: file,
          cover: cover,
          title: title,
          pages: pages,
          tags: tags,
          audience: audience,
          description: description,
          year: year,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setBook", json));
    },

    // PROFILE
    // DELETE A USER
    deleteUser: async (context, id) => {
      fetch("http://localhost:3000/users/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },

    // UPDATE A USER
    updateUserInfo: async (context, user) => {
      const { about, location, id } = user;
      fetch("http://localhost:3000/users/" + id, {
        method: "PUT",
        body: JSON.stringify({
          about: about,
          location: location,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },
},
  modules: {},
});
