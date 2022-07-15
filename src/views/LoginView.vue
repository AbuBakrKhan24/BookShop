<template>
  <div class="box">
    <div class="Form_Holder mt-5">
      <div class="card" style="width: fit-content">
        <form @submit.prevent="login">
          <p>Log in to Bookdom</p>
          <fieldset>
            <!-- Username -->
            <label
              >Enter Email
              <input type="text" name="user-name" required v-model="email"
            /></label>
            <!-- Username done -->
            <!-- Password -->
            <label
              >Enter Password
              <input type="text" name="user-name" required v-model="password"
            /></label>
            <!-- Password done -->
          </fieldset>
          <!-- Button to submit  -->
          <input type="submit" value="Login" />
          <!-- <button type="submit">login</button> -->
          <!-- Button to submit done -->
        </form>
        <div v-if="user">Welcome {{ user.username }}</div>
        <!-- <div v-else class="error">Error Credentials Does Not Match!</div> -->
        <footer>
          Don't have an account?
          <router-link to="/signup">Sign Up</router-link>
        </footer>
      </div>
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
<style lang="scss" scoped>
// box
.box {
  min-height: 88vh;
  background-image: url(https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/Decoration/border-design.png?raw=true);
  object-fit: cover;
}
// box done

// Form_Holder
.Form_Holder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5%;
}
// Form_Holder done

form {
  width: 60vw;
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  padding-bottom: 2em;
}

// Headeing
p {
  margin-top: 3rem;
  margin-bottom: 1rem;

  font-size: 24px;
  font-weight: 700;
}
// Headeing done

fieldset {
  border: none;
  padding: 2rem 30px;
}

label {
  display: block;
  margin: 0.5rem 0;
}

input,
textarea,
select {
  margin: 10px 0 0 0;
  width: 100%;
  min-height: 2em;
}

input,
textarea {
  background-color: #ffffff;
  border: 1px solid #0a0a23;
  color: #0a0a23;
}

.inline {
  width: unset;
  margin: 0 0.5em 0 0;
  vertical-align: middle;
}

input[type="submit"] {
  display: block;
  width: 60%;
  margin: 1em auto;
  height: 2em;
  font-size: 1.1rem;
  // background-color: #3b3b4f;
  // /* border-color: white; */
  // min-width: 300px;
}

input[type="submit"]:focus {
  background-color: #0a0a23;
  color: white;
}

input[type="file"] {
  padding: 1px 2px;
}

a {
  color: #0a0a23;
}

.error {
  color: red;
}

footer {
  margin-bottom: 10%;
}
</style>
