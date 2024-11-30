<script>
  import { _, isLoading } from 'svelte-i18n';
</script>

<main>
  {#if $isLoading}
    <span>carregando</span>
  {:else}
    <h1>{$_('firstString')}</h1>
  {/if}
</main>

<style>
</style>
