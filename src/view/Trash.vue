<template>
  <div class="text-center">
    <img class="rounded mx-auto d-block"  :src="`http://placeimg.com/640/480/${this.getImage()}`" />
  </div>
</template>

<script>
export default {
  name: "Trash",
  created: function () {

  },
  methods:{
    getImage() {
      return Math.floor(Math.random() * 300);
    },
  }
}
</script>


<style scoped>

</style>