<template>
  <section class="hero is-info is-fullheight">
    <items :data="'Index'"></items>
  </section>
</template>

<script>
import Items from '~/components/Items'

export default {
  components: {Items}
}
</script>
