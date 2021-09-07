<template>
  <div class="EventCreate">
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.name }}</p>
    <!-- <p>There are {{ catLength }} categories</p> -->
    <p>{{ getEvent(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    // catLength() {
    //   return this.$store.getters.catLength
    // },
    getEvent() {
      return this.$store.getters.getEventById
    },
    ...mapState(['user', 'categories']),
    ...mapGetters(['getEventById']),
  },
}
</script>

<style></style>
