<template>
  <!-- <p>This is the id {{ $route.params.id }}</p> -->
  <div v-if="book" class="div ">
    

    <!-- editModal -->
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
              <button class="btn" type="submit">Save</button>
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

 

    <!-- Display the single book -->
    <div class="container-fluid d-flex justify-content-center align-text-center row  p-5 ">
      <div class="singleBookCard mb-2 col-md-6 shadow-sm">
        <div class="buttons d-flex justify-content-evenly align-items-center mb-4 ">
      <!-- Delete book if user is owner -->
      <button
        type="button"
        class="btn btn-outline-light"
        @click="deleteBook(book.id)"
        v-if="book.createdBy === user.id"
      >
        Delete
      </button>

      <!-- Edit modal if user is owner -->
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
        <img v-bind:src="book.cover" />
        <h3 class="text mt-2">{{ book.title }}</h3>
        
      </div>
      <div class="displaySingleDetails col-md-6 d-flex flex-column justify-content-center align-text-center p-2 ">
        <div class="action-buttons d-flex justify-content-evenly align-text-center mb-5">
        <a :href="book.file" target="_blank"><button class="btn ">Download Now</button></a>
        <button @click="addReadingList(book)" v-if="user" class="btn">
        Add to Reading List
        </button>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam facilis nostrum odio distinctio earum blanditiis cum error qui! Tempore in deleniti optio nostrum officiis, distinctio natus maiores nesciunt culpa.</p>
        <p class="text">Genre: <span> {{ book.genre}}</span></p>
        <p class="text"> #{{ book.tags}}</p>
           
      </div>
    </div>

    <!-- Display 5 similar books by genre -->
    <h4 class="text mb-1">View Similar Books Below</h4>
    <div class="container-similar d-flex flex-wrap justify-content-center align-text-center shadow-sm m-5 ">
       
      <BookCard v-for="book in similarBooks" :key="book.id" :book="book" />
      
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";
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
  components: {BookCard},
};
</script>
<style scoped>
body {
  overflow-x: hidden;
  font-family: 'Questrial', sans-serif;
}
.container-similar {
  background-color: white;
}
img {
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  filter: drop-shadow(4px 3px 7px rgb(112, 112, 112))
}
.text {
  
  color:#fcb63c;
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
.btn {
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
.btn:hover {
  background: #fcb63c;
  background-image: -webkit-linear-gradient(top, #fcb63c, #d932d9);
  background-image: -moz-linear-gradient(top, #fcb63c, #d932d9);
  background-image: -ms-linear-gradient(top, #fcb63c, #d932d9);
  background-image: -o-linear-gradient(top, #fcb63c, #d932d9);
  background-image: linear-gradient(to bottom, #fcb63c, #d932d9);
  text-decoration: none;
}


</style>