<script>
    export let text = "from svelt"
    export let onClick = () => null
</script>
<div class="text-3xl font-bold" on:click={onClick}>
    Hello {text}!
</div>