<script type="ts">
  import { link } from "svelte-navigator";
  export let recipieNamesAndHeader: {
    group: string;
    items: { name: string }[];
  }[];
</script>

<div class="wrap">
  {#each recipieNamesAndHeader as { group, items }}
    <div class="indexVoice">
      <h3>{group}</h3>
      <ul>
        {#each items as { name }}
          <li class="indexVoice_voice">
            <a href={`/dish/${name}`} use:link>{name}</a>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>

<style>
  .wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
    margin: auto;
  }
  .indexVoice {
    width: 20%;
  }
  .indexVoice_voice {
    text-transform: capitalize;
    margin-bottom: 0.8rem;
  }
</style>
