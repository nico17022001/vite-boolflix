<script>
export default {
  name:'Cards',
  props:{
    title: String,
    originalTitle: String,
    language: String,
    rate: Number,
    poster_path: String,
  }
}
</script>

<template>
  <!-- CARD -->
    <div class="card">
      <div class="img-card"><img :src=" `https://image.tmdb.org/t/p/w500${poster_path}`" alt=""></div>
      <div class="film-info">
        <div class="title m-y-10">Titotlo = {{ title }} </div>
        <div class="original-title m-y-10">Originale = {{ originalTitle }} </div>
        <div class="rate" > {{ rate }}</div>
        <div class="language m-y-10">
          <img :src="`/${language}.png`" :alt="language">
        </div>

        <div class="star m-y-10">
          <i class="fa-solid fa-star" style="color: #ffff00;" v-for="(star, i) in rate" :key="i"></i>
          <i class="fa-regular fa-star" v-for="(star, i) in 5 - rate" :key="i"></i>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.card{
    width: calc(100% / 6);
    height: 371.6px;
    position: relative;
    color: white;
    overflow: hidden;
    padding: 2px;
    cursor: pointer;
  }.img-card{
    height: 100%;
  }img{
    width: 100%;
    height: 100%;
  }

  .film-info{
    position: absolute;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.366);
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: 100%;
    opacity: 0;
  }.language img{
    width: 30px;
  }

  .m-y-10{
    margin: 10px 0px;
  }

  .rate{
    display: none;
  }

  .card:hover {
    .film-info{
      transition: 1s;
      opacity: 100;
      top: 0px;
    }
  }
</style>