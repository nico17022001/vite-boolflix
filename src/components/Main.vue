
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
    <div class="section" v-if="store.arrayFilm.length == 0">
      <!-- TITOLO SEZIONE -->
        <div class="section-title">
          <h3>POPOLARI</h3>
        </div>
        <div id="cards-container">
          <!-- CICLO I FILM -->
          <Cards v-for="popolare in store.arrayPopular" 
            :key="popolare.id"
            :title="popolare.title"
            :originalTitle="popolare.original_title"
            :language="popolare.original_language"
            :poster_path="popolare.poster_path"
            :overview="popolare.overview"
            :rate="Math.ceil(popolare.vote_average / 2)"
          />
        </div>
      </div>

      <div v-else>
        <!-- CONTENITORE DEI TITOLI -->
        <div class="section">
          <!-- TITOLO SEZIONE -->
          <div class="section-title">
            <h3>FILM</h3>
          </div>
          
          <div id="cards-container" >
            <!-- CICLO I FILM -->
            <Cards v-for="film in store.arrayFilm" 
              :key="film.id"
              :title="film.title"
              :originalTitle="film.original_title"
              :language="film.original_language"
              :poster_path="film.poster_path"
              :overview="film.overview"
              :rate="Math.ceil(film.vote_average / 2)"
            />
          </div>
        </div>

        <div class="secion" > 
        <!-- TITOLO SEZIONE -->
          <div class="section-title">
            <h3>SERIE</h3>
          </div>
          <!-- CICLO LE SERIE -->
          <div id="cards-container">
            <Cards v-for="serie in store.arraySerie" 
              :key="serie.id"
              :title="serie.name"
              :originalTitle="serie.original_name"
              :language="serie.original_language"
              :poster_path="serie.poster_path"
              :overview="serie.overview"
              :rate="Math.ceil(serie.vote_average / 2)"
            />
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
  #main-wrapper{
    background-color: #141414;
    height: 100%;
    padding: 30px 20px;
  }#cards-container{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .section{
    margin: 10px 0px;
  }
  .section-title{
    color: white;
    font-size: large;
    margin: 10px 5px;
  }
</style>