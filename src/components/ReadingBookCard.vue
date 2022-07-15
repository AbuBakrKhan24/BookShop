<template>
  <div class="col-md-4 p-3 card d-flex justify-content-between">
    <img :src="book.cover" style="height: 100px" />
    <div class="book-details">
      <h4>{{ book.title }}</h4>
    </div>
    <div class="btn-group d-flex">
      <button
        @click="deleteReadingListItem(book)"
        class="btn btn-outline-secondary"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
      <router-link :to="{ name: 'SingleBook', params: { id: book.id } }"
        ><button class="btn btn-outline-secondary">
          View Details
        </button></router-link
      >
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
<style scoped>
img {
  object-fit: cover;
}
</style>
Footer
