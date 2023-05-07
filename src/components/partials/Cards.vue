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
        <div class="title">Titotlo = {{ title }} </div>
        <div class="original-title">Originale = {{ originalTitle }} </div>
        <div class="rate"> Voto = {{ rate }}</div>
        <div class="language">
          Lingua:
          <img :src="`/${language}.png`" :alt="language">
        </div>

        <div class="star">
          <i class="fa-solid fa-star" style="color: #ffff00;" v-for="(star, i) in rate" :key="i"></i>
          <i class="fa-regular fa-star" v-for="(star, i) in 5 - rate" :key="i"></i>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.card{
    background-color: aquamarine;
    width: calc(100% / 6);
    height: 500px;
  }img{
    width: 40px;
  }

</style>