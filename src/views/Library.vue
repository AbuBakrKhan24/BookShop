<template>
  <div class="container p-3">
    <div class="book-display row" v-if="books">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
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
.book-display {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
