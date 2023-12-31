<script>
	import { goto } from "$app/navigation";

    
</script>

<h1>Sorcerer Soup</h1>
    A computer assisted RPG
<hr />

<span class="font-lg">Steps For Players:</span>

<ol>
    <li>Create a character</li>
    <li>Add character to Campaign via 'join campaign' button at bottom of character profile.</li>
</ol>

<button on:click={() => goto('/character')}>Create Character</button>

<span class="font-lg">Steps for Game Masters:</span>
<ol>
    <li>Create a Campaign</li>
    <li>Create Several NPC Characters</li>
    <li>Maybe read the rules</li>
</ol>
<button on:click={() => goto('/campaign')}>Create Campaign</button> 

<style>
    button {
        display: block;
        margin: 1rem 0;
    }
</style>

