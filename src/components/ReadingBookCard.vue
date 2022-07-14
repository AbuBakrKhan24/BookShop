<template>
  <div class="col-md-6 card">
    <img :src="book.cover" style="height: 100px" />
    <div class="book-details">
      <p>{{ book.title }}</p>
      <p>{{ book.description }}</p>
      <p>{{ book.tags }}</p>
      <button @click="deleteReadingListItem(book)">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book"],
  methods: {
    deleteReadingListItem(book) {
      this.$store.dispatch("removeReadingList", book);
    },
  },
};
</script>
<style>
img {
  object-fit: cover;
}
</style>
