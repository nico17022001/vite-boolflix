
<script>
export default {
  name:'Cards',
  props:{
    title: String,
    originalTitle: String,
    language: String,
    rate: String,
  }
}
</script>

<template>
  <!-- CARD -->
    <div class="card">
      <div class="title">Titotlo = {{ title }} </div>
      <div class="original-title">Originale = {{ originalTitle }} </div>
      <div class="language">Lingua = {{ language }} </div>
      <div class="rate">Voto = {{ rate }}</div>
    </div>
</template>

<style lang="scss" scoped>
.card{
    background-color: aquamarine;
    width: calc(100% / 6);
    height: 500px;
  }

</style>