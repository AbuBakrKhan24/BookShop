<template>
  <div>
    <!-- FILTERS -->
    <div>
      <button class="sort-btn mb-4" @click="sortUsers">Sort By Username</button>
    </div>
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
              <th scope="col">Edit</th>
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
                <div class="container">
                  <div class="row align-items-start">
                    <div class="col">
                      <button class="btn" @click="deleteBook(book.id)">
                        <i class="fa-solid fa-trash bin"></i>
                      </button>
                    </div>
                    <div class="col">
                      <button
                        type="button"
                        class="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#editmodal"
                      >
                        <i class="fa-solid fa-pen edit"></i>
                      </button>
                      <!-- Modal 2-->
                      <div class="modal fade" id="editmodal" tabindex="-1">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="editmodalLabel">
                                Edit users
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form @submit.prevent="updateBook(book.id)">
                                <div class="title form-floating">
                                  <input
                                    type="text"
                                    class="form-control mb-2"
                                    id="floatingPassword"
                                    placeholder="Title"
                                    v-model="user.email"
                                  />
                                  <label for="floatingTitle">Email</label>
                                </div>

                                <div class="description form-floating">
                                  <input
                                    type="text"
                                    class="form-control mb-2"
                                    id="floatingDescription"
                                    placeholder="Description"
                                    v-model="user.password"
                                  />
                                  <label for="floatingDescription"
                                    >Password</label
                                  >
                                </div>

                                <div class="description form-floating">
                                  <input
                                    type="text"
                                    class="form-control mb-2"
                                    id="floatingDescription"
                                    placeholder="Description"
                                    v-model="user.username"
                                  />
                                  <label for="floatingDescription"
                                    >Username</label
                                  >
                                </div>

                                <div class="year form-floating">
                                  <input
                                    type="text"
                                    class="form-control mb-2"
                                    id="floatingYear"
                                    placeholder="Year"
                                    v-model="user.avatar"
                                  />
                                  <label for="floatingYear">Avatar</label>
                                </div>

                                <div class="pages form-floating">
                                  <input
                                    type="text"
                                    class="form-control mb-2"
                                    id="floatingPages"
                                    placeholder="Pages"
                                    v-model="user.location"
                                  />
                                  <label for="floatingPages">Location</label>
                                </div>

                                <div class="file form-floating mb-3">
                                  <input
                                    type="text"
                                    class="form-control mb-2"
                                    id="floatingFile"
                                    placeholder="file url"
                                    v-model="user.about"
                                  />
                                  <label for="floatingInput">About</label>
                                </div>

                                <div class="file form-floating mb-3">
                                  <input
                                    type="text"
                                    class="form-control mb-2"
                                    id="floatingFile"
                                    placeholder="file url"
                                    v-model="user.role"
                                  />
                                  <label for="floatingInput">Role</label>
                                </div>
                                <button type="submit">Save</button>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
  methods:{
    sortUsers() {
      this.$store.commit("sortUsersByUsername");
    },
  }
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
.sort-btn {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  -webkit-box-shadow: 3px 3px 7px #6b686b;
  -moz-box-shadow: 3px 3px 7px #6b686b;
  box-shadow: 3px 3px 7px #6b686b;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #d99c34;
  padding: 10px 20px 10px 20px;
  border: solid #ff2ee7 0px;
  text-decoration: none;
}
.sort-btn:hover {
  background: #fcb63c;
  background-image: -webkit-linear-gradient(top, #fcb63c, #d932d9);
  background-image: -moz-linear-gradient(top, #fcb63c, #d932d9);
  background-image: -ms-linear-gradient(top, #fcb63c, #d932d9);
  background-image: -o-linear-gradient(top, #fcb63c, #d932d9);
  background-image: linear-gradient(to bottom, #fcb63c, #d932d9);
  text-decoration: none;
}
@media screen and (max-width: 899) {
  tr {
    display: flex;
    flex-direction: column;
  }
}
</style>