/** @type {import('@sveltejs/kit').Handle} */

export async function handle({event, resolve}) {
    if (event.url.pathname.startsWith('/api')) {
        return new Response('Mew')
    }

    const response = await resolve(event)

    return response
}
