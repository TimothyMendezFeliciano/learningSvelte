import {error} from '@sveltejs/kit'

/** {import('./$types').RequestHandler} */

export function GET({url}: any) {

    return new Response(url)
}
