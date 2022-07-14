<template>
  <div class="showReadingList">
    {{ readingList }}

    <button
      @click="deleteReadingListItem(item)"
      v-for="item of readingList"
      :key="item"
    >
      Remove {{ item }}
    </button>
  </div>
  <div>
    <button @click="updateUserInfo">EDIT PROFILE</button>
  </div>
</template>
<script>
export default {
  computed: {
    readingList() {
      return this.$store.state.user.readingList;
    },
  },
  methods: {
    deleteReadingListItem(id) {
      this.$store.dispatch("removeReadingList", id);
    },
  },
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
