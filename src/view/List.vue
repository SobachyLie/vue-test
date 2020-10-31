<template>
  <div>
    <AddTodo  @add-todo="addTodo"/>
    <ToDoList ref='ToDoList' @update-todos="updateTodos" v-bind:todos="todos" @delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";
import AddTodo from "@/components/AddTodo";

export default {
  name: "List",
  data(){
    return{
      todos:[
        {title:'Уборка', description: "убрать всю хату", id: 1},
        {title:'ремонт', description: "ремонт гаража", id: 2},
        {title:'бубки', description: "поиграть в нарды", id: 3},
      ]
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
      let id = Math.max.apply(Math, this.todos.map(function(o) { return o.id; }))+1;
      text = {title: text, description:"none", id: id};
      this.todos.push(text);
      this.updateTodos(this.todos);
    },
    updateTodos(arr){
        this.todos = arr;
        this.$refs.ToDoList.refreshGrid();
        console.log('todos = newArr', this.todos);
    },
  },
}
</script>

<style scoped>

</style>