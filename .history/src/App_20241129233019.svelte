<script>
  import { register, init, getLocaleFromNavigator, _, isLoading } from 'svelte-i18n';

  register('en', () => import('./locales/en.json'));
  register('pt', () => import('./locales/pt.json'));


  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });
</script>

<main>
  {#if $isLoading}
    <span>carregando</span>
  {:else}
    <h1>{$_('firstString')}</h1>
  {/if}
</main>

<style global lang="scss">
  @use './styles/_colors';
  @use './styles/_fonts';

  body {
    font-family: 'Outfit';
    font-weight: 400;
  }
</style>
