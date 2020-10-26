<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">
      MyApp
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ">
          <router-link class="nav-link" to="/">list</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/trash">trash</router-link>
        </li>

      </ul>
      <img src="/favicon.ico">
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",

}
</script>

<style scoped>

</style>