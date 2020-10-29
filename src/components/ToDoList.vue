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

  <div class="grid">

    <div v-for="(todo, index) in todos" :key="index" class="item">
      <div class="item-content">
        {{ `${index+1}: ${todo}` }}
        <div @click="deleteTodo(index)" class="btn btn-danger">удалить</div>
      </div>
    </div>

  </div>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Muuri from 'muuri';
import 'web-animations-js';

export default {
  name: "ToDoList",
  props: ['todos'],
  data(){
    return{
      toDoListMuuri: "",
    }
  },
  mounted() {
    this.toDoListMuuri = new Muuri('.grid', {
      dragEnabled: true,
      items: document.querySelectorAll('.item'),
    });
  },
  methods: {
    deleteTodo(index){
      this.$emit('delete-todo', index)
      console.log(index, 'pre', this.todos);
      setTimeout(() => {
        this.removeMuuriItem(index);
        this.toDoListMuuri.refreshItems();
      }, 0);
    },
    addMuuriItem(){
      let newElems = '';
      setTimeout(() => {
        newElems = document.querySelectorAll('.grid > .item:last-child');
        this.toDoListMuuri.add(newElems);
      }, 0);
    },
    removeMuuriItem(index){
      // let delElems = document.querySelectorAll(`.grid > .item:nth-child(${index+1})`);
      // this.toDoListMuuri.remove(delElems);
      this.toDoListMuuri.refreshItems();
      console.log(index, 'after', this.todos);
      if(index === this.todos.length){
        console.log(123321,document.querySelector(`.grid > .item:nth-child(${index+1})`));
        document.querySelector(`.grid > .item:nth-child(${index+1})`).remove();
      }
    }
  },

}
</script>

<style scoped>
.grid {
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