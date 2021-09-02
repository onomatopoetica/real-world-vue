<template>
  <h1 v-if="test" @click="handler(arg, event)"></h1>
</template>

<script>
export default {
  data() {
    return {
      quote: 'I want to be single',
    }
  },
}
</script>

<style></style>
