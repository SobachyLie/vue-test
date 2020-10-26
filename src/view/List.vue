<template>
  <div>
    <AddTodo @add-todo="addTodo"/>
    <ToDoList v-bind:todos="todos" @delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";
import AddTodo from "@/components/AddTodo";

export default {
name: "List",
  data(){
    return{
      todos:["ремонт", "покупки", "бубки"]
    }
  },
  components: {
    ToDoList,
    AddTodo,
  },
  methods:{
    deleteTodo(index){
      this.todos.splice(index, 1);
    },
    addTodo(text){
      this.todos.push(text);
    }
  },
  created: function () {
  }
}
</script>

<style scoped>

</style>