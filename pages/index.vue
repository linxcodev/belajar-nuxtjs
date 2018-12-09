<template>
  <section class="hero is-primary is-medium">
    <div class="hero-body">
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
          <div class="panel-block" v-for="prov in provs">
            {{ prov.province }}
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'provs'
  ])
}
</script>
