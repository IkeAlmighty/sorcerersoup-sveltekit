<!-- 
    
    A component for entering new item data. Either a csv file can be uploaded,
    or items can be added individually through this interface.

-->

<script>
	import DiceIcon from './DiceIcon.svelte';
	import TierRadioInput from './TierRadioInput.svelte';

	let tier = 5;
	let name = '';
	let description = '';

	async function uploadItems(itemList) {
		if (name === '' || description === '') {
			alert('Each Item must have a name and description');
		}
		console.log(itemList);
	}

	async function setRandomName() {
		// TODO: write a backend function for generating random item
		// names.
	}

	async function setRandomDescription() {
		if (name === '') {
			await setRandomName();
		}

		// TODO: write a backend function for generating a random
		// description based on an item name.
	}
</script>

<TierRadioInput onSelect={(value) => (tier = value)} />

<!-- TODO: fix styling here to use flex or grid -->
<div class="container">
	<input type="text" bind:value={name} placeholder="Type and Item Name..." />
	<button on:click={setRandomName}><DiceIcon /></button>
</div>

<div class="container">
	<textarea bind:value={description} placeholder="type a description of the object..." />
	<button on:click={setRandomDescription}><DiceIcon /></button>
</div>

<button on:click={() => uploadItems([{ tier, name, description }])}>Create Item</button>

<hr />
<div class="container">...or upload a csv file of multiple items:</div>
<input type="file" />

<style>
	.container {
		margin: 1rem 0;
	}

	input {
		display: block;
	}

	input[type='text'] {
		display: inline-block;
		min-width: 300px;
		font-size: 1.2rem;
	}

	textarea {
		min-width: calc(100% - 2rem);
		min-height: 200px;
		padding: 1rem;
	}

	button {
		display: block;
	}
</style>
