
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
  },

  methods:{
    searchApi(){
      this.$emit('getApi')
    }
  }
}
</script>

<template>
  <!-- CONTENITORE NERO -->
  <div id="main-wrapper">
    <!-- CONTENITORE LOGO -->
    <div id="logo-box"><img src="../assets/img/logo-boolflix_720.png" alt=""></div>
    <SearchBarHeader @srcMovie="searchApi"/>
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