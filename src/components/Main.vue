
<script>
import Cards from './partials/Cards.vue'
import {store} from './data/store'
export default {
  name:'Main',

  data(){
    return{
      store
    }
  },

  components:{
    Cards,
  }
}
</script>

<template>
  <!-- SFONDO MAIN -->
  <div id="main-wrapper">
      <!-- TITOLO SEZIONE -->
        <div class="section-title">
        <h3>ORIGINALI NETFLIX</h3>
      </div>
      <!-- CONTENITORE DEI TITOLI -->
    <div id="cards-container">
      <!-- CICLO I FILM -->
      <Cards v-for="film in store.arrayFilm" 
        :key="film.id"
        :title="film.title"
        :originalTitle="film.original_title"
        :language="film.original_language"
        :poster_path="film.poster_path"
        :rate="Math.ceil(film.vote_average / 2)"
      />
    </div>

    <!-- CICLO LE SERIE -->
    <div id="cards-container">
      <Cards v-for="serie in store.arraySerie" 
        :key="serie.id"
        :title="serie.name"
        :originalTitle="serie.original_name"
        :language="serie.original_language"
        :poster_path="serie.poster_path"
        :rate="Math.ceil(serie.vote_average / 2)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #main-wrapper{
    background-color: #141414;
    height: 100%;
    padding: 30px 20px;
  }#cards-container{
    background-color: rgba(255, 255, 255, 0.405);
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .section-title{
    color: white;
    font-size: large;
  }
</style>