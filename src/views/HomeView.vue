<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- Button trigger modal -->
    <!-- <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button> -->

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
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="profile_pic">
              <select v-model="avatar">
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
              </select>
            </div>
            <p>img: {{ avatar }}</p>
            <img v-if="avatar" :src="avatar" alt="" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      avatar: "",
    };
  },
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
