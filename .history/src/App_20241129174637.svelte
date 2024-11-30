<script>
  import { isLoading, _ } from 'svelte-i18n';
</script>

<main>
  {#await $isLoading}
    <h1>{$_('firstString')}</h1>
  {/await}
</main>

<style>
</style>
