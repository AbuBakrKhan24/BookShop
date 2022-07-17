<template>
  <div class="home">
    <landing msg="Welcome to Your Vue.js App"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>

 
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'

export default {
  name: 'HomeView',
  components: {
    Landing
  }
}
</script>
