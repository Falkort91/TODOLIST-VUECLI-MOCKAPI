<script setup>
import TodoListAddForm from './TodoListAddForm.vue';
import Todo from './Todo.vue';
import TodoListFooter from './TodoListFooter.vue';


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
          class="m-4 divide-y divide-slate-200"
          role="list"
          aria-label="Todos"
        >
          <!-- ITEM (exemple) -->
          <todo/>
        </ul>

        <!-- FOOTER DE LISTE -->
        <TodoListFooter/>
      </section>

</template>

<style scoped></style>