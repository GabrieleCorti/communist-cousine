# Comunist cousine

A simple front end lightway app to gather all my recipes without the need of loading a s\*\*t ton of ads like every
cooking websites. I choose svelte just to have fun and try something new. i dont plan to have a DB forn now, and also there will be no crazy CSS, cos as much as i love it, i have no time, and the idea is to create something useful and ultra minimal.

## The recipies

If you want to submit some recipies when the app will be online just make a pr adding the recpies in _recipies.ts_ following the following schema:

| key           | type                       | info                                                       | required |
| ------------- | -------------------------- | ---------------------------------------------------------- | -------- |
| `name`        | `string`                   | Recipy name                                                | `true`   |
| `author`      | `string`                   | Author name                                                | `false`  |
| `description` | `string`                   | A breef description of the dish                            | `true`   |
| `servings`    | `number`                   | Number of people for the quantitiy of igredients           | `true`   |
| `ingredients` | Array of type `Ingredient` | The igredients with relative `name`, `quantity` and `unit` | `true`   |
| `steps`       | Array of type `Step`       | The steps with relative `description` and optional `img`   | `true`   |


