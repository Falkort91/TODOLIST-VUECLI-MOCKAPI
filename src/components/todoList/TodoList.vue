<script setup>
import {onMounted} from "vue";
import TodoListAddForm from './TodoListAddForm.vue';
import Todo from './Todo.vue';
import TodoListFooter from './TodoListFooter.vue';
import {todosStore} from '@/stores/todos';

const props = defineProps({
  apiURL:{type: String, required:true}
})

onMounted(async () => {
  todosStore.init(props.apiURL)
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
        <TodoListAddForm @on-submit-add-form="todosStore.createItem($event)"/>

        <!-- LISTE DES TODOS -->
        <ul
          class="m-4 divide-y divide-slate-200 text-slate-600"
          role="list"
          aria-label="Todos"
        >
          <!-- ITEM (exemple) -->
          <todo v-for="todo in todosStore.todos" :key="todo.id" :todo="todo" @on-delete="todosStore.deleteOneById($event)" />
        </ul>

        <!-- FOOTER DE LISTE -->
        <TodoListFooter :notCompletedCount="todosStore.notCompletedCount"/>
      </section>

</template>
<div>
  
</div>

<style scoped></style>