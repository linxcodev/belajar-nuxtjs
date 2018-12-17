<template>
  <!-- <section class="hero is-primary is-medium"> -->
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/city">City</nuxt-link>
    </nav>
    <!-- <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Menggunakan Api
        </h1>
        <h2 class="subtitle">
          Dari nuxtjs
        </h2>
        <br><br>
        <div class="panel">
          <div class="panel-heading">
            Data Provinsi Di Indonesia
          </div>
          <div class="panel-block" v-for="data in datas">
            {{ data.province }}
          </div>
        </div>
      </div>
    </div> -->
    <!-- Test -->
  <!-- </section> -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'datas'
  ])
}
</script>
<style scoped>
  li.is-active {
    background-color: blue
  }
  .hero.is-primary .tabs a {
    opacity: 1
  }
</style>
