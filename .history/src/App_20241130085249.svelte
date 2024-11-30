<script>
  import { register, init, getLocaleFromNavigator, _, isLoading } from 'svelte-i18n';
  import Recipe from './Recipe.component.svelte';

  register('en', () => import('./locales/en.json'));
  register('pt', () => import('./locales/pt.json'));

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });

  const omeletteNutrition = new Map([
    ['Calories', '277kcal'],
    ['Carbs', '0g'],
    ['Protein', '20g'],
    ['Fat', '22g'],
  ]);

  let props = {
    title: 'Simple Omelette Recipe',
    description:
      'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
    imgUrl: '/img/image-omelette.jpeg',
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
    instructions: [
      '<b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
      '<b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.',
      '<b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
      '<b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
      '<b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
      '<b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.',
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
