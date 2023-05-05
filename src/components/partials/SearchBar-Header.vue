
<script>
export default {
  name: 'SearchBar-Header'
  
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
      <input type="text" placeholder="Cerca un titolo">
    </div>

    <!-- BOTTONE CERCA -->
    <div id="search-container">
      <button>CERCA</button>
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
  }
  #search-container{
    margin: 0px 10px;
  }button{
    padding: 0px 5px;
  }
  
</style>