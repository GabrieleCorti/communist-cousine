<script type="ts">
  import HomePage from "./pages/HomePage.svelte";
  import DishPage from "./pages/DishPage.svelte";
  import { Router, Route } from "svelte-navigator";
  /**
   * prop for stopping routes to auto manage the focus on reload
  */
  const primary = false;
</script>

<main style="overflow-x: hidden;">
  <Router>
    <Route path="/" {primary}>
      <HomePage />
    </Route>
    <Route path="/dish/:query" let:params {primary}>
      <DishPage query={params.query} />
    </Route>
  </Router>
</main>
