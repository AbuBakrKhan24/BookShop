<template>

  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
     <div class="container">
    <div class="row">
      <div class="col">
        <h1>Hello there, we are BOOKDOM.</h1>
        <h4>The world's most-loved social storytelling platform</h4>
        <p class="text-muted mt-2">BOOKDOM connects a global community of 90 million readers and writers through the power of story.</p>

        <div class="buttons d-flex justify-content-center mt-5 mb-5">
          <button type="button" class="read btn btn-lg ms-5 text-light rounded-pill">Start Reading</button>
          <button type="button" class="write btn btn-lg ms-5 text-light rounded-pill">Start Writing</button>
        </div>
      </div>
      <div class="col">
        <img alt="Vue logo" src="https://github.com/AbuBakrKhan24/BookShop/blob/Sindile/src/assets/bookdom-removebg-preview.png?raw=true" class="img-fluid">
      </div>
    </div>
  </div>
  <!-- <div id="footer" class="">
    <div class="container d-flex justify-content-between">
      <p class="footer-text mt-5">© 2022 BOOKDOM</p>
      <ul class="icons mt-5 d-flex">
        <li class="ms-5 text-light"><i class="fa-brands fa-facebook"></i></li>
        <li class="ms-5 text-light"><i class="fa-brands fa-instagram"></i></li>
        <li class="ms-5 text-light"><i class="fa-brands fa-twitter"></i></li>
        <li></li>
      </ul>
    </div>
  </div> -->
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.col h1 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 600;
  font-size: 60px;
  color: white;
}

.col h4 {
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   margin-top: 30px;
}

.col {
  margin-top: 130px;
}

.hello {
  margin-top: 20px;
  background-image: linear-gradient(to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  min-height: 100vh;
}

img {
  height: 50vh;
}

button.read {
  background-color: rgba(255, 152, 104);
}

button.read:hover {
  background-color: rgba(81, 153, 252);
}

button.write {
  background-color: rgba(255, 80, 104);
}

button.write:hover {
  background-color: rgba(81, 153, 252);
}

#footer {
  height: 100px;
  /* background-color: grey; */
  background-color: rgba(0,0,0,.367);
  position: relative;
}
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
