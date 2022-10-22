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
      <ul class="recipi-list">
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
    max-width: 1200px;
    margin: auto;
  }
  .indexVoice {
    width: 20%;
  }
  .indexVoice_voice {
    text-transform: capitalize;
    margin-bottom: 0.8rem;
  }
  .recipi-list {
    list-style: none;
  }

  @media screen and (max-width: 1200px) {
    .wrap {
      padding: 2rem;
    }
  }
  @media screen and (max-width: 760px) {
    .indexVoice {
      width: 33.3%;
    }
  }
  @media screen and (max-width: 576px) {
    .wrap {
      flex-direction: column;
    }
    .indexVoice {
      width: 50%;
      margin: auto;
    }
  }
</style>
