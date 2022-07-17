<template>
  <Navbar></Navbar>


  <router-view  :key="$route.fullPath"/>
</template>

<script>
// import Landing from "./components/Landing.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Varela&display=swap');

*{
font-family: 'Varela';
}
/* .profileAvatar[data-v-41458b80] {
    right: 100px;
    position: absolute;
    border-radius: 50%;
} */

div#footer {
    /* margin-top: 8%; */
    background-color: rgba(0, 0, 0, 0.367);
    /* width: 100%; */
}
#hello {
    padding-top: 155px;
    /* padding-top: 155px; */
    /* padding-bottom: 8%; */
    /* height: 100%; */
    /* height: 92vh; */
    background-image: linear-gradient( to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1 );
}

#app {
  /* height: 100vh; */

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: linear-gradient(
    to left bottom,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  ); */
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
} */

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
