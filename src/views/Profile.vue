<template>
  <div class="container p-3">
    <div class="profile-display row">
      <BookCard v-for="user in users" :key="user.id" :user="user" />
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
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => (this.books = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style></style>
