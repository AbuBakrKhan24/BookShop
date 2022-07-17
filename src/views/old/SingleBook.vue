<template>
  <!-- <p>This is the id {{ $route.params.id }}</p> -->
  <div v-if="book" class="div">
    <div class="buttons mt-5">
      <button
        type="button"
        class="btn btn-outline-light"
        @click="deleteBook(book.id)"
        v-if="book.createdBy === user.id"
      >
        Delete
      </button>

      <!-- Button trigger modal   -->
      <button
        v-if="book.createdBy === user.id"
        type="button"
        class="btn btn-light-outilne"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit
      </button>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Your Book</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateBook">
              <div class="title form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Title"
                  v-model="book.title"
                />
                <label for="floatingTitle">Title</label>
              </div>
              <div class="description form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingDescription"
                  placeholder="Description"
                  v-model="book.description"
                />
                <label for="floatingDescription">Description</label>
              </div>
              <div class="form-floating genre">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="genre"
                >
                  <option value="art">Art</option>
                  <option value="education">Education</option>
                  <option value="biography">Biography</option>
                  <option value="business">Business</option>
                  <option value="child & youth">Child & Youth</option>
                  <option value="environment">Environment</option>
                  <option value="health">Health</option>
                  <option value="fiction & literature">
                    Fiction & Literature
                  </option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="personal growth">Personal Growth</option>
                  <option value="religion">Religion</option>
                  <option value="law">Law</option>
                  <option value="technology">Technology</option>
                  <option value="science">Science</option>
                </select>
                <label for="floatingGenre">Genre</label>
              </div>
              <div class="year form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="floatingYear"
                  placeholder="Year"
                  v-model="book.year"
                />
                <label for="floatingYear">Year</label>
              </div>
              <div class="pages form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="floatingPages"
                  placeholder="Pages"
                  v-model="book.pages"
                />
                <label for="floatingPages">Pages</label>
              </div>
              <div class="tags form-floating">
                <select class="form-select" v-model="tags">
                  <option selected>Open this select menu</option>
                  <option value="drawing">Drawing</option>
                  <option value="design">Design</option>
                  <option value="programming">Programming</option>
                  <option value="self-improvement">Self-environment</option>
                  <option value="economy">Economy</option>
                  <option value="biology">Biology</option>
                  <option value="inspirational">Inspirational</option>
                  <option value="parenting">Parenting</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="garden">Garden</option>
                  <option value="spirituality">Spirituality</option>
                  <option value="politics">Politics</option>
                </select>
                <label for="floatingTags">Tags</label>
              </div>
              <div class="file form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingFile"
                  placeholder="file url"
                  v-model="book.file"
                />
                <label for="floatingInput">Url of work</label>
              </div>
              <div class="cover form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingCover"
                  placeholder="Cover"
                  v-model="book.cover"
                />
                <label for="floatingPassword">Cover</label>
              </div>
              <button type="submit">Save</button>
            </form>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-outline-dark mb-5"
      @click="addReadingList(book)"
      v-if="user"
    >
      Read this
    </button>
    <div
      class="container-fluid d-flex justify-content-center align-text-center"
    >
      <div class="singleBookCard mb-2">
        <img v-bind:src="book.cover" />
        <h3 class="mt-2">{{ book.title }}</h3>
      </div>
    </div>

    <div class="container-similar d-flex">
      <div
        v-for="book in similarBooks"
        :key="book.id"
        class="SimilarBooks mt-2"
      >
        <div class="cards">
          <div class="bookDetails">
            <img :src="book.cover" />
            <p>{{ book.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    book() {
      console.log(this.$store.state.book);
      return this.$store.state.book;
    },
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
    similarBooks() {
      return this.$store.state.books?.filter((book) => {
        return book?.genre === this.book?.genre;
      });
    },
  },
  mounted() {
    this.$store.dispatch("getBook", this.id);
  },
  data() {
    return {
      genre: "",
      file: "",
      cover: "",
      title: "",
      pages: "",
      tags: "",
      description: "",
      year: "",
    };
  },
  methods: {
    updateBook() {
      this.$store.dispatch("updateBook", this.book);
    },
    addReadingList(book) {
      this.$store.dispatch("addReadingList", book);
    },
    deleteBook(id) {
      this.$store.dispatch("deleteBook", id);
    },
  },
};
</script>
<style>
body {
  overflow-x: hidden;
}
.container-similar {
  background-color: white;
}
img {
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}

.cards {
  /* box-shadow: black 1px, 1px; */
  display: flex;
  padding: 2px;
  border-radius: 4%;
  flex-direction: row;
  margin-bottom: 100px;
  padding: 10px;
  width: fit-content;
  box-shadow: 20px 20px 20px 10px rgba(0, 0, 0, 0.2);
}
.text {
  text-decoration: underline;
}
.div {
  height: 85vh;
}

.container {
  height: 79vh;
}
.singleBookCard {
  background-color: white;
  width: 300px;
  padding: 20px;
  border-radius: 4%;
}

/* .btn:hover {
    color: var(--bs-btn-hover-color);
    background-color: var(--bs-btn-hover-bg);
    border-color: var(--bs-btn-hover-border-color);
} */
</style>
