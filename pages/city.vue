<template>
  <section class="hero is-success is-fullheight">
    <div class="ml-20">
      <items></items>
    </div>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Ini Halaman City
        </h1>
        <h2 class="subtitle">
          Dari nuxtjs
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import Items from '~/components/Items'

export default {
  components: {Items},
  // async fetch ({store}) {
  //   await store.dispatch('setItems','city');
  // }
}
</script>
