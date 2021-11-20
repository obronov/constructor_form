<template>
  <div id="app">
    <Header v-if="$route.path != '/'"/>
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
export default {
  components:{
    Header
  }
}

</script>

<style lang="scss">
@import '@/assets/scss/global.scss'
</style>
