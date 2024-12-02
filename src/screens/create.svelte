<script>
  import { _ } from 'svelte-i18n';

  document.getElementsByTagName('body')[0].className = '';
</script>

<article>
  <h1>{$_('create.title')}</h1>
  <p class="tagline">
    {$_('create.tagline')}
  </p>

  <form>
    <div class="input-element">
      <label for="name">{$_('create.form.name')}</label>
      <input name="name" id="name" type="text" />
    </div>
    <div class="input-element">
      <label for="description">{$_('create.form.description')}</label>
      <textarea rows="3" name="description" id="description"></textarea>
    </div>
    <div class="input-group">
      <label for="prepTotal">{$_('create.form.prepTime')}</label>

      <div>
        <label for="prepTotal" class="input-group-label">{$_('create.form.prepTotal')}</label>
        <input type="text" name="prepTotal" id="prepTotal" />
      </div>
      <div>
        <label for="prepPreparation" class="input-group-label">{$_('create.form.prepPreparation')}</label>
        <input type="text" name="prepPreparation" id="prepPreparation" />
      </div>
      <div>
        <label for="prepCooking" class="input-group-label">{$_('create.form.prepCooking')}</label>
        <input type="text" name="prepCooking" id="prepCooking" />
      </div>
    </div>
  </form>
</article>

<style lang="scss">
  @use '../styles/colors' as *;

  .input-element,
  .input-group {
    border: 1px solid hsl(30, 18%, 87%);
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.15s ease-in;

    &:focus-within {
      box-shadow: 0px 2px 6px hsla(31.8, 9.8%, 33.9%, 0.53);
    }

    & > * {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }

    label:not(.input-group-label) {
      text-align: center;
      font-size: 1.15rem;
      font-family: 'Young Serif', Georgia, serif;
      border-bottom: 1px solid hsl(30, 18%, 87%);
      background: hsl(30, 18%, 87%);
    }
  }

  .input-group > div {
    display: table;
    border-bottom: 1px solid hsl(30, 18%, 87%);

    &:last-of-type {
      border-bottom: 0;
    }

    & > * {
      display: table-cell;
    }
  }

  .input-group-label {
    width: 120px;
    border-right: 1px solid hsl(30, 18%, 87%);
    padding: 0px 10px;
    background: hsl(30, 7%, 94%);
    text-align: right;
  }

  form input,
  textarea {
    border: 0;
    font-size: 1rem;
    line-height: 1.5;
    font-family: 'Outfit', 'Helvetica', sans-serif;
    padding: 6px 10px;
    width: 100%;
    box-sizing: border-box;

    &:not(input) { // only textarea
      resize: vertical;
    }

    &:focus {
      outline: none;
    }
  }
</style>
