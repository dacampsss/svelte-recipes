<script>
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  import { push } from 'svelte-spa-router';

  onMount(() => {
    document.getElementsByTagName('body')[0].className = 'index';
  });
</script>

<main class="index">
    <h1>{$_('index.welcome')}</h1>

    <article>
      <p class="tagline">
        {$_('index.description')}
      </p>

      <button onclick={() => push('/createRecipe')} class="create">
        {$_('index.btn1')}
      </button>
      <button onclick={() => push('/example')} class="example">
        {$_('index.btn2')}
      </button>
      <button onclick={() => push('/source')} class="source">
        {$_('index.btn3')}
      </button>
    </article>

    <footer>
      <span class="license-notice">
        This work utilizes the GNU Affero GPLv3 and therefore you need to utilize this same license in order to reuse or republish this work in any
        forms. Click here to read the full license.
      </span>

      <img src="/img/agpl3-88.png" alt="GNU Affero GPL version 3 license logo" />
    </footer>
</main>

<style lang="scss">
  @use '../styles/colors' as *;

  :global(body.index) {
    display: table;
    margin: 0px !important;
    min-height: 100vh;
    min-width: 100%;
  }

  :global(body.index > #app) {
    display: table-cell;
    vertical-align: middle;
  }

  :global(main.index) {
    width: fit-content;
    max-width: 50vw;
    margin: 0 auto;
  }

  :global(.index article) {
    padding: 20px 32px !important;
  }

  button {
    display: block;
    appearance: none;
    background: $white;
    border: 1px solid $stone600;
    width: 100%;
    margin-bottom: 5px;
    font-family: 'Outfit', 'Helvetica', sans-serif;
    font-size: 1.25rem;
    border-radius: 8px;
    font-weight: 300;
    padding: 5px 0px;
    transition: all 0.15s ease-out;
    color: $stone900;

    &:hover {
      cursor: pointer;
      transform: scale(1.015);
      box-shadow: 0px 0px 2px $stone600;
    }
  }

  footer {
    float: right;
    display: table;
    font-size: 0.75rem;
    text-align: right;
    max-width: 75%;
    margin-top: 20px;
    padding: 0px 36px;

    & > * {
      display: table-cell;
      vertical-align: middle;
      margin-left: 10px;
    }
  }
</style>
