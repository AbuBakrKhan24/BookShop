<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="container">
      <div class="row">
        <div class="col-lg-6 details">
          <header>
          <h1>Hello there, we are BOOKDOM.</h1>
          <h4>The world's most-loved social storytelling platform</h4>
          <p class="text-muted mt-2">
            BOOKDOM connects a global community of 90 million readers and
            writers through the power of story.
          </p>
          </header>
          <buttons> 
          <div
            class="buttons d-flex justify-content-center mt-5 mb-5"
            v-if="user"
          >
            <router-link to="/library"
              ><button
                type="button"
                class="read btn btn-lg ms-5 text-light rounded-pill"
              >
                Start Reading
              </button></router-link
            >
            <router-link to="/library">
              <button
                type="button"
                class="write btn btn-lg ms-5 text-light rounded-pill"
              >
                Start Writing
              </button>
            </router-link>
          </div>
          <div class="buttons d-flex justify-content-center mt-5 mb-5" v-else>
            <router-link to="/login"
              ><button
                type="button"
                class="read btn btn-lg  text-light rounded-pill"
              >
                Start Reading
              </button></router-link
            >
            <router-link to="/login">
              <button
                type="button"
                class="write btn btn-lg  text-light rounded-pill"
              >
                Start Writing
              </button>
            </router-link>
          </div>
          </buttons>
        </div>
        <div class="col-lg-6">
          <img
            alt="Bookdom logo"
            src="https://github.com/AbuBakrKhan24/BookShop/blob/Sindile/src/assets/bookdom-removebg-preview.png?raw=true"
            class="img-fluid"
          />
        </div>
   
   
      </div>
     
  </div>


        <div id="footer">
      <div class="container d-flex justify-content-between">
        <p class="footer-text mt-5">© 2022 BOOKDOM</p>
        <ul class="icons mt-4 d-flex">
          <li class="ms-5 text-light">
            <i class="fa-brands fa-facebook-square FaceBook"></i>
          </li>
          <li class="ms-5 text-light">
            <i class="fa-brands fa-instagram Instagram"></i>
          </li>
          <li class="ms-5 text-light"><i class="fa-brands fa-twitter Twitter"></i></li>
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
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Links */
.FaceBook:hover{
  /* color: #4867aa;
  background-color: white; */
  color: #3b5998;
  background-image: linear-gradient( to bottom, transparent 20%, white 20%, white 93%, transparent 93% );
  background-size: 55%;
  background-position: 70% 0;
  background-repeat: no-repeat;
  
}

.Instagram:hover{
background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  -webkit-background-clip: text;
          
          background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: white;
}

.Twitter:hover{
  color: #1da1f2;
}
/* Links done */

a 
{width: 35%;}

.details {
  display: flex;
    flex-direction: column;
    justify-content: center;
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

.hello[data-v-98feeed2] {
    padding-top: 155px;
    /* padding-bottom: 8%; */
    /* height: 100%; */
    /* height: 92vh; */
    background-image: linear-gradient( to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1 );
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
  font-size: 25px;
  align-items: center;
}

p {
    margin-top: 0;
    margin-bottom: 2rem;
}

#footer[data-v-98feeed2][data-v-98feeed2] {
    /* height: 100px; */
    width: 100%;
    /* background-color: grey; */
    background-color: rgba(0, 0, 0, 0.367);
    /* position: relative; */
    /* bottom: 0; */
    margin-top: 8%;
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
</style>
