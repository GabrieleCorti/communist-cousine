export type Ingredient = {
  name: string;
  quantity: number | "q.b.";
  unit?: string;
};

export type Step = string;

export interface Dish {
  name: string;
  author?: string;
  description: string;
  servings: number;
  disableServingsCount?: boolean;
  ingredients: Ingredient[];
  steps: Step[];
  note?: string[];
}

export const recipes: Dish[] = [
  {
    name: "Lenticchie",
    author: "Carolina Villa",
    description: "Lenticchie con cotechino",
    servings: 8,
    ingredients: [
      { name: "Lenticchie", quantity: 550, unit: "g" },
      { name: "Cotechino precotto", quantity: "q.b.", unit: "" },
      { name: "Cipolle", quantity: 3, unit: "piccole" },
      { name: "burro", quantity: 50, unit: "g" },
      { name: "olio", quantity: 2, unit: "cucchiai" },
      { name: "patate", quantity: 4, unit: "grandi" },
      { name: "vino rosso", quantity: 1, unit: "bicchiere" },
      { name: "Concentrato pomodoro", quantity: 2, unit: "cucchiai" },
      { name: "Brodo carne o verdura", quantity: "q.b.", unit: "" },
      { name: "Sale e vino rosso", quantity: "q.b.", unit: "" },
    ],
    steps: [
      "Lasciare a mollo le lenticchie per 12h in acque tiepida salata",
      "Scaldare il brodo",
      "Scolare e sciacquare le lenticchie",
      "Stufare le cipolla con burro e olio",
      "Aggiungere le patate a pezzi e il vino con sciolto all'interno il concentrato di pomodoro",
      "Cuocere tutto fuoco alto per 5 minuti",
      "Aggiungere il brodo che non deve bollire",
      "Aggiungere le lenticchie",
      "Sbollire il tutto per circa un'ora e mezza con coperchio, salare a metà cottura",
      "Per quanto riguarda il cotechino, seguire le indicazioni di cottura",
      "Aggiungere il cotechino alle lenticchie poco prima di servire il piatto",
    ],
  },
  {
    name: "Pasta cacio e pepe",
    author: "Gabriele Corti",
    description: "Pasta cacio e pepe tipica della tradizione Romana",
    servings: 4,
    ingredients: [
      { name: "Pasta", quantity: 400, unit: "g" },
      { name: "Pepe", quantity: 40, unit: "grani" },
      { name: "Pecorino", quantity: 100, unit: "g" },
      { name: "Sale", quantity: "q.b.", unit: "" },
    ],
    steps: [
      "Battere 20 dei 40 grani di pepe e metteteli in una padella salta pasta o una padella larga",
      "Portare l'acqua a bollore, salare e buttare la pasta",
      "Mentre la pasta bolle tostare il pepe che è stato precedentemente battuto e battere il pepe avanzato",
      "Quando mancheranno circa 3 o 4 minuti alla cottura della pasta, mettere dell'acqua di cottura nella padella con il pepe tostato, e scolarne al suo interno la pasta",
      "Conservare l'acqua di cottura della pasta perché potrebbe venire utile più avanti nella ricetta",
      "Risottare la pasta per 3 o 4 minuti aggiungendo acqua di cottura se necessario",
      "Unire dell'acqua di cottura al pecorino grattugiato fino a che non si forma una crema con la consistenza che più vi soddisfa",
      "Quando la pasta sarà pronta mettetela in un recipiente a raffreddare leggermente, dopo un minuto aggiungete la crema di pecorino e il pepe rimanete, mischiando bene il tutto",
      "Se la crema appare troppo densa aggiungere dell'acqua di cottura",
    ],
  },
  {
    name: "Pasta alla puttanesca vegana",
    author: "Gabriele Corti",
    description:
      "Pasta con pomodori secchi e olive tipica della tradizione Siciliana senza ingrediente di origine animale",
    servings: 4,
    ingredients: [
      { name: "Pasta", quantity: 400, unit: "g" },
      { name: "Pepe", quantity: 40, unit: "grani" },
      { name: "Pomodori secchi", quantity: "q.b.", unit: "" },
      { name: "Olive", quantity: 200, unit: "g" },
      { name: "Capperi sotto sale", quantity: "q.b.", unit: "" },
      { name: "Cipolla rossa", quantity: "q.b.", unit: "" },
      { name: "Prezzemolo con gambi", quantity: 1, unit: "mazzo" },
      { name: "Olio", quantity: "q.b.", unit: "" },
      { name: "Sale", quantity: "q.b.", unit: "" },
    ],
    steps: [
      "Portare l'acqua a bollore, salare e buttare la pasta",
      "Aggiungere una discreta quantità di olio in una padella e stufare cipolla a fettine e gambi di prezzemolo",
      "Quando la cipolla è traslucida, togliere i gambi di prezzemolo e aggiungere le olive",
      "Dopo qualche minuto aggiungere i capperi ben sciacquati e lasciare stufare il tutto",
      "Tritare i pomodori secchi e le cime i prezzemolo della dimensione desiderata",
      "A cottura ultimata scolare la pasta e unire con olive e capperi e il trito di pomodori secchi e prezzemolo",
    ],
  },
  {
    name: "Farinata di ceci",
    author: "Martina Corti",
    disableServingsCount: false,
    description:
      "Focaccia alla pastella di farina di ceci tipica della tradizione ligure e toscana",
    servings: 4,
    ingredients: [
      { name: "Farina di ceci integrale", quantity: 165, unit: "g" },
      { name: "Acqua", quantity: 500, unit: "ml" },
      { name: "Sale", quantity: 1, unit: "cucchiaino da cucina" },
      { name: "Olio", quantity: 65, unit: "g" },
      { name: "Rosmarino", quantity: "q.b.", unit: "" },
    ],
    steps: [
      "Mischiare molto bene acqua e farina e lasciare riposare almeno 8h",
      "Terminate le 8h togliere la schiuma che eventualmente si è formata in superficie",
      "Aggiungere un po meno della metà di olio al composto e mischiare molto bene",
      "Ungere la teglia con la restante parte di olio e aggiungere il composto",
      "Mischiare il composto nella teglia con una forchetta e informare a 250 gradi, i primi 10 minuti appoggiando la teglia sul fondo del forno, mentre i restante 10 a metà altezza",
      "A 5 minuti dalla fine della cottura aggiungere il rosmarino",
      "Prima di mangiare la farinata lasciarla intiepidire",
    ],
    note: [
      "Queste quantità sono per una teglia da 12, perciò non seguire il calcolo a persona ma calcolare i multipli di teglia",
    ],
  },
];
