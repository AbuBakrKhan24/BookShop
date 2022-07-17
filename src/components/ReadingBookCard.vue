<template>
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4 bookpic">
      <img class="bookcover  col-lg-6 col-md-6 img-fluid " :src="book.cover" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ book.title }}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
 
        <div class="btn-group d-flex col-lg-12">
      <button
        @click="deleteReadingListItem(book)"
        class="btn btn-outline-secondary"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
      <router-link :to="{ name: 'SingleBook', params: { id: book.id } }"
        ><button class="btn btn-outline-secondary ms-4">
          View Details
        </button></router-link
      >
    </div>
      </div>
    </div>
  </div>
</div>
  <!-- <div class=" card d-flex  mt-5">
    <img class="bookcover  col-lg-6" :src="book.cover" />
    <div class=" col-lg-6 book-details">
      <h4 >{{ book.title }}</h4>
    </div>
    <div class="btn-group d-flex col-lg-12">
      <button
        @click="deleteReadingListItem(book)"
        class="btn btn-outline-secondary"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
      <router-link :to="{ name: 'SingleBook', params: { id: book.id } }"
        ><button class="btn btn-outline-secondary ms-4">
          View Details
        </button></router-link
      >
    </div>
  </div> -->
</template>
<script>
export default {
  props: ["book"],
  methods: {
    deleteReadingListItem(book) {
      this.$store.dispatch("removeReadingList", book);
    },
  },
};
</script>
<style scoped>
.topbar{
display: flex;
    width: 100%;
    height: 80px;
    background-color: white;
    border-bottom: solid 2px black;
    flex-direction: row-reverse;
    align-items: center;
    }

    h3 {
      position: absolute;
    left: 20px;
    }
    button.editmodal.btn.btn-outline-secondary {
    margin-right: 10px;
}

.btn-group {
  margin: 10px;
  padding: 5px;
}

.card.mb-3 {
    max-width: 540px;
    border-bottom-width: 0px;
    display: flex;
    margin-bottom: 6px;
    justify-content: center;
}
@media only screen and (max-width: 1200px) {
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 300px; */
  }
  img {
    width: 150px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
  }
  button {
    width: fit-content;
  }
}
.bookcover{
  height: 10rem;
    
    margin: 10px;
    width: fit-content;
   
 
    -object-fit: contain;
    object-fit: contain;
}
    
.bookpic {
  display: flex;
    align-items: center;
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
