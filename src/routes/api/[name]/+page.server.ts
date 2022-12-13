import {error} from '@sveltejs/kit'

/** {import('./$types').PageServerLoad} */

export async function load({params}: any) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`, {
        method: 'GET'
    })

    const result = await response.json()

    if(result) return {
        ...result,
    }

    throw error(404, 'Not Found')
}
