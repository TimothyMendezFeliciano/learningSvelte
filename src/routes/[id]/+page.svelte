<script>
    /** @type {import('./$types').PageData} */
    export let data;

    function handleClick() {
        console.log("data", data)
    }
</script>

<h1>Navigating to a component with a slug as id</h1>
<button on:click={handleClick}>The slug in this case is {@html data.id}</button>
<h3><a href="/">Return</a> to main page</h3>
