<script lang="ts">

	import { Router, Link, Route } from "svelte-routing";
	import Home from "./Home/Home.svelte"
	import Todo from "./Todo/Todo.svelte"

	export let url = "";
	export let name: string;
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="todo">Todo</Link>
  </nav>
  <div>
    <Route path="todo" component="{Todo}" />
    <Route path="/"><Home name="{name}"/></Route>
  </div>
</Router>
