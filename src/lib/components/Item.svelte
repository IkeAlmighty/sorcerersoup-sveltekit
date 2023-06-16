<script>

    /**
	 * @type {{ name: string; description: string; tier: number}}
	 */
     export let json;

     let detailsViewable = false;
</script>

<div id="container">
    <div id="item-header">
        <b>{json.name}</b>
        <hr class="inline-rule"/>
        <span class="details-button" on:click={()=>{ detailsViewable = !detailsViewable }}>{detailsViewable? "hide": "view"}</span>
    </div>

    {#if detailsViewable}
        <div class="item-details-container">
            <i>{json.description}</i>
        </div>
    {/if}
    
</div>

<style>

    #container {
        margin: 1rem 0;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 5px;
    }

    i {
        display: block;
        margin: 0.5rem 0;
    }

    .item-details-container {
        margin-top: 2rem;
    }

    .details-button {
        border: none;
        cursor: pointer;
        text-align: right;
        user-select: none;
    }

    .inline-rule {
        display: inline-block;
        width: 100%;
        max-height: 1px;
        margin-left: 1rem;
    }

    #item-header {
        display: grid;
        grid-template-columns: auto 1fr 75px;
    }
</style>
