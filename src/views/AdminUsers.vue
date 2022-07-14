<template>
  <div>
    <div class="user-display">
      <div class="user-display">
        <table class="table table-hover table-bordered">
          <thead id="thead">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Username</th>
              <th scope="col">Avatar</th>
              <th scope="col">ReadingList</th>
              <th scope="col">Location</th>
              <th scope="col">About</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <th scope="row">{{ user.id }}</th>

              <td>{{ user.email }}</td>
              <td>{{ user.password }}</td>
              <td>{{ user.username }}</td>
              <td><img v-bind:src="user.avatar" /></td>
              <td>{{ user.readingList }}</td>
              <td>{{ user.location }}</td>
              <td>{{ user.about }}</td>
              <td>{{ user.role }}</td>
              <td>
                <div class="edit_buttons">
                  <i class="fa-solid fa-trash bin"></i
                  ><i
                    class="fa-solid fa-pen edit"
                    onclick="editProperty(${
                    properties.id
                });"
                  ></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getUsers");
  },
  //   props: [id],
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>
<style>
nav a.router-link-exact-active {
  color: blue;
}
.table {
  background-color: lightgrey;
  overflow-y: hidden;
  width: 100%;
}
img {
  height: 100px;
}

@media screen and (max-width: 899) {
  tr {
    display: flex;
    flex-direction: column;
  }
}
</style>
