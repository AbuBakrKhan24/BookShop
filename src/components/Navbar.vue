<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |

    <div v-if="user">
      <router-link to="/library">Library</router-link> |
      <router-link to="/profile">Profile</router-link> |
    </div>
    <div v-else>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
