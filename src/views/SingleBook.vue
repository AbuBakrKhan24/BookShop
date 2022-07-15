<template>
  <p>This is the id {{ $route.params.id }}</p>
  <div v-if="book">
    <button @click="deleteBook(book.id)" v-if="book.createdBy === user.id">
      Delete
    </button>

    <!-- Button trigger modal -->
    <button
      v-if="book.createdBy === user.id"
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Edit
    </button>

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
    <button @click="addReadingList(book)" v-if="user">Read this</button>
    <div class="singleBookCard">
      <img v-bind:src="book.cover" />
      <p>{{ book.title }}</p>
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
<style></style>
