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
    <div class="about-container m-5">
      <h3>About</h3>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="editmodal mt-4 btn btn-outline-secondary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="fa-solid fa-gear"></i>
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit your bio</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="updateUserInfo">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingLocation"
                    v-model="location"
                  />
                  <label for="floatingInput">Location</label>
                </div>
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingABout"
                    v-model="about"
                  />
                  <label for="floatingPassword">Describe Yourself</label>
                </div>
                <button
                  type="submit"
                  class="update mt-4 btn btn-outline-secondary"
                >
                  Save
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="col-4 info p-4">
      <h4>Bio</h4>
      <div class="location d-flex justify-content-around align-items-center">
        <i class="fa-solid fa-location-dot pb-2"></i>
        <p class="mt-2 text-dark">{{ user.location }}</p>
      </div>
      <div class="about d-flex justify-content-around align-items-center">
        <i class="fa-solid fa-user pb-2"></i>
        <p class="mt-2 text-dark">{{ user.about }}</p>
      </div>
    </div>
    <!-- READINGLIST -->
    <div class="col-8 ms-3 row d-flex p-3 mt-2">
      <div><h4 class="">YOUR READING LIST</h4></div>
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
    updateUserInfo() {
      this.$store.dispatch("updateUserInfo", this.user);
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
.about-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
}

.col-4 {
  height: 200px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  border: solid 1px grey;
  background-color: white;
}

.col-8 {
  min-height: 285px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  border: solid 1px grey;
  background-color: white;
}

a {
  text-decoration: none;
  color: black;
}
/* MQ */
@media only screen and (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
