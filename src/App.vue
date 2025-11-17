<script setup>
import AppHeader from './components/AppHeader.vue';
import TodoList from './components/todoList/TodoList.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <AppHeader/>
  <main class="w-full max-w-xl mt-8 bg-slate-200 rounded-xl">
    <TodoList/>
  </main>
  <AppFooter/>
</template>

<style scoped>

</style>
