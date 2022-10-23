<script type="ts">
  import type { Ingredient } from "../recipes";
  export let ingredient: Ingredient;
  export let style: string | undefined = undefined;
</script>

<p {style}>
  {ingredient.name} <span>{ingredient.quantity}</span>
  {#if ingredient.unit}
    <span>{ingredient.unit}</span>
  {/if};
</p>
