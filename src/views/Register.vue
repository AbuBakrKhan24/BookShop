<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="email" />
      <input type="text" v-model="password" />
      <button type="submit">login</button>
    </form>
    <div v-if="user">Welcome {{ user.username }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      avatar: "",
      about: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    register() {
      return this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
        username: this.username,
        avatar: this.avatar,
        about: this.about,
      });
    },
  },
};
</script>
<style></style>
