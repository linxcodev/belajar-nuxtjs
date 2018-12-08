<template>
  <section class="hero is-primary is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Hero title
        </h1>
        <h2 class="subtitle">
          Hero subtitle
        </h2>
      </div>
    </div>

    {{ pokemons.rajaongkir.results }}
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  asyncData() {
    return axios.get('province')
              .then(res => ({
                pokemons: res.data
              }))
  }
}
</script>
