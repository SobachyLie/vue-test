<template>

<!--  <ul class="list-group">-->
<!--    <li-->
<!--        v-for="(todo, index) in todos"-->
<!--        :key="index"-->
<!--        class="list-group-item d-flex justify-content-between align-items-center">-->

<!--      {{ `${index+1}: ${todo}` }}-->
<!--      <div @click="deleteTodo(index)" class="btn btn-danger">удалить</div>-->
<!--    </li>-->
<!--  </ul>-->

  <muuri-grid ref="muuriGrid" id="example-grid" @add="add" @move="move"  @layoutEnd="updateOrder">
    <item-sm  :id="index" v-for="(todo, index) in todos" :key="index">
      <p>{{ todo.id }}) {{ todo.title }}</p>
      <p>{{ todo.description }}</p>
    </item-sm>
  </muuri-grid>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'web-animations-js'
import MuuriGrid from "@/components/MuuriGrid";
import ItemSm from "@/components/items/ItemSm";

export default {
  name: "ToDoList",
  props: ['todos'],
  data(){
    return{
      newTodos: this.$props.todos,
    }
  },
  components:{
    ItemSm,
    MuuriGrid,
  },
  methods: {
    deleteTodo(index){
      this.$emit('delete-todo', index);
    },
    refreshGrid(){
      this.$refs.muuriGrid.add(document.getElementsByClassName('item:last-child'))
    },
    move(data){
      console.log(data);
    },
    add(data){
      console.log(data);
    },
    updateOrder (items) {
      console.log(items);

      // this.$emit('update-todos', items);
    },
    addItem (){
      // let newElems = generateElements(5);
      // newElems.forEach(function (item) {
      //   item.style.display = 'none';
      // });
      // var newItems = grid.add(newElems);
    },
  },
}



</script>

<style scoped>
.muuri-grid {
  position: relative;
}
.item {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  margin: 5px;
  z-index: 1;
  background: #000;
  color: #fff;
}
.item.muuri-item-dragging {
  z-index: 3;
}
.item.muuri-item-releasing {
  z-index: 2;
}
.item.muuri-item-hidden {
  z-index: 0;
}
.item-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>