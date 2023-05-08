<script>
import {store} from '../data/store'

export default {
  name: 'SearchBar-Header',

  data(){
    return{
      store
    }
  }
  
}
</script>

<template>
  <!-- LISTA MENU -->
  <div id="menu-container">
    <ul>
      <li>Home</li>
      <li>Serie TV</li>
      <li>Film</li>
      <li>Nuovi e Popolari</li>
      <li>La mia lista</li>
      <li>Sfoglia per lingua</li>
    </ul>
  </div>

  <div id="nav-container">
    <!-- SERACH BAR -->
    <div id="search-bar-container">
      <input type="text" placeholder="Cerca un titolo" v-model="store.titolo" @keyup.enter="$emit('srcMovie'), $emit('srcSerie')">
    </div>

    <!-- BOTTONE CERCA -->
    <div id="search-container">
      <div id="lente" @click="$emit('srcMovie'), $emit('srcSerie')">
        <i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #menu-container{
    display: flex;
    align-items: center;
  }ul{
    display: flex;
    align-items: center;
  }li{
    color: white;
    list-style: none;
    margin: 0px 10px;
    cursor: pointer;  
    display: block ruby;
  }

  li:hover{
    color: rgba(255, 255, 255, 0.825);
  }

  #nav-container{
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }#search-bar-container{
    padding: 4px;
  }#search-container{
    margin: 0px 10px;
    display: flex;
    align-items: center;
  }#lente{
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  


</style>