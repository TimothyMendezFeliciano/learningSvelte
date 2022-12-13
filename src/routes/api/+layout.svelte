<script>
    /** @type {import('./types').LayoutData} */
    export let data
</script>

<main>
    <slot/>
</main>

<aside>
    <h2>
        Choose your starter
    </h2>
    <ul>
        {#each data.pokemons as pokemon}
            <li>
                <a href="/api/{pokemon.name}">{pokemon.name}</a>
            </li>
        {/each}
    </ul>
</aside>
