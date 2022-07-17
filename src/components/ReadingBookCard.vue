<template>
  <div class="card d-flex justify-content-between mt-5">
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
        ><button class="btn btn-outline-secondary ms-4">
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
.btn-group {
  margin: 10px;
  padding: 5px;
}
.card {
  margin-bottom: 20px;
}
@media only screen and (max-width: 1200px) {
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 300px; */
  }
  img {
    width: 150px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
  }
  button {
    width: fit-content;
  }
}
</style>
