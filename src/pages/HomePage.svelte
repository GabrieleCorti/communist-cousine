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
  <p>
    Ieri ho cercato una ricetta su un rinomato sito di cucina, il sito c'ha
    messo un minuto buono a caricarsi, la pubblicità era infinita, le dosi erano
    tutte sballate, ma soprattuto non era la ricetta che volevo. Ho creato
    questo sito così che chiunque volgia possa aggiungere le sue ricette e
    chiunque lo visiti possa leggere... ah naturalmente senza pubblicità di
    Google! Sarà una sorta di wiki semplice da consultare ma soprattuto così
    responsive che la potrete visitare sul vostro cazzo di smart watch
  </p>
  <RecipiesList {recipieNamesAndHeader} />
</div>

<style>
  p {
    max-width: 50%;
    margin: 1rem auto;
    text-align: center;
  }
</style>
