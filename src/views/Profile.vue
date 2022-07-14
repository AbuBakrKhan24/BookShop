<template>
  <div class="display text-center">
    <div class="details mt-5">
      <img
        class="profilepicture mt-5"
        alt="profilepicture"
        :src="user.avatar"
      />
      <h4 class="user mt-3 text-light">{{ user.username }}</h4>
      <p class="email mt-2 text-light">{{ user.email }}</p>
    </div>
  </div>
  <div class="topbar">
    <div class="container d-flex">
      <h3>About</h3>
      <button
        type="button"
        class="edit mt-4 btn btn-outline-secondary"
        @click="updateUserInfo"
      >
        <i class="fa-solid fa-gear"></i>
      </button>
    </div>
  </div>

  <div class="container">
    <div class="col-4 info">
      <div class="location">
        <i class="fa-solid fa-location-dot"></i>
        <p class="mt-2 text-dark">{{ user.location }}</p>
      </div>
      <div class="about">
        <h4>Bio</h4>
        <i class="fa-solid fa-user"></i>
        <p class="mt-2 text-dark">{{ user.about }}</p>
      </div>
    </div>
    <div class="col-8 ms-3 row d-flex">
      <ReadingBookCard
        v-for="book in readingList"
        :key="book.id"
        :book="book"
      />
    </div>
  </div>
</template>
<script>
import ReadingBookCard from "../components/ReadingBookCard.vue";
export default {
  computed: {
    readingList() {
      return this.$store.state.user.readingList;
    },
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  methods: {
    deleteReadingListItem(id) {
      this.$store.dispatch("removeReadingList", id);
    },
  },
  components: { ReadingBookCard },
};
</script>
<style>
.display {
  height: 50vh;
  width: 100vw;
  background-color: rgb(56, 52, 52);
}

.profilepicture {
  width: 100px;
  height: 100px;
  border: solid 2px white;
  border-radius: 10px;
}

.topbar {
  width: 100vw;
  height: 80px;
  background-color: white;
  border-bottom: solid 2px black;
}

.container {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.col-4 {
  height: 200px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  border: solid 1px grey;
}

.col-8 {
  height: 400px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  border: solid 1px grey;
}

a {
  text-decoration: none;
  color: black;
}
</style>
