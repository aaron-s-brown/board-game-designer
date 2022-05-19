<script lang="ts">
  import List from "./List.svelte";

  import { todos } from "./Store";

  let newTodoText = "";

  let createTodo = () => {
    todos.update((todos) => {
      var newTodo = {
        text: newTodoText,
        done: false,
      };
      return [...todos, newTodo];
    });
  };
</script>

<div>
  <input type="text" bind:value={newTodoText} />
  <button on:click={createTodo}>Add Todo</button>
  <List />
</div>
