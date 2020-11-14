<template>
  <div class="loading-overlay" v-bind:class="{ 'loading-overlay-active': isLoading }">
    <div class="loading-overlay-bg"></div>
    <div class="loading-overlay-strip"></div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true
      next()
    })

    this.$router.afterEach((to, from) => {
      // setTimeout(() => { this.isLoading = false }, 2000)
    })
  }
}
</script>
