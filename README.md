# Comunist cousine

A simple front end lightweight app to gather all my recipes without the need of loading a s\*\*t ton of ads like every
cooking websites. I choose svelte just to have fun and try something new. i don't plan to have a DB for now, and also there will be no crazy CSS, cos as much as i love it, i have no time, and the idea is to create something useful and ultra minimal.

## The recipes

If you want to submit some recipes when the app will be online just make a pr adding the recipes in _recipes.ts_ following the following schema:

| key           | type                       | info                                                        | required |
| ------------- | -------------------------- | ----------------------------------------------------------- | -------- |
| `name`        | `string`                   | Recipe name                                                 | `true`   |
| `author`      | `string`                   | Author name                                                 | `false`  |
| `description` | `string`                   | A brief description of the dish                             | `true`   |
| `servings`    | `number`                   | Number of people for the quantity of ingredients            | `true`   |
| `ingredients` | Array of type `Ingredient` | The ingredients with relative `name`, `quantity` and `unit` | `true`   |
| `steps`       | Array of type `Step`       | The steps `description`                                     | `true`   |
