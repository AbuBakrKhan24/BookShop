<template>


  <div class="display text-center">
    <div class="details">
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
      <button
        type="button"
        class="editmodal btn btn-outline-secondary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="fa-solid fa-gear"></i>
      </button>
      <h3>About</h3>
    <div class="about-container ">
      <!-- Button trigger modal -->

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
                    v-model="user.location"
                  />
                  <label for="floatingInput">Location</label>
                </div>
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingABout"
                    v-model="user.about"
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

  <div class="row about_container">
    <div class="col-lg-6 col-md-4 info p-4">
      <h4 class="">Bio</h4>
      <div class="row about  align-items-center">
        
      <div class="col-lg-12 details">
        <div class="card">
  <div class="card-header">
    Your About
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{{ user.about }}</p>
      <footer class="blockquote-footer">From <cite title="Source Title">{{ user.username }}</cite></footer>
    </blockquote>
  </div>
</div>
     
        </div>
      </div>
      <div class="location  align-items-center">
        <div class="card mt-3">
  <div class="card-header">
    Your Location: {{ user.location }}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i76
        8!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sza!4v1658088112460!5m2!1sen!2sza" 
        width="200" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
    </blockquote>
  </div>
</div>
      </div>
        
      
        
      
    </div>
    <!-- READINGLIST -->
    <div class="col-lg-6 col-md-4 row">
      <div class="container row">
        <h4 class="head">YOUR READING LIST</h4>
        
        <ReadingBookCard
          v-for="book in readingList"
          :key="book.id"
          :book="book"
        />
      </div>
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
<style scoped>

.row.about_container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
} 
.card {
    width: 100%;
}
.card {
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);

  /* width: max-content; */
}
.display {
  height: 50vh;
  /* width: 100vw; */
  background-color: rgb(56, 52, 52);
}
button.editmodal.mt-4.btn.btn-outline-secondary {
    margin-right: 15px;
}

h4.user.mt-3.text-light {
    MARGIN-BOTTOM: 0;
}

.bookcover{
  height: 10rem;
    
    margin: 10px;
    width: fit-content;
   
 
    -object-fit: contain;
    object-fit: contain;
    display: flex;
    align-items: center;
   
}


.profilepicture {
  width: 100px;
  height: 100px;
  border: solid 2px white;
  border-radius: 10px;
}
.topbar {
    /* width: 100vw; */
    display: flex;
    height: 80px;
    background-color: white;
    border-bottom: solid 2px black;
    flex-direction: row-reverse;
    align-items: center;
}
h3 {
    position: absolute;
    left: 4%;
}

button.editmodal.btn.btn-outline-secondary {
    margin-right: 10px;
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    /* margin-right: calc(-.5 * var(--bs-gutter-x)); */
    margin-left: calc(-.5 * var(--bs-gutter-x));
}

.row.about_container {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    /* margin-top: calc(-1 * var(--bs-gutter-y)); */
    /* margin-right: calc(-.5 * var(--bs-gutter-x)); */
    margin: 0;
    /* margin-left: calc(-.5 * var(--bs-gutter-x)); */
}
.row.about_container {
    padding-top: 2%;
    margin-top: -2px;
}

h4.head {
    margin-bottom: 5%;
}
h4 {
    margin-bottom: 10%;
}



.container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 8%;
}
.about-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 50px; */
  padding-left: 5%;
}
.info {
  height: auto;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  border: solid 1px grey;
  background-color: white;
  width: 30%;
  margin-top: 5%;
  margin-left: 10%;
  margin-bottom: 5%;

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
  .col-4 {
    height: fit-content;
    width: fit-content;
    margin-bottom: 20px;
  }
}

.col-8 {
  height: fit-content;
  width: fit-content;
  margin-bottom: 20px;
}

i.col-lg-6.fa-solid.fa-location-dot.pb-2 {
    font-size: 30px;
}
i.col-lg-6.fa-solid.fa-user.pb-2 {
    font-size: 30px;
}

p.col-lg-6.mt-2.text-dark {
    font-weight: 600;
}

h4 {
    font-weight: 600;
    font-size: 30px;
}
</style>
