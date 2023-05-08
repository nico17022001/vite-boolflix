<script>
export default {
  name:'Cards',
  props:{
    title: String,
    originalTitle: String,
    language: String,
    rate: Number,
    poster_path: String,
    overview:String,
  }
}
</script>

<template>
  <!-- CARD -->
    <div class="card">
      <div class="img-card"><img :src=" `https://image.tmdb.org/t/p/w500${poster_path}`" alt=""></div>
      <div class="film-info">
        <div class="title ">{{ title }} </div>
        <div class="original-title ">{{ originalTitle }} </div>
        <div class="overview "> {{ overview }} </div>
        <div class="rate" > {{ rate }}</div>
        <div class="language">
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
    position: relative;
    color: white;
    overflow: hidden;
    padding: 4px;
    cursor: pointer;
    border-radius: 18px ;
  }.img-card{
    height: 100%;
  }img{
    width: 100%;
    height: 100%;
  }.overview{
    font-size: small;
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

  .rate{
    display: none;
  }

  .original-title{
    font-size: small;
    color: lightgray;
  }

  .card:hover {
    .film-info{
      transition: 1s;
      opacity: 100;
      top: 0px;
    }
  }
</style>