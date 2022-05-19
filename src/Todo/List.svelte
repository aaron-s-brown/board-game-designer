<script lang="ts">
  import { todos } from "./Store";

  const removeTodo = (index: number) => {
    todos.update((todos) => {
      // remove the todo at the index
      todos.splice(index, 1);
      return todos;
    });
  };
</script>

<ul>
  <!-- '$' is shorthand for subscribing to stores -->
  {#each $todos as todo, index}
    <li>
      <input bind:checked={todo.done} type="checkbox" />
      <span class="todo-text" on:click={() => (todo.done = !todo.done)} class:checked={todo.done}
        >{todo.text}</span
      >
      <button on:click={() => removeTodo(index)}>X</button>
    </li>
    <br />
  {/each}
</ul>

<style>
  .checked {
    text-decoration: line-through;
  }
  .todo-text {
      cursor: pointer;
      user-select: none;
  }
</style>
