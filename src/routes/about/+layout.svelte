<script>

    /** @type{import('./$types').LayoutData} */
    export let data
</script>

<h1>ID Navigations</h1>

<div class="submenu">
    {#each data.sections as section}
        <a href="/{section.slug}">{section.title}</a><br/>
    {/each}
</div>

<slot></slot>
