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
                                    class="form-control"
                                    id="floatingPassword"
                                    placeholder="Title"
                                    v-model="user.email"
                                  />
                                  <label for="floatingTitle">email</label>
                                </div>

                                <div class="description form-floating">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="floatingDescription"
                                    placeholder="Description"
                                    v-model="user.password"
                                  />
                                  <label for="floatingDescription"
                                    >password</label
                                  >
                                </div>

                                <div class="description form-floating">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="floatingDescription"
                                    placeholder="Description"
                                    v-model="user.username"
                                  />
                                  <label for="floatingDescription"
                                    >username</label
                                  >
                                </div>

                                <div class="year form-floating">
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="floatingYear"
                                    placeholder="Year"
                                    v-model="user.avatar"
                                  />
                                  <label for="floatingYear">avatar</label>
                                </div>

                                <div class="pages form-floating">
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="floatingPages"
                                    placeholder="Pages"
                                    v-model="user.location"
                                  />
                                  <label for="floatingPages">location</label>
                                </div>

                                <div class="file form-floating mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="floatingFile"
                                    placeholder="file url"
                                    v-model="user.about"
                                  />
                                  <label for="floatingInput">about</label>
                                </div>

                                <div class="file form-floating mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="floatingFile"
                                    placeholder="file url"
                                    v-model="user.role"
                                  />
                                  <label for="floatingInput">role</label>
                                </div>

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
