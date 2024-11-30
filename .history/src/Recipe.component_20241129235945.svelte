<script>
  export let title, description, imgUrl;

  export let preparationTime = {
    total: undefined,
    preparation: undefined,
    cooking: undefined,
  };

  export let ingredients = new Array(),
    instructions = new Array(),
    nutrition = new Map();

  import { _ } from 'svelte-i18n';
</script>

<article>
  <header>
    <img src={imgUrl} alt={$_('imgAltPrefix') + {title}} />

    <h1>{title}</h1>
    <p class="tagline">
      {description}
    </p>
  </header>

  <section class="prepSection">
    <h2>{$_('preparation.label')}</h2>

    <ul>
      <li>
        <b>{$_('preparation.total')}:</b>&nbsp;{preparationTime.total}
      </li>
      <li>
        <b>{$_('preparation.preparation')}:</b>&nbsp;{preparationTime.preparation}
      </li>
      <li>
        <b>{$_('preparation.cooking')}:</b>&nbsp;{preparationTime.cooking}
      </li>
    </ul>
  </section>
</article>

<style type="text/scss">
</style>
