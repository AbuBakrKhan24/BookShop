<template lang="">
  <div>
    <input type="text" v-model="search" placeholder="Search" />
    <select v-model="genre">
      <option value="all">All</option>
      <option value="art">Art</option>
      <option value="education">Education</option>
      <option value="biography">Biography</option>
      <option value="business">Business</option>
      <option value="child & youth">Child & youth</option>
      <option value="environment">Environment</option>
      <option value="health">Health</option>
      <option value="fiction & literature">Fiction & Literature</option>
      <option value="personal growth">Personal Growth</option>
      <option value="lifestyle">Lifestyle</option>
      <option value="religion">Religion</option>
      <option value="law">Law</option>
      <option value="technology">Technology</option>
      <option value="science">Science</option>
    </select>
    <div class="book-display row" v-if="books"></div>
    <tr v-for="book of books"></tr>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      genre: "all",
    };
  },
  computed: {
    books() {
      return this.$store.state.books?.filter((book) => {
        let isMatch = true;
        if (!book.title?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.genre !== "all" && book.genre !== this.genre) isMatch = false;
        return isMatch;
      });
    },
  },
};
</script>
<style></style>
