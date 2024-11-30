<script>
  import { register, init, getLocaleFromNavigator, _ } from 'svelte-i18n';

  register('en', () => import('./locales/en.json'));

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });
</script>

<main>
  <h1>{$_('firstString')}</h1>
</main>

<style>
</style>
