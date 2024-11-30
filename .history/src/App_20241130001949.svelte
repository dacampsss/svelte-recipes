<script>
  import { register, init, getLocaleFromNavigator, _, isLoading } from 'svelte-i18n';
  import Recipe from './Recipe.component.svelte';

  register('en', () => import('./locales/en.json'));
  register('pt', () => import('./locales/pt.json'));

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });

  let props = {
    title: 'Simple Omelette Recipe',
    description:
      'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
    imgUrl: '',
    preparationTime: {
      total: 'Approximately 10 minutes',
      preparation: '5 minutes',
      cooking: '5 minutes',
    },
    ingredients: [
      '2-3 large eggs',
      'Salt, to taste',
      'Pepper, to taste',
      '1 tablespoon of butter or oil',
      'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
    ],
  };
</script>

<main>
  {#if $isLoading}
    <span>carregando</span>
  {:else}
    <Recipe {...props} />
  {/if}
</main>

<style global lang="scss">
  @use './styles/app';
  @use './styles/typo';
</style>
