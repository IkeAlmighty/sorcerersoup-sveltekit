<script>
	import Item from './Item.svelte';

	export let items;
</script>

{#each items as item}
	<Item json={item.json} />
{/each}
