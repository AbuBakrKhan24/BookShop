<template>
  <div>
    <img :src="user.cover" style="height: 100px" />
    <div class="user-details">
      <h2>{{ user.title }}</h2>
      <p>{{ user.description }}</p>
      <p>{{ user.tags }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user"],
};
</script>
<style></style>
