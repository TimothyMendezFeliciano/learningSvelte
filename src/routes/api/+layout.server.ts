/** {import('./$types').LayoutServerLoad} */
import {sleep} from "../../lib/server/utils";

export async function load() {
    sleep(2000)
    return {
        pokemons: [
            {
                name: 'pikachu'
            },
            {
                name: 'charizard'
            },
            {
                name: 'bulbasaur'
            },
        ]
    }
}
