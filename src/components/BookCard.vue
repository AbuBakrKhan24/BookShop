<template>
  
  <div class="col-lg-4 col-md-6 col-sm-12 book_holder">
    <main>
      <router-link :to="{ name: 'SingleBook', params: { id: book.id } }" 
        >
      <div class="book-card">
        <div class="book-card__cover">
          <div class="book-card__book">
            <div class="book-card__book-front">
                <img class="book-card__img" :src="book.cover" />
            </div>
            <div class="book-card__book-back"></div>
            <div class="book-card__book-side"></div>
          </div>
        </div>
        <div>
          <!-- <div class="book-card__title" style="height: 20px"> -->
          <div class="book-card__title">
            {{ book.title }}
          </div>
          <div class="book-card__author">{{ book.tags }}</div>
          
        </div>
      </div>
      </router-link
      >
    </main>
  </div>
</template>
<script>
export default {
  props: ["book"],
};
</script>
<style lang="scss" scoped>
@media (min-width: 992px) {
  .col-lg-4[data-v-de6b8d6e] {
    flex: 0 0 auto;
    width: 33.3333%;
  }
}
.book_holder {
  margin-bottom: 5%;
  margin-top: 5%;
}
.book-card__title {
  height: auto;
}
/////////////////////
// Base
/////////////////////
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
}
body {
  display: flex;
  color: #313131;
  font-family: "Times New Roman", serif;
  background-color: #673ab7;
  background: linear-gradient(
    45deg,
    rgba(103, 58, 183, 1) 0%,
    rgba(138, 34, 170, 1) 100%
  );
}
/////////////////////
// Page structure
/////////////////////
aside {
  flex-basis: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  line-height: 1.5;
  .title,
  .subtitle,
  .description {
    font-family: Georgia, Serif;
    font-style: italic;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }
  .title {
    font-weight: bold;
    font-size: 2em;
  }
  .subtitle {
    font-size: 1.5em;
  }
  .description {
    margin-top: 24px;
    font-size: 1.2em;
  }
}
main {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
//////////////////////////
// Component: Book Card
//////////////////////////
.book-card {
  width: 280px;
  height: 500px;
  padding: 16px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  .book-card__cover {
    position: relative;
    width: 200px;
    height: 300px;
    margin: 0 auto 8px auto;
    perspective: 1000px;
  }
  .book-card__book {
    height: 100%;
    transform-style: preserve-3d;
    transition: all 250ms ease;
  }
  .book-card__book-front {
    position: absolute;
    height: 100%;
  }
  .book-card__book-back {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    transform: translateZ(-40px);
  }
  .book-card__book-side {
    position: absolute;
    top: 5px;
    bottom: 2px;
    right: -29px;
    width: 40px;
    background-size: 5px;
    background-color: #e1e1e1;
    background-image: linear-gradient(to right, #ccc 35%, #e1e1e1 35%);
    opacity: 0;
    transform: rotate3d(0, 1, 0, 90deg);
  }
  .book-card__img {
    width: 100%;
    height: 100%;
    background-color: #e1e1e1;
  }
  .book-card__title {
    font-size: 1.5em;
    margin-bottom: 8px;
  }
  .book-card__author {
    color: #757575;
    font-size: 1em;
  }
  // STATES
  &:hover {
    .book-card__book {
      transform: rotate3d(0, -1, 0, 30deg) translate(-15px, -30px);
    }
    .book-card__book-back {
      box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.35);
    }
    .book-card__book-side {
      opacity: 1;
    }
  }
  
}
</style>