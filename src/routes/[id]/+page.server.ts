import {error} from '@sveltejs/kit';
import {getIdFromRoutes} from "../../lib/server/utils";

/** {import('./$types').PageServerLoad} */
export async function load({params}: any) {
    const id = await getIdFromRoutes(params.id)

    if (id) return id;

    throw error(404, 'Not found')
}
