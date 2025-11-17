<script setup>

</script>

<template>

    <div class="border-b border-slate-200 bg-slate-50 py-3 px-4 sm:p-5">
          <form class="flex gap-2" aria-label="Add a new task">
            <label for="new-todo" class="sr-only">New task</label>
            <input
              id="new-todo"
              type="text"
              placeholder="What needs to be done?"
              class="w-full bg-slate-100 border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              class="shrink-0 px-4 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Add
            </button>
          </form>
        </div>

</template>

<style scoped>

</style>