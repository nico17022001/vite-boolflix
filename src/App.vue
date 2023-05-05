<script>
import Header from './components/Header.vue'
import Main from  './components/Main.vue'
import Footer from './components/Footer.vue'
import axios from 'axios'
import store from './components/data/store'




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
      axios.get(store.apiUrl)
      .then(result =>{
        store.arrayFilm = result.data.results
        console.log(store.arrayFilm)
      })
    }
  },

  mounted(){
    this.getapi()
  }
}
</script>

<template>
  
</template>

<style>

</style>