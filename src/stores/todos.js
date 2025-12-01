import {reactive, computed} from 'vue';
import DB from '@/services/DB';

const todos = reactive([]);

const notCompletedCount = computed(()=>todos.filter((todo) => !todo.isCompleted).length)

//FONCTION CRUD
const createItem = async (content)=>{
    // 1. Lancer DB.create qui retourne la todo avec son id
    const todo = await DB.create(content);
    // 2. Ajouter dans les todos
    todos.push(todo);
  }

  const deleteOneById = async(id)=>{
    await DB.deleteOneById(id);
    todos.splice(todos.findIndex((todo)=> todo.id === id),1
    );
  };

  const init = (async(apiURL)=>{
  DB.setApiUrl(apiURL);
  todos.splice(todos.length, 0,...(await DB.findAll()));
})

  export const todosStore= reactive({
        todos,
        notCompletedCount,
        createItem,
        deleteOneById,
        init,
    
  })