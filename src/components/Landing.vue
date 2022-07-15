<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <h1>Hello there, we are BOOKDOM.</h1>
          <h4>The world's most-loved social storytelling platform</h4>
          <p class="text-muted mt-2">
            BOOKDOM connects a global community of 90 million readers and
            writers through the power of story.
          </p>

          <div class="buttons d-flex justify-content-center mt-5 mb-5">
            <button
              type="button"
              class="read btn btn-lg ms-5 text-light rounded-pill"
            >
              Start Reading
            </button>
            <button
              type="button"
              class="write btn btn-lg ms-5 text-light rounded-pill"
            >
              Start Writing
            </button>
          </div>
        </div>
        <div class="col">
          <img
            alt="Vue logo"
            src="https://github.com/AbuBakrKhan24/BookShop/blob/Sindile/src/assets/bookdom-removebg-preview.png?raw=true"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
    <div id="footer" class="">
      <div class="container d-flex justify-content-between">
        <p class="footer-text mt-5">© 2022 BOOKDOM</p>
        <ul class="icons mt-5 d-flex">
          <li class="ms-5 text-light"><i class="fa-brands fa-facebook"></i></li>
          <li class="ms-5 text-light">
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li class="ms-5 text-light"><i class="fa-brands fa-twitter"></i></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-bottom: 5%;
}

.col h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 600;
  font-size: 60px;
  color: white;
}

.col h4 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-top: 30px;
}

.hello {
  /* padding-top: 10px; */
  margin-top: 5%;
}

img {
  height: 50vh;
}

button.read {
  background-color: rgba(255, 152, 104);
}

button.read:hover {
  background-color: rgba(81, 153, 252);
}

button.write {
  background-color: rgba(255, 80, 104);
}

button.write:hover {
  background-color: rgba(81, 153, 252);
}

#footer {
  height: 100px;
  /* background-color: grey; */
  background-color: rgba(0, 0, 0, 0.367);
  position: relative;
}

@media only screen and (max-width: 992px) {
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-left: -20px;
  }

  .col {
    margin-top: 40px;
  }

  .read {
    margin-bottom: 10px;
    width: 200px;
  }

  .write {
    width: 200px;
  }

  .row {
    display: flex;
    flex-direction: column;
  }

  .img-fluid {
    margin-bottom: 20px;
    height: 20vh;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
