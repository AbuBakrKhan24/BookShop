<template>
  <div class="home">
    <SignUpForm msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpForm from "@/components/SignUpForm.vue";

export default {
  data() {
    return {
      avatar: "",
    };
  },
  name: "SignUpView",
  components: {
    SignUpForm,
  },
};
</script>
