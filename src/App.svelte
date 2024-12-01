<script>
  import { register, init, getLocaleFromNavigator, isLoading } from 'svelte-i18n';
  import Router from 'svelte-spa-router';

  import Index from './screens/index.svelte';
  import Omelette from './screens/omelette.svelte';
  import Create from './screens/create.svelte';
  import Source from './screens/source.svelte';

  const routes = {
    '/': Index,
    '/example': Omelette,
    '/createRecipe': Create,
    '/source': Source,
  };

  register('en', () => import('./locales/en.json'));
  register('pt', () => import('./locales/pt.json'));

  init({
    fallbackLocale: 'en',
    initialLocale: 'en' || getLocaleFromNavigator(),
  });
</script>

<main>
  {#if $isLoading}
    <span>carregando</span>
  {:else}
    <Router {routes} />
  {/if}
</main>

<style global lang="scss">
  @use './styles/app';
  @use './styles/typo';
</style>
