<script setup>
import {reactive, onMounted} from "vue";
import DB from "@/services/DB";
import TodoListAddForm from './TodoListAddForm.vue';
import Todo from './Todo.vue';
import TodoListFooter from './TodoListFooter.vue';

const todos = reactive([]);
onMounted( async()=>{
  DB.setApiUrl("https://691b19752d8d785575717f93.mockapi.io/");
  todos.splice(todos.length, 0,...(await DB.findAll()));
})

</script>

<template>

<!-- CARD LISTE -->
      <section
        class="bg-slate-100 rounded-xl shadow ring-1 ring-slate-200/60 overflow-hidden"
        aria-labelledby="todo-heading"
      >
        <h2 id="todo-heading" class="sr-only">Todo list</h2>

        <!-- INPUT PRINCIPAL -->
        <TodoListAddForm/>

        <!-- LISTE DES TODOS -->
        <ul
          class="m-4 divide-y divide-slate-200 text-slate-600"
          role="list"
          aria-label="Todos"
        >
          <!-- ITEM (exemple) -->
          <todo v-for="todo in todos" :key="todo.id" :todo="todo"/>
        </ul>

        <!-- FOOTER DE LISTE -->
        <TodoListFooter/>
      </section>

</template>

<style scoped></style>