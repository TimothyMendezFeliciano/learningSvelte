<script>
    let pokemonName = '';
    let pokemonResult = {}

    function handleChange(e) {
        pokemonName = e.target.value
    }

    async function getPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`, {
            method: 'GET',
        });

        pokemonResult = await response.json()
    }
</script>

<label>Enter Pokemon Name to search:</label>
<input on:change={handleChange}>
<button on:click={getPokemon}>Get Pokemon</button>
{JSON.stringify(pokemonResult)}
