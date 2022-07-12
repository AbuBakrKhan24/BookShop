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
      context.commit("setUser", userData[0]);
    },
    // REGISTER USER
    register: async (context, payload) => {
      const { email, password, username, avatar, about } = payload;
      fetch("`http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          username: username,
          avatar: avatar,
          about: about,
        }),
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
    addBook: async (context, payload) => {
      const {
        genre,
        file,
        cover,
        title,
        pages,
        tags,
        audience,
        description,
        year,
      } = payload;
      fetch("http://localhost:3000/books", {
        method: "POST",
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
  },

  // DELETE A BOOK
  deleteBook: async (context, id) => {
    fetch("http://localhost:3000/books/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => context.commit("setBook", json));
  },

  // UPDATE A BOOK
  updateBook: async (context, id) => {
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
  modules: {},
});
