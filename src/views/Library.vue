<template>
  <div class="container p-3">
    <div class="book-display row">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";
export default {
  components: { BookCard },
  data() {
    return { books: [] };
  },
  mounted() {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => (this.books = data))
      .catch((err) => console.log(err.message));
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
