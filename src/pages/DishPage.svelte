<script type="ts">
  import Ingredient from "../components/Ingredient.svelte";
  export let query: string;
  import { recipes } from "../recipes";
  const quantityPerServing = (
    quantity: number,
    newServing: number,
    startServing: number
  ) => {
    return (quantity * newServing) / startServing;
  };
  const foundRecipie = recipes.find(
    ({ name }) => name.toLocaleLowerCase() === query.toLocaleLowerCase()
  );
  $: recipie = foundRecipie;
  $: ingredients = foundRecipie.ingredients;
  $: servings = foundRecipie.servings;
  const ingredientsForQuantity = () => {
    ingredients = [...ingredients].map((i, index) => {
      const currentQuantity = foundRecipie.ingredients[index].quantity;
      return typeof i.quantity === "string"
        ? i
        : {
            ...i,
            quantity: quantityPerServing(
              currentQuantity as number,
              servings,
              foundRecipie.servings
            ),
          };
    });
  };
  const makePadding = (num: number): string =>
    num < 10 ? "0" + String(num) : String(num);
</script>

<div class="dishinfo">
  <h1>{recipie.name}</h1>
  <h4>di {recipie.author}</h4>
  <div class="justify-margin">
    <h3 class="section-name">
      Ingredienti per {#if recipie.disableServingsCount ?? true}<input
          label={"number of srevings"}
          type="number"
          min="1"
          bind:value={servings}
          on:change={ingredientsForQuantity}
        />
      {:else}{servings}
      {/if} persone
    </h3>
    <ul class="ingredient-list">
      {#each ingredients as ingredient}
        <li><Ingredient {ingredient} /></li>
      {/each}
    </ul>
    <div class="justify-margin">
      <h3 class="section-name">Descrizione</h3>
      <p>{recipie.description}</p>
    </div>
  </div>
  <div class="justify-margin">
    <h3 class="section-name">Preparazione</h3>
    {#each recipie.steps as description, i}
      <ul class="steplits">
        <li class="step">
          <p class="headNumber">.{makePadding(i + 1)}</p>
          <p>{description}</p>
        </li>
      </ul>
    {/each}
  </div>
  {#if recipie.note}
    <div class="justify-margin">
      <h3 class="section-name">Note</h3>
      {#each recipie.note as description, i}
        <ul class="steplits">
          <li class="step">
            <p class="headNumber">.{makePadding(i + 1)}</p>
            <p>{description}</p>
          </li>
        </ul>
      {/each}
    </div>
  {/if}
</div>

<style>
  .dishinfo {
    text-align: center;
    max-width: 1200px;
    width: 100%;
    margin: auto;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: clamp(2.5rem, 7vw, 4rem);
    font-weight: 100;
  }
  .ingredient-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 1rem;
  }
  .section-name {
    color: #ff3e00;
    font-weight: lighter;
    margin-bottom: 0.8rem;
  }
  .justify-margin {
    text-align: justify;
    margin: 0.5rem 0;
  }
  .steplits {
    list-style-type: none;
  }
  .step {
    margin-bottom: 1.5rem;
  }
  .step:not(:first-child) {
    margin: 1.5rem 0;
  }
  .headNumber {
    margin-bottom: 0.2rem;
    font-style: italic;
  }

  @media screen and (max-width: 1200px) {
    .dishinfo {
      padding: 2rem;
    }
  }
</style>
