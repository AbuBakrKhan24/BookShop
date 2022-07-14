<template>
  <div class="showReadingList">
    <img :src="book.cover" style="height: 100px" />
    <div class="book-details">
      <h2>{{ book.title }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    readingList() {
      console.log(this.$store.state.readingList);
      return this.$store.state.readingList;
    },
  },

  mounted() {
    this.$store.dispatch("getReadingList");
  },
};
</script>
<style></style>
