<template>
  <!-- <div class="admin">
      <h1>Books Admin table</h1> -->

  <!-- <table class="table table-hover table-bordered">
        <thead class="table-light"> -->

  <!-- <tr>
            <th scope="col">ID</th>
            <th scope="col">Genre</th>
            <th scope="col">Cover</th>
            <th scope="col">Title</th>
            <th scope="col">Pages</th>
            <th scope="col">Tags</th>
            <th scope="col">Audience</th>
            <th scope="col">Description</th>
            <th scope="col">Year</th>
            <th scope="col">Created By</th>
          </tr> -->
  <!-- <tr>
            <td>{{ books.id }}</td>
            <td>{{ books.genre }}</td>
            <td>{{ books.cover }}</td>
            <td>{{ books.title }}</td>
            <td>{{ books.pages }}</td>
            <td>{{ books.tags }}</td>
            <td>{{ books.audience }}</td>
            <td>{{ books.description }}</td>
            <td>{{ books.year }}</td>
            <td>{{ books.createdBy }}</td>
          </tr>
        </thead>
        <tbody> -->
  <!-- <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div> -->

  <!-- <div class="admin">
      <h1>User Admin Table</h1>
      <table class="table table-hover table-bordered">
        <thead class="table-dark">
          
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Username</th>
            <th scope="col">Avatar</th>
            <th scope="col">Reading List</th>
            <th scope="col">Works</th>
            <th scope="col">Location</th>
            <th scope="col">About</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody> -->
  <!-- <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>-->
  <div class="container">
    <div class="admin-details">
      <div class="card">
        <tr>
          <td>{{ books.id }}</td>
          <td>{{ books.genre }}</td>
          <td>{{ books.cover }}</td>
          <td>{{ books.title }}</td>
          <td>{{ books.pages }}</td>
          <td>{{ books.tags }}</td>
          <td>{{ books.audience }}</td>
          <td>{{ books.description }}</td>
          <td>{{ books.year }}</td>
          <td>{{ books.createdBy }}</td>
        </tr>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book"],
};
</script>
<style>
#adminstable {
  background-color: lightgrey;
}
</style>
