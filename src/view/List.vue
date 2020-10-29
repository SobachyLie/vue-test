<template>
  <div>
    <AddTodo @add-muuri-item="addMuuriItem" @add-todo="addTodo"/>
    <ToDoList ref="ToDoList" v-bind:todos="todos" @delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";
import AddTodo from "@/components/AddTodo";

export default {
  name: "List",
  data(){
    return{
      todos:["ремонт", "покупки", "бубки", "123", "sfa", "kh", "7687", "zvz", "FHFHFF"]
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
    },
    addMuuriItem(){
      this.$refs.ToDoList.addMuuriItem();
      console.log(this.todos)
    },
  },
}
</script>

<style scoped>

</style>