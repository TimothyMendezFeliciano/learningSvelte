<script>
    import {page} from '$app/stores'
</script>

<h1>
    Seems like your looking in the wrong section
</h1>

<h3>
    {$page.status}: {$page.error.message}
</h3>

<h5>
    {$page.url}: {$page.route.id}
</h5>

<h3><a href="/">Return</a> to main page</h3>

