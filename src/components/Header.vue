
<script>
import SearchBarHeader from './partials/SearchBar-Header.vue';

export default {
  name:'Header',

  components:{
    SearchBarHeader,
  },

  methods:{
    searchApi(){
      this.$emit('getApi')
    },

    searchApiSerie(){
      this.$emit('getApiSerie')
    }
  }
}
</script>

<template>
  <!-- CONTENITORE NERO -->
  <div id="main-wrapper">
    <!-- CONTENITORE LOGO -->
    <div id="logo-box"><img src="../assets/img/logo-boolflix_720.png" alt=""></div>
    <SearchBarHeader @srcMovie="searchApi" @srcSerie="searchApiSerie"/>
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
    width: 200px;
    margin-right: 40px;
  }img{
    width: 100%;
  }
</style>