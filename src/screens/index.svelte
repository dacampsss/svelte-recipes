<script>
  import { _ } from "svelte-i18n";
  import { push } from 'svelte-spa-router';
</script>

<main>
  <h1>{$_('index.welcome')}</h1>
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

  <footer>
    <span class="license-notice">
      <img src="/img/agpl3-88.png" alt="GNU Affero GPL version 3 license logo" />

      This work utilizes the GNU Affero GPLv3 and therefore you need to utilize this same license in order to reuse or republish this work in any
      forms. Click here to read the full license.
    </span>
  </footer>
</main>

<style lang="scss">

</style>
