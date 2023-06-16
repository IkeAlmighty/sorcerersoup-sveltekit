<script>

    import { onMount } from 'svelte'
    import Item from '$lib/components/Item.svelte';
	import UnlockedIcon from '$lib/components/UnlockedIcon.svelte';
	import LockedIcon from '$lib/components/LockedIcon.svelte';

    let lockState = "unlocked"
    function toggleLockState() {
        if (lockState === "unlocked") lockState = "locked";
        else lockState = "unlocked";
    }

    /**
	 * @type {any[]}
	 */
    let itemsJSON = [];

    onMount(()=>{
        // fetch itemdata
        // TODO: replace test data with real fetch to database:
        itemsJSON = [
            {name: "Amulet of Radiant Blessing", tier: 2, description: "A shimmering amulet adorned with a radiant gemstone. When worn, it emits a soft glow that grants the wearer enhanced healing abilities, allowing them to mend wounds more rapidly.", spells: []},
            {name: "Blade of Frostbite", tier: 1, description: "A gleaming silver sword with an icy aura. The blade carries a chilling enchantment that freezes enemies upon contact, leaving them vulnerable to subsequent attacks and slowing their movements.", spells: []},
            {name: "Potion of Elixir Mastery", tier: 3, description: "A small vial containing a potent elixir. When consumed, it temporarily enhances the drinker's alchemical abilities, granting them superior potion-making skills and increased effectiveness in brewing magical concoctions.", spells: []},
            {name: "Gauntlets of Thunderclap", tier: 5, description: "Heavy gauntlets crackling with electrical energy. When activated, the gauntlets allow the wearer to unleash powerful lightning strikes with a mere gesture, striking foes with bolts of electrifying force.", spells: []},
            {name: "Cloak of Shadows", tier: 2, description: "A dark, billowing cloak that seems to absorb light. When worn, it shrouds the wearer in an impenetrable veil of shadows, rendering them virtually invisible to the naked eye and granting enhanced stealth", spells: []},
            {name: "Orb of Astral Projection", tier: 5, description: "A mystical orb pulsating with ethereal energy. When held, it allows the user to project their consciousness beyond the physical realm, exploring distant planes of existence and interacting with spirits and astral entities.", spells: []},
        ]
    });

</script>

<input id="character-name" type="text" value="Character Name" />
<button id="lock-state-button" on:click={toggleLockState}>
{#if lockState === "unlocked"} <UnlockedIcon /> {:else} <LockedIcon /> {/if}
</button>
<hr />

<div>
    <h3>Items</h3>
    {#each itemsJSON as itemJSON}
        <Item json={itemJSON} />
    {/each}

    <button>+ Add Item</button>
</div>


<style>
    #lock-state-button {
        width: 3rem;
        float: right;
    }

    #character-name {
        font-size: 1.5rem;
        padding: 0.61rem;
    }
</style>