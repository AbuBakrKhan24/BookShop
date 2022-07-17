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
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style></style>
