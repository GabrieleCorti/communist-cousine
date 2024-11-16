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
      "Sobbollire il tutto per circa un'ora e mezza con coperchio, salare a metà cottura",
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
  {
    name: "Pere al vino rosso",
    author: "Gabriele Corti",
    disableServingsCount: false,
    description: "Pere cotte al vino rosso",
    servings: 4,
    ingredients: [
      { name: "Pere", quantity: 4 },
      { name: "Vino rosso", quantity: 350, unit: "ml" },
      { name: "Anice stellato", quantity: "q.b." },
      { name: "Chiodi di garofano", quantity: "q.b." },
      { name: "Stecca di canella", quantity: "q.b." },
      { name: "Miele", quantity: 2, unit: "cucchiai" },
      { name: "Zucchero di canna", quantity: 60, unit: "g" },
    ],
    steps: [
      "Sbucciare le pere",
      "A fuoco alto aggiungere il vino il miele e lo zucchero di canna mischiare e fare sobbollire",
      "Dopo qualche minuto aggiungere l'anice stellato, i chiodi di garofano, la stecca di canella e le pere",
      "Abbassare il fuco e cuocere per circa 25 minuti e ogni 5 minuti girare le pere",
      "Togliere le pere dalla dalla padella quando avranno raggiunto la consistenza preferita",
      "Togliere le droghe dal liquido rimanente e a fiamma alta ridurre il vino fino ad ottenere una glassa dal colore rosso brillante e unirla con le pere",
    ],
    note: [
      "I migliori vini rossi da utilizzare per questo dessert sono un vino dolce (come il Brachetto), un Barbera, oppure un rosso di Borgogna",
    ],
  },
  {
    name: "Pasta patate e provola",
    author: "Martina Corti",
    disableServingsCount: false,
    description:
      "Pasta patate con provola affumicata tipica della tradizione campana",
    servings: 5,
    ingredients: [
      { name: "Pasta", quantity: 320, unit: "g" },
      { name: "Patate", quantity: 700, unit: "g" },
      { name: "Provola affumicata", quantity: 350, unit: "g" },
      { name: "Cipolla", quantity: "q.b." },
      { name: "Carota", quantity: "q.b." },
      { name: "Sedano", quantity: "q.b." },
      { name: "Concentrato di pomodoro", quantity: "q.b." },
      { name: "Crosta di parmigiano", quantity: "q.b." },
      { name: "Rametto di rosmarino", quantity: "q.b." },
      { name: "Peperoncino", quantity: "q.b." },
      { name: "Olio", quantity: "q.b." },
      { name: "Acqua", quantity: "q.b." },
    ],
    steps: [
      "Iniziare a fare bollire l'acqua in una padella, servirà per coprire le patate durante la cottura",
      "Preparare il trito per il soffritto con cipolla, carote e sedano",
      "Soffriggere il trito in abbondante olio",
      "Tagliare la provola a cubetti grossolani",
      "Tagliare a cubetti le patate e una volta che il soffritto è pronto metterle in padella a fiamma molto alta per qualche minuto, aggiungere il peperoncino se desiderato",
      "Nel frattempo sciogliere il concentrato di pomodoro in acqua e versarlo in padella e farlo rosolare con le patate per qualche minuto",
      "Aggiungere a coprire abbondante l'acqua già calda fino a coprire le patate",
      "Sobbollire a fiamma media le patate per circa 20 minuti e aggiungere il rametto di rosmarino e la crosta di parmigiano",
      "Togliere il rametto di rosmarino e buttare la pasta nella stessa padella con le patate, aggiungere acqua se è necessario, salare e portare a cottura",
      "A fine cottura a fuoco spento aggiungere la provola tagliata a cubetti e il formaggio grattugiato e girare sempre nello stesso verso fino a che la provola non sarà filante",
    ],
  },
  {
    name: "Risotto taleggio e radicchio",
    author: "Martina Corti",
    disableServingsCount: false,
    description: "Risotto mantecato con taleggio grasso e insaporito con radicchio rosso",
    servings: 4,
    ingredients: [
      { name: "Riso", quantity: 300, unit: "g" },
      { name: "Taleggio", quantity: 270, unit: "g" },
      { name: "Radicchio", quantity: 180, unit: "g" },
      { name: "Brodo vegetale", quantity: 1, unit: "l" },
      { name: "Cipolla", quantity: "q.b." },
      { name: "Olio", quantity: "q.b." },
      { name: "Sale", quantity: "q.b." },
      { name: "Grana grattugiato", quantity: "q.b." },
      { name: "Pepe", quantity: "q.b." },
      { name: "Noce moscata", quantity: "q.b." },
    ],
    steps: [
      "Pulire il radicchio",
      "Pulire il taleggio",
      "Portare a bollore il brodo vegetale",
      "Rosolare la cipolla con l'olio",
      "Cuocere il radicchio con la cipolla rosolata a fuoco medio basso e salarle",
      "In un altra casseruola, tostare il riso",
      "Coprire il riso tostato con il brodo, e aggiungerlo se necessario",
      "Condire con sale",
      "Quando mancano circa 5 minuti prima della mantecatura del risotto, unire il radicchio al riso",
      "Mantecare per 3/4 minuti il risotto con il taleggio e il grana, opzionalmente aggiungere pepe e noce moscata",
    ],
    note: [
      "Fate attenzione alla quantità di liquido durante la cottura del risotto, durante la mantecatura il taleggio annacquerà il preparato",
    ],
  },
  {
    name: "Risotto ai carciofi",
    author: "Silvana Rigoldi",
    disableServingsCount: false,
    description: "Risotto ai carciofi mantecato con burro e parmigiano",
    servings: 4,
    ingredients: [
      { name: "Riso", quantity: 300, unit: "g" },
      { name: "Carciofi surgelati", quantity: 300, unit: "g" },
      { name: "Brodo vegetale", quantity: 1, unit: "l" },
      { name: "Vino bianco", quantity: 1, unit: 'bicchiere' },
      { name: "Olio", quantity: "q.b." },
      { name: "Sale", quantity: "q.b." },
      { name: "Grana grattugiato", quantity: "q.b." },
      { name: "Burro", quantity: "q.b." },
      { name: "Pepe", quantity: "q.b." },
      { name: "Aglio", quantity: 3, unit: "spicchi" },
    ],
    steps: [
      "Soffriggere gli spicchi d'aglio con l'olio in una padella bassa",
      "aggiungere i carciofi surgelati, e una volta scongelati sfumare con un bicchiere di vino bianco",
      "Portare a bollore il brodo vegetale",
      "In un altra casseruola, tostare il riso",
      "Coprire il riso tostato con il brodo, e aggiungerlo se necessario",
      "Condire con sale",
      "Quando mancano circa 5 minuti prima della mantecatura del risotto, unire i carciofi al riso",
      "Mantecare per 3/4 minuti il risotto con il Grana grattugiato e il burro e il grana, opzionalmente aggiungere pepe",
    ],
  },
  {
    name: "Insalata americana",
    author: "Martina Corti",
    disableServingsCount: true,
    description: "Insalata di carote, sedano, capperi, pomodori, olive, peperoni, pollo e una vinaigrette di maionese, mostarda di digione e aceto",
    servings: 4,
    ingredients: [
      { name: "Carote", quantity: "q.b.", },
      { name: "Sedano", quantity: "q.b.", },
      { name: "Capperi sotto sale", quantity: "q.b.", },
      { name: "Pomodori", quantity: 400, unit: 'g' },
      { name: "Olive", quantity: "q.b.", },
      { name: "Peperoni", quantity: 1 },
      { name: "Pollo", quantity: "q.b." },
      { name: "Mionese", quantity: "q.b." },
      { name: "Mostarda", quantity: "q.b." },
      { name: "Sale", quantity: "q.b." },
      { name: "Pepe", quantity: "q.b." },
      { name: "Olio", quantity: "q.b." },
    ],
    steps: [
      "Dissalare i capperi sotto acqua corrente fredda",
      "Tagliare finemente carote, sedano, capperi, pomodori, olive, peperoni",
      "Tagliare il pollo a strisce, e cuocerlo in una padella calda con dell'olio",
      "Preparare la vinaigrette unendo maionese, mostarda di digione e l'aceto, facendo in modo che la maionese sia il doppio della mostarda e aggiungendo aceto piano piano fino a che il composto non ottiene una consistenza setosa ma non liquida",
      "unite tutti gli ingrediente a aggiungete sale e pepe a gusto"
    ],
    note: [
      "La ricetta non ha delle quantità precise perché la quantità degli ingredienti può variare a seconda del gusto personale",
      "Per la vinaigrette il rapporto fra maionese e senape è 2 a 1. Aggiungete l'aceto piano piano fino a che il composto non ottiene una consistenza setosa ma non liquida; non esagerate e aggiustate la quantità secondo il vostro gusto",
      "Togliendo il pollo si ottiene un ottima insalata estiva vegetariana",
    ],
  },
  {
    name: "Caseola",
    author: "Carolina Villa",
    disableServingsCount: true,
    description: "Caseola della nonna Lina",
    servings: 6,
    ingredients: [
      { name: "Burro", quantity: "q.b.", },
      { name: "Olio", quantity: "q.b.", },
      { name: "Cotenna", quantity: 150, unit: "g" },
      { name: "Costine di maiale", quantity: 1.5, unit: "Kg", },
      { name: "Verze", quantity: 3, unit: "Kg", },
      { name: "Vino rosso", quantity: 1, unit: "bicchiere" },
      { name: "Concentrato di pomodoro", quantity: "q.b.", },
    ],
    steps: [
      "Mondare le verze eliminando tutte le coste la sera prima e riporle coperte in un panno",
      "Tagliare la cotenna in diversi rettangoli",
      "Fare rosolare i rettangoli di cotenna in abbondante olio e burro fino a che non diventano trasparenti",
      "A fuoco alto aggiungere le costine e farle rosolare fino a che non si arrostiscono esternamente",
      "Unire in un bicchiere vino rosso e concentrato di pomodori ottenendo un composto setoso",
      "Aggiungere il composto di vino e concentrato di pomodoro alle costine ormai rosolate",
      "Abbassare la fiamma e aggiungere le verze a strati. Una volta aggiunto uno strato, prima di aggiungere il successivo lo strato precedente deve avere perso un po' di volume. Ogni volta che si aggiunge uno strato è necessario aggiungere anche una punta di sale grosso",
      "Quando la massa di verze inizia a sgonfiarsi e perdere liquidi è possibile iniziare a mescolare la caseola, ricordatevi di partire a mescolare la caseola dal fondo per evitare che si attacchi. Non mescolate continuamente ma ad intervalli regolari ogni 5/7 minuti fino alla totale cottura delle verze"
    ],
  }
];