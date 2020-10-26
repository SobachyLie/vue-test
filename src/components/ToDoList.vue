<template>

  <ul class="list-group">
    <li
        v-for="(todo, index) in todos"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center"
    >
      {{ `${index+1}: ${todo}` }}
      <div @click="deleteTodo(index)" class="btn btn-danger">удалить</div>
    </li>
  </ul>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "ToDoList",
  props: ['todos'],
  methods: {
    deleteTodo(index){
      this.$emit('delete-todo', index)
    }
  }
}
</script>

<style scoped>

</style>