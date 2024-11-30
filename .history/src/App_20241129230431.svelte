<script>
  import { register, init, getLocaleFromNavigator, _, isLoading, locales } from 'svelte-i18n';

  register('en', () => import('./locales/en.json'));

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });

  console.log($locales);
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
