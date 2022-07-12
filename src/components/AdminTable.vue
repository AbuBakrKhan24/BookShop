<template>
  <div class="container">
    <div class="adminbooks">
      <div class="card">
        <AdminTable v-for="book in books" :key="book.id" :book="book" />
      </div>
    </div>
  </div>
</template>
<script>
import AdminTable from "../components/AdminTable.vue";
export default {
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  components: { AdminTable },
  data() {
    return { books: [] };
  },
  mounted() {
    fetch("http://localhost:3000/users")
      .them((res) => res.json())
      .then((data) => (this.books = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style>
.adminbooks {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
