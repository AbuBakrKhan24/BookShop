<template>
  <nav class="navbar navbar-expand-lg bg-light" id="nav">
    <div class="container-fluid ms-5">
      <router-link to="/" class="navbar-brand nav-link active text-dark">
        BOOKDOM
      </router-link>

      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Home button -->

          <!-- <li class="nav-item ms-5">
            <router-link
              class="nav-link active text-dark"
              aria-current="page"
              to="/"
            >
              Home
            </router-link>
          </li> -->
          <!-- Home button done -->
          <div v-if="user" class="d-flex">
            <li class="nav-item ms-5">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/library"
                >Library</router-link
              >
            </li>
            <!-- Profile Page -->

            <li>
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/profile"
              >
                Profile Page
              </router-link>
            </li>
          </div>
          <div v-else class="d-flex">
            <li class="nav-item ms-2">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/login"
              >
                Log in
              </router-link>
            </li>

            <li class="nav-item ms-3">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/signup"
              >
                Sign Up
              </router-link>
            </li>
            <!-- <img
              width="40"
              height="35"
              :src="user.avatar"
              :alt="user.name"
              class="d-inline-block align-text-top"
            /> -->
          </div>
          <!-- Profile Page Done-->
        </ul>
        <li>
          <!-- Book Icon -->

          <button
            class="book_create"
            title="Click here to create your book"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <svg
              type="button"
              class="book-shelf"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 84 94"
              height="55"
              width="50"
            >
              <path
                fill="none"
                d="M37.612 92.805L4.487 73.71c-2.75-1.587-4.45-4.52-4.45-7.687L.008 27.877c-.003-3.154 1.676-6.063 4.405-7.634L37.558 1.167c2.73-1.57 6.096-1.566 8.835.013l33.124 19.096c2.75 1.586 4.45 4.518 4.45 7.686l.028 38.146c.002 3.154-1.677 6.063-4.406 7.634L46.445 92.818c-2.73 1.57-6.096 1.566-8.834-.013z"
              />
              <g
                class="book-shelf__book book-shelf__book--one"
                fill-rule="evenodd"
              >
                <path
                  fill="#5199fc"
                  d="M31 29h4c1.105 0 2 .895 2 2v29c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2V31c0-1.105.895-2 2-2z"
                />
                <path
                  fill="#afd7fb"
                  d="M34 36h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm-2 1h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1z"
                />
              </g>
              <g
                class="book-shelf__book book-shelf__book--two"
                fill-rule="evenodd"
              >
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
          </button>

          <!-- Book Icon done -->
        </li>

        <!-- Login Button -->
        <!-- User's Avatar -->
        <!-- <img
          width="40"
          height="35"
          :src="user.avatar"
          :alt="user.name"
          class="d-inline-block align-text-top"
        /> -->

        <!-- Login Button done-->
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
};
</script>
<style lang="scss" scoped>
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

.logo-image {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -6px;
}
li {
  list-style-type: none;
}

nav.navbar {
  font-family: "Times New Roman", Times, serif;
}

.book_create {
  border: none;
  background-color: #f8f9fa;
}
</style>
