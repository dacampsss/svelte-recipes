<script>
  import { _ } from 'svelte-i18n';
  import * as utils from './utils.js';

  export let title, description, imgUrl;

  export let preparationTime = {
    total: undefined,
    preparation: undefined,
    cooking: undefined,
  };

  export let ingredients = new Array(),
    instructions = new Array(),
    nutrition = new Map();
</script>

<article>
  <header>
    <img src={imgUrl} alt={$_('imgAltPrefix') + { title }} />

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

  <section>
    <h2>{$_('ingredients')}</h2>
    <ul>
      {#each ingredients as item}
        <li>{item}</li>
      {/each}
    </ul>
  </section>

  <section>
    <h2>{$_('instructions')}</h2>
    <ul>
      {#each instructions as item}
        <li>{@html item}</li>
      {/each}
    </ul>
  </section>

  <section class="nutrition">
    <h2>{$_('nutrition')}</h2>

    <p class="tagline">
      {$_('nutritionDesc')}
    </p>

    <table>
      <tbody>
        {#each Array.from(utils.mapToObjects(nutrition)) as item}
          <tr>
            <td>{item.type}</td>
            <td>{item.value}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>
</article>

<style lang="scss">
  @use './styles/_colors' as *;
  @use './styles/mob_recipe' as *;

  article {
    width: 100%;
    height: 100%;
    background: $white;
    padding: 40px 42px;
    border-radius: 24px;
    color: $stone600;
  }

  ul {
    line-height: 2rem;
    margin-bottom: 0px;
  }

  h1 {
    font-size: 2.5rem;
    color: $stone900;
  }

  section:not(.prepSection) {
    h2 {
      color: $brown800;
      font-size: 1.75rem;
    }

    &::after {
      content: '';
      height: 1px;
      width: 100%;
      display: inline-block;
      background: $stone150;
      margin-top: 2rem;
    }
  }

  section.prepSection {
    h2 {
      color: $rose800;
      font-family: 'Outfit';
      font-weight: 600;
      margin: 0px;
      font-size: 1.25rem;
    }

    padding: 30px;
    background: $rose50;
    border-radius: 10px;
    margin: 2rem 0px;
  }

  header img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }

  section.nutrition::after {
    display: none;
  }
</style>
