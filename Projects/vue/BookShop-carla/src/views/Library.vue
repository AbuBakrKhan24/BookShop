<template>
  <div class="container p-3">
    <div class="book-display row" v-if="books">
      <button @click="sortBooks">Sort By Title</button>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add a book
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">ADD A BOOK</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addBook">
                <div class="title form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Title"
                    v-model="title"
                  />
                  <label for="floatingTitle">Title</label>
                </div>
                <div class="description form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingDescription"
                    placeholder="Description"
                    v-model="description"
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
                    v-model="year"
                  />
                  <label for="floatingYear">Year</label>
                </div>
                <div class="pages form-floating">
                  <input
                    type="number"
                    class="form-control"
                    id="floatingPages"
                    placeholder="Pages"
                    v-model="pages"
                  />
                  <label for="floatingPages">Pages</label>
                </div>
                <div class="tags form-floating">
                  <select class="form-select" v-model="tags">
                    <option selected>Open this select menu</option>
                    <option value="drawing">Drawing</option>
                    <option value="design">Design</option>
                    <option value="programming">Programming</option>
                    <option value="self-environment">Self-environment</option>
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
                    v-model="file"
                  />
                  <label for="floatingInput">Url of work</label>
                </div>
                <div class="cover form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingCover"
                    placeholder="Cover"
                    v-model="cover"
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

      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";
export default {
  props: ["id"],
  computed: {
    books() {
      console.log(this.$store.state.books);
      return this.$store.state.books;
    },
  },

  components: { BookCard },

  mounted() {
    this.$store.dispatch("getBooks");
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
    addBook() {
      const book = {
        genre: this.genre,
        file: this.file,
        cover: this.cover,
        title: this.title,
        pages: this.pages,
        tags: this.tags,
        description: this.description,
        year: this.year,
      };
      this.$store.dispatch("addBook", book);
    },
    sortBooks() {
      this.$store.commit("sortBooksByTitle");
    },
  },
};
</script>
<style>
.book-display {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
