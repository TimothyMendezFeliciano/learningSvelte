/** @type {import('./$types').Actions} */

export const actions = {
    default: async (event:Event) => {
        event.preventDefault()
        window.alert('Logging In')
        console.log("Event", event)
    },
    logout: async (event:Event) => {
        window.alert('Logging Out')
    }
}
