<template>
  <section class="hero is-success is-fullheight">
    <items :data="'City'"></items>
  </section>
</template>

<script>
import Items from '~/components/Items'

export default {
  components: {Items}
}
</script>
