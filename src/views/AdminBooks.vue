<template>
  <!-- <div class="container"> -->
  <!-- <div class=""> -->
  <!-- MODAL -->
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="add-btn mb-3"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add a book
    </button>
    <!-- FILTERS -->
    <div>
      <input type="text" v-model="search" placeholder="Search" />
      <select class="tilet-select" v-model="genre">
        <option value="all">All</option>
        <option value="art">Art</option>
        <option value="education">Education</option>
        <option value="biography">Biography</option>
        <option value="business">Business</option>
        <option value="child and youth">Child and youth</option>
        <option value="environment">Environment</option>
        <option value="health">Health</option>
        <option value="fiction and literature">Fiction and Literature</option>
        <option value="personal growth">Personal Growth</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="religion">Religion</option>
        <option value="law">Law</option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
      </select>
    </div>

    <!-- Modal 1 -->
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
                  <option value="child and youth">Child and Youth</option>
                  <option value="environment">Environment</option>
                  <option value="health">Health</option>
                  <option value="fiction and literature">
                    Fiction and Literature
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
  </div>
  <!-- books table -->
  <div class="book-display" v-if="books">
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Genre</th>
          <th scope="col">Cover</th>
          <th scope="col">Title</th>
          <th scope="col">Pages</th>
          <th scope="col">Tags</th>
          <th scope="col">Audience</th>
          <th scope="col">Description</th>
          <th scope="col">Year</th>
          <th scope="col">Created By</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <th scope="row">{{ book.id }}</th>

          <td>{{ book.genre }}</td>
          <td><img v-bind:src="book.cover" /></td>
          <td>{{ book.title }}</td>
          <td>{{ book.pages }}</td>
          <td>{{ book.tags }}</td>
          <td>{{ book.audience }}</td>
          <td>{{ book.description }}</td>
          <td>{{ book.year }}</td>
          <td>{{ book.createdBy }}</td>
          <td>
            <div class="container">
              <div class="row align-items-start">
                <div class="col">
                  <button class="btn" @click="deleteBook(book.id)">
                    <i class="fa-solid fa-trash bin"></i>
                  </button>
                </div>
                <div class="col">
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#editmodal"
                  >
                    <i class="fa-solid fa-pen edit"></i>
                  </button>

                  <!-- Modal 2-->
                  <div class="modal fade" id="editmodal" tabindex="-1">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="editmodalLabel">
                            Edit Your Book
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="updateBook(book.id)">
                            <div class="title form-floating">
                              <input
                                type="text"
                                class="form-control mb-2"
                                id="floatingPassword"
                                placeholder="Title"
                                v-model="book.title"
                              />
                              <label for="floatingTitle">Title</label>
                            </div>
                            <div class="description form-floating">
                              <input
                                type="text"
                                class="form-control mb-2"
                                id="floatingDescription"
                                placeholder="Description"
                                v-model="book.description"
                              />
                              <label for="floatingDescription"
                                >Description</label
                              >
                            </div>
                            <div class="form-floating genre">
                              <select
                                class="form-select mb-2"
                                aria-label="Default select example"
                                v-model="genre"
                              >
                                <option value="art">Art</option>
                                <option value="education">Education</option>
                                <option value="biography">Biography</option>
                                <option value="business">Business</option>
                                <option value="child and youth">
                                  Child and Youth
                                </option>
                                <option value="environment">Environment</option>
                                <option value="health">Health</option>
                                <option value="fiction and literature">
                                  Fiction and Literature
                                </option>
                                <option value="lifestyle">Lifestyle</option>
                                <option value="personal growth">
                                  Personal Growth
                                </option>
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
                                class="form-control mb-2"
                                id="floatingYear"
                                placeholder="Year"
                                v-model="book.year"
                              />
                              <label for="floatingYear">Year</label>
                            </div>
                            <div class="pages form-floating">
                              <input
                                type="number"
                                class="form-control mb-2"
                                id="floatingPages"
                                placeholder="Pages"
                                v-model="book.pages"
                              />
                              <label for="floatingPages">Pages</label>
                            </div>
                            <div class="tags form-floating mb-2">
                              <select class="form-select" v-model="tags">
                                <option selected>Open this select menu</option>
                                <option value="drawing">Drawing</option>
                                <option value="design">Design</option>
                                <option value="programming">Programming</option>
                                <option value="self-improvement">
                                  Self-environment
                                </option>
                                <option value="economy">Economy</option>
                                <option value="biology">Biology</option>
                                <option value="inspirational">
                                  Inspirational
                                </option>
                                <option value="parenting">Parenting</option>
                                <option value="lifestyle">Lifestyle</option>
                                <option value="garden">Garden</option>
                                <option value="spirituality">
                                  Spirituality
                                </option>
                                <option value="politics">Politics</option>
                              </select>
                              <label for="floatingTags">Tags</label>
                            </div>
                            <div class="file form-floating mb-3">
                              <input
                                type="text"
                                class="form-control mb-2"
                                id="floatingFile"
                                placeholder="file url"
                                v-model="book.file"
                              />
                              <label for="floatingInput">Url of work</label>
                            </div>
                            <div class="cover form-floating">
                              <input
                                type="text"
                                class="form-control mb-2"
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
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import BookCard from "../components/BookCard.vue";
export default {
  props: ["id"],
  computed: {
    books() {
      return this.$store.state.books?.filter((book) => {
        let isMatch = true;
        if (!book.title?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.genre !== "all" && book.genre !== this.genre) isMatch = false;
        return isMatch;
      });
    },
  },
  components: { BookCard },
  mounted() {
    this.$store.dispatch("getBooks");
  },
  data() {
    return {
      search: "",
      genre: "all",
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
    updateBook(id) {
      this.$store.dispatch("updateBook", id);
    },
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
    deleteBook(id) {
      this.$store.dispatch("deleteBook", id);
    },
  },
};
</script>
<style>
nav a.router-link-exact-active {
  color: blue;
}
.table {
  background-color: lightgrey;
  overflow-y: hidden;
  width: 100%;
}
img {
  height: 100px;
}
.title-select{
  height:31px;
}
.add-btn {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  -webkit-box-shadow: 3px 3px 7px #6b686b;
  -moz-box-shadow: 3px 3px 7px #6b686b;
  box-shadow: 3px 3px 7px #6b686b;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #d99c34;
  padding: 10px 20px 10px 20px;
  border: solid #ff2ee7 0px;
  text-decoration: none;
}
.add-btn:hover {
  background: #fcb63c;
  background-image: -webkit-linear-gradient(top, #fcb63c, #d932d9);
  background-image: -moz-linear-gradient(top, #fcb63c, #d932d9);
  background-image: -ms-linear-gradient(top, #fcb63c, #d932d9);
  background-image: -o-linear-gradient(top, #fcb63c, #d932d9);
  background-image: linear-gradient(to bottom, #fcb63c, #d932d9);
  text-decoration: none;
}
</style>