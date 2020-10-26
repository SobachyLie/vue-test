<template>
  <div class="form-group d-flex justify-content-between align-items-center">
    <input class="form-control" placeholder="New Deal" v-model="newTodo" />
    <button @click="addTodo(newTodo)" class="btn btn-primary">Добавить</button>
  </div>
</template>

<script>

export default {
  name: "AddTodo",
  data(){
    return{
      newTodo: '',
    }
  },
  methods:{
    addTodo(text){
      this.newTodo ? this.$emit("add-todo", text) : {};
      this.newTodo = '';
    },
  },
}

</script>

<style scoped>
.form-group{

}
</style>