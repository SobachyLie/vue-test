<template>

  <Header />
  <div id="app">
    <router-view />
  </div>

</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'app',
  components: {
    Header,
  },
}
</script>

<style scoped>

#app{
  padding:20px
}

</style>
