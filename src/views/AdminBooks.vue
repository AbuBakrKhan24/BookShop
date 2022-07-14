<template>
  <!-- <div class="container"> -->
  <!-- <div class=""> -->

  <div>
    <!-- books table -->
    <div class="book-display" v-if="books">
      <table class="table">
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
              <div class="edit_buttons">
                <i class="fa-solid fa-trash bin"></i
                ><i
                  class="fa-solid fa-pen edit"
                  onclick="editProperty(${
                properties.id
              });"
                ></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Users table -->
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import BookCard from "../components/BookCard.vue";
export default {
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
};
</script>
<style>
/* body {
  background-image: linear-gradient(
    to left bottom,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
} */
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
</style>
