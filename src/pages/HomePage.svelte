<script type="ts">
  import MainHeader from "../components/MainHeader.svelte";
  import RecipiesList from "../components/RecipiesList.svelte";
  import { recipes } from "../recipes";
  interface AlphabeticList {
    group: string;
    items: { name: string }[];
  }
  const recipieNames = recipes.map(({ name }) => ({ name: name }));
  const sortWord = (a: string, b: string) => {
    if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    }
    return -1;
  };

  const getAlphabeticListOrder = (list: AlphabeticList[]) => {
    return list
      .map((r) => ({
        ...r,
        items: r.items.sort((a, b) =>
          sortWord(a.name.toUpperCase(), b.name.toUpperCase())
        ),
      }))
      .sort((a, b) => sortWord(a.group, b.group));
  };

  const recipieIndex = recipieNames.reduce((r, e) => {
    const group = e.name[0].toUpperCase();
    if (!r[group]) {
      r[group] = { group, items: [e] };
    } else {
      r[group].items.push(e);
    }
    return r;
  }, {} as Record<string, { group: string; items: { name: string }[] }>);

  $: recipieNamesAndHeader = getAlphabeticListOrder(
    Object.values(recipieIndex) as AlphabeticList[]
  );
</script>

<div>
  <MainHeader />
  <p>Senza pubblicità e tracciamenti, per sempre.</p>
  <RecipiesList {recipieNamesAndHeader} />
</div>

<style>
  p {
    max-width: 50%;
    margin: 0.5rem auto 1.5rem;
    text-align: center;
  }
</style>
