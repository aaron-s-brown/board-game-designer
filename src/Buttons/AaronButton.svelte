<script>
	let count = 1;

	function incrementCount() {
		// event handler code goes here
		count *= 2;
	}
</script>

<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
