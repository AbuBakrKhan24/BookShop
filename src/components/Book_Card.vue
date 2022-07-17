<template>
  <!-- <div class="col-md-4"> -->
  <div>
    <img :src="book.cover" style="height: 100px" />
    <div class="book-details">
      <h2>{{ book.title }}</h2>
      <p>{{ book.description }}</p>
      <p>{{ book.tags }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book"],
};
</script>
<style></style>