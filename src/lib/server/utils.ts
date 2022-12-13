export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


export async function getIdFromRoutes(slug: any) {
    const regex = new RegExp('^[0-9]+$')
    sleep(800)
    if (regex.test(slug)) {
        return {
            id: slug
        }
    }
}
