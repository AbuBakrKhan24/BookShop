<template>
  <router-link :to="{ name: 'SingleBook', params: { id: book.id } }">
    <div class="col-md-4">
      <img :src="book.cover" style="height: 100px" />
      <div class="book-details">
        <h2>{{ book.title }}</h2>
        <p>{{ book.description }}</p>
        <p>{{ book.tags }}</p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["book"],
};
</script>
<style></style>
