<script>
    import {enhance} from '$app/forms'

    /** {import('$types').ActionData} */
    export let form;
</script>

<form method="post" use:enhance={({form, data, action, cancel})=>{
    console.log('EnhancedForm', [form, data, action, cancel])
    return async ({result, update}) => {
        return;
    }
}}>
    <label>
        Favorite Film
        <input name="faveFilm" type="text"/>
    </label>

    <label>
        Email
        <input name="email" type="email"/>
    </label>

    <button>Submit</button>
</form>

<form method="post" action="?/logout">
    <button>Log Out</button>
</form>
