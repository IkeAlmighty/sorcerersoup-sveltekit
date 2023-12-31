<script>
	export let onSelect = () => {};
</script>

<h3>Select a Tier</h3>
<input type="radio" value="1" name="tier" on:click={() => onSelect('1')} />
<label for="1">1</label>
<input type="radio" value="2" name="tier" on:click={() => onSelect('2')} />
<label for="2">2</label>
<input type="radio" value="3" name="tier" on:click={() => onSelect('3')} />
<label for="3">3</label>
<input type="radio" value="4" name="tier" on:click={() => onSelect('4')} />
<label for="4">4</label>
<input type="radio" checked value="5" name="tier" on:click={() => onSelect('5')} />
<label for="5">5</label>

<style>
	input[type='radio'] {
		margin-right: 5px;
		width: 1.5em;
		height: 1.5em;
	}

	label {
		margin-right: 15px;
		font-size: 1.5em;
	}
</style>
