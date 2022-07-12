<template>
  <p>This is the id {{ $route.params.id }}</p>
  <div v-if="book">
    <div class="singleBookCard">
      <img :src="book.image" />
      <p>{{ book.title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    book() {
      console.log(this.$store.state.book);
      return this.$store.state.book;
    },
  },
  mounted() {
    this.$store.dispatch("getBook");
  },
};
</script>
<style></style>
