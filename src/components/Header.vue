
<script>
import SearchBarHeader from './partials/SearchBar-Header.vue';

export default {
  name:'Header',

  data(){
    return{

    }
  },

  components:{
    SearchBarHeader,
  }
}
</script>

<template>
  <!-- CONTENITORE NERO -->
  <div id="main-wrapper">
    <!-- CONTENITORE LOGO -->
    <div id="logo-box"><h2>BOOLFLIX</h2></div>
    <SearchBarHeader/>
  </div>
</template>

<style lang="scss" scoped>
  #main-wrapper{
    height: 90px;
    display:flex;
    align-items: center;
    background-color: black;
    color: white;
    padding: 10px;
  }#logo-box{
    color: #e80000;
    margin-right: 40px;
  }
</style>