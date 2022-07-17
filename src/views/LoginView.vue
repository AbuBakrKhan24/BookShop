<template>
  <div class="box">
    <div class="Form_Holder">
      <div class="card" style="width: fit-content">
        <svg
          class="book-shelf"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 84 94"
          height="150"
          width="150"
        >
          <path
            fill="none"
            d="M37.612 92.805L4.487 73.71c-2.75-1.587-4.45-4.52-4.45-7.687L.008 27.877c-.003-3.154 1.676-6.063 4.405-7.634L37.558 1.167c2.73-1.57 6.096-1.566 8.835.013l33.124 19.096c2.75 1.586 4.45 4.518 4.45 7.686l.028 38.146c.002 3.154-1.677 6.063-4.406 7.634L46.445 92.818c-2.73 1.57-6.096 1.566-8.834-.013z"
          />
          <g class="book-shelf__book book-shelf__book--one" fill-rule="evenodd">
            <path
              fill="#5199fc"
              d="M31 29h4c1.105 0 2 .895 2 2v29c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2V31c0-1.105.895-2 2-2z"
            />
            <path
              fill="#afd7fb"
              d="M34 36h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm-2 1h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1z"
            />
          </g>
          <g class="book-shelf__book book-shelf__book--two" fill-rule="evenodd">
            <path
              fill="#ff9868"
              d="M39 34h6c1.105 0 2 .895 2 2v24c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2V36c0-1.105.895-2 2-2z"
            />
            <path
              fill="#d06061"
              d="M42 38c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"
            />
          </g>
          <g
            class="book-shelf__book book-shelf__book--three"
            fill-rule="evenodd"
          >
            <path
              fill="#ff5068"
              d="M49 32h2c1.105 0 2 .86 2 1.92v25.906c0 1.06-.895 1.92-2 1.92h-2c-1.105 0-2-.86-2-1.92V33.92c0-1.06.895-1.92 2-1.92z"
            />
            <path
              fill="#d93368"
              d="M50 35c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1z"
            />
          </g>
          <g fill-rule="evenodd">
            <path
              class="book-shelf__shelf"
              fill="#ae8280"
              d="M21 60h40c1.105 0 2 .895 2 2s-.895 2-2 2H21c-1.105 0-2-.895-2-2s.895-2 2-2z"
            />
            <path
              fill="#855f6d"
              d="M51.5 67c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5zm-21 0c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5z"
            />
          </g>
        </svg>
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

svg.book-shelf {
    width: 100%;
}

@keyframes book-bounce {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes shelf-lift {
  0% {
    transform: translateY(0) rotate(0);
  }
  20% {
    transform: translateY(-4px) rotate(10deg);
  }
  40% {
    transform: translateY(-4px) rotate(0);
  }
  40% {
    transform: translateY(-4px) rotate(-10deg);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

.book-shelf:hover {
  cursor: pointer;

  .book-shelf__book {
    animation: book-bounce 0.4s ease;
    animation-iteration-count: 1;
  }

  .book-shelf__book--two {
    animation-delay: 0.04s;
  }

  .book-shelf__book--three {
    animation-delay: 0.08s;
  }

  .book-shelf__shelf {
    animation: shelf-lift 0.4s ease;
    animation-iteration-count: 1;
    transform-origin: 50% 50%;
  }
}

/* Book Icon animation done */

.box {
      display: flex;
    flex-direction: column;
    justify-content: center;
  min-height: 56rem;
  // max-height: 92vh;
  background-image: linear-gradient( to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1 );
}
// box done

// Form_Holder
.Form_Holder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5%;
  padding-top: 5%;
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
  // margin-top: 3rem;
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

@media only screen and (max-width: 376px) {
  .box {
  min-height: 92vh;
  }
}
</style>
