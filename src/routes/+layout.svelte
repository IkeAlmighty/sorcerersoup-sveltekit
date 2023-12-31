
<div id="container">
    <slot></slot>
</div>

<div id="footer">
    <div>A creation of Ike Yates &lt;3</div>
</div>

<style>

    #container {
        margin: auto auto;
        padding: 1rem;
        max-width: 800px;
        min-height: 100vh;
        border-radius: 0.2rem;
        background-color: var(--secondary-color);
        /* transform: translateY(20%) */
    }

    #footer {
        position: fixed;
        bottom: 0px;
        left: 0;
        width: 100vw;
        height: 20px;
        background-color: black;
        color: white;
        text-align: right;
        padding: 0.2rem;
    }
    #footer * {
        margin-right: 5rem;
    }
</style>