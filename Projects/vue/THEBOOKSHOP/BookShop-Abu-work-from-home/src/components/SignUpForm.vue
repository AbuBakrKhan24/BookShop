<template>
<div class="box">
  <div class="Form_Holder">
    <div class="card" style="width: fit-content">
      <div class="card-body">
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
        <h1>Sign Up Form</h1>
        <p>Please fill out this form with the required information</p>
        <form @submit.prevent="register">
          <!-- Form details -->
          <fieldset>
            <label
              >Add Username
              <input v-model="username" type="text" name="user-name" required
            /></label>

            <label
              >Enter Your Email:
              <input v-model="email" type="email" name="email" required
            /></label>
            <label
              >Create a New Password:
              <input
                v-model="password"
                type="password"
                name="password"
                pattern="[a-z0-5]{8,}"
                required
            /></label>
          </fieldset>
          <!-- Avatar -->
          <fieldset>
            <img
              v-if="avatar"
              :src="avatar"
              class="rounded-circle shadow-4"
              style="width: 150px"
              alt="Avatar"
            />
            <label
              >Choose your avatar:
              <select v-model="avatar" multiple>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/1.png?raw=true"
                >
                  1
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/2.png?raw=true"
                >
                  2
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/3.png?raw=true"
                >
                  3
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/4.png?raw=true"
                >
                  4
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/5.png?raw=true"
                >
                  5
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/6.png?raw=true"
                >
                  6
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/7.png?raw=true"
                >
                  7
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/8.png?raw=true"
                >
                  8
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/9.png?raw=true"
                >
                  9
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/10.png?raw=true"
                >
                  10
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/11.png?raw=true"
                >
                  11
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/12.png?raw=true"
                >
                  12
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/13.png?raw=true"
                >
                  13
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/14.png?raw=true"
                >
                  14
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/15.png?raw=true"
                >
                  15
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/16.png?raw=true"
                >
                  16
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/17.png?raw=true"
                >
                  17
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/18.png?raw=true"
                >
                  18
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/19.png?raw=true"
                >
                  19
                </option>
                <option
                  value="https://github.com/AbuBakrKhan24/BookShop/blob/ABU/src/assets/20.png?raw=true"
                >
                  20
                </option>
              </select>
            </label>

            <label
              >Provide a bio:
              <textarea
                name="bio"
                rows="3"
                cols="30"
                placeholder="I like writing on the beach..."
              ></textarea>
            </label>
            <label>
              <input type="checkbox" name="terms" class="inline" required /> I
              accept the
              <a href="https://www.freecodecamp.org/news/terms-of-service/"
                >terms and conditions</a
              >
            </label>
          </fieldset>
          <input type="submit" value="Sign Up" />
        </form>
        <div v-if="user">
          Welcome {{ user.username }} Your Sign Up was an success!
        </div>
      </div>
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
      username: "",
      email: "",
      password: "",
      avatar: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        username: this.username,
        email: this.email,
        password: this.password,
        avatar: this.avatar,
      });
    },
  },

  // name: "SignUpForm",
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box{
  background-image: linear-gradient(to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
}
// Form_Holder
.Form_Holder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5%;
  padding-top: 5%;
}
// Form_Holder done

/* Book Icon animation */

body {
  background-color: #f5f5f1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

h1,
p {
  margin: 1em auto;
  text-align: center;
}

form {
  width: 60vw;
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  padding-bottom: 2em;
}

fieldset {
  border: none;
  padding: 2rem 0;
}

fieldset:not(:last-of-type) {
  border-bottom: 3px solid #3b3b4f;
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
  min-width: 300px;
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
</style>
