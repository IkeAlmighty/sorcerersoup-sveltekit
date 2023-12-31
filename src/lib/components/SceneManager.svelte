<script>
	import Scene from './Scene.svelte';
	import { onMount } from 'svelte';

	let scenes = [];

	onMount(() => {
		fetchAndSetScenes();
	});

	async function fetchAndSetScenes() {}
</script>

{#each scenes as scene}
	<Scene items={scene.items} />
{/each}
