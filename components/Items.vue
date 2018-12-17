<template>
  <div>
    <nav class="pl-20">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/city">City</nuxt-link>
    </nav>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Ini Halaman {{ data }}
        </h1>
        <h2 class="subtitle">
          Dari nuxtjs
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'datas'
  ]),
  props:['data'],
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
