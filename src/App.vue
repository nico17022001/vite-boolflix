<script>
import Header from './components/Header.vue'
import Main from  './components/Main.vue'
import Footer from './components/Footer.vue'
import axios from 'axios'
import {store} from './components/data/store'




export default {
  data(){
    return{
      store
    }
  },

  components:{
    Header,
    Main,
    Footer,
  },

  methods:{
    getapi(){
      axios.get(store.apiUrl,{
        params:{
          query: store.titolo
        }
      })
      .then(result =>{
        store.arrayFilm = result.data.results
      })
    },

    getapiSerie(){
      axios.get(store.apiUrlSerie,{
        params:{
          query: store.titolo
        }
      })
      .then(result =>{
        store.arraySerie = result.data.results
      })
    },

    getPopular(){
      axios.get(store.apiPopular)
      .then(result =>{
        store.arrayPopular = result.data.results
      })
    },
  },

  mounted(){
    this.getapi()
    this.getPopular()
  }
}
</script>

<template>
  <Header @getApi="getapi" @getApiSerie="getapiSerie"/>
  <Main/>
</template>

<style lang="scss">
  @use './components/scss/general.scss'
</style>