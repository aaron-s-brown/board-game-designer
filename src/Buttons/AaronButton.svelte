<script lang="ts">
	export let foo: number;
	let count = 1;
    $: doubled = count * count * count;

	function incrementCount() {
		// event handler code goes here
		count += 1;
	}
</script>

<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<div>
     {count} ^ 3 = {doubled}</div>
<div>Foo: {foo}</div>
