<template>
    <!-- <h1>This is profile page</h1> -->
    <div class="display text-center">
        <div class="details mt-5">
            <img class="profilepicture mt-5" alt="Vue logo" src="https://github.com/AbuBakrKhan24/BookShop/blob/Sindile/src/assets/books-2022463_1280.png?raw=true">
            <h4 class="user mt-3 text-light">Sindile Kula</h4>
            <p class="email mt-2 text-light">Kulasindile@gmail.com</p>
        </div>
    </div>
   
    <div class="topbar">
        <div class="container d-flex">
            <a href="" class="mt-4">About</a>
            <button type="button" class="edit mt-4 btn btn-outline-secondary"><i class="fa-solid fa-gear"></i> Edit Profile</button>
        </div>
    </div>

    <div class="container">
       <div class="col-4 "></div>
       <div class="col-8 ms-3"></div>
    </div>

</template>
<script>

// import Navbar from "./components/Navbar.vue";
// import Profilepage from "./components/Profilepage.vue";


export default {
//     name: "Profile",
//   components: {
//     Profilepage,
//   },
}
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