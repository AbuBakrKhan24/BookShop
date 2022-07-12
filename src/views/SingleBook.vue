<template>
  <p>This is the id {{ $route.params.id }}</p>
  <div v-if="book">
    <div class="singleBookCard">
      <img v-bind:src="book.cover" />
      <p>{{ book.title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    book() {
      console.log(this.$store.state.book);
      return this.$store.state.book;
    },
  },
  mounted() {
    this.$store.dispatch("getBook", this.id);
  },
  methods: {},
};
</script>
<style></style>
