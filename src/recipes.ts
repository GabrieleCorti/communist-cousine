export type Ingredient = {
  name: string;
  quantity: number | "q.b.";
  unit?: string;
};

export type Step = {
  img?: string;
  description: string;
};

export interface Dish {
  name: string;
  author?: string;
  description: string;
  servings: number;
  ingredients: Ingredient[];
  steps: Step[];
}

export const recipies: Dish[] = [
  {
    name: "polenta",
    author: "gico",
    description:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada erat eu risus tincidunt aliquam. Ut vulputate turpis nibh, ut cursus dolor accumsan in. Nam tincidunt fermentum rutrum. Vestibulum interdum, mi efficitur pulvinar dictum, diam tortor euismod neque, eget tempor massa est vel sapien. Aenean nulla ligula, hendrerit id pretium at, eleifend ut diam. In dignissim nibh nec mattis bibendum. Duis finibus, ex sed vehicula vulputate, urna quam pellentesque leo, a facilisis tellus libero sed velit. Donec sed massa justo. Sed nec tempus nisi. Integer id dui egestas, feugiat turpis non, placerat tellus.",
    servings: 4,
    ingredients: [
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
    ],
    steps: [
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
    ],
  },
  {
    name: "Agnello",
    author: "gico",
    description:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada erat eu risus tincidunt aliquam. Ut vulputate turpis nibh, ut cursus dolor accumsan in. Nam tincidunt fermentum rutrum. Vestibulum interdum, mi efficitur pulvinar dictum, diam tortor euismod neque, eget tempor massa est vel sapien. Aenean nulla ligula, hendrerit id pretium at, eleifend ut diam. In dignissim nibh nec mattis bibendum. Duis finibus, ex sed vehicula vulputate, urna quam pellentesque leo, a facilisis tellus libero sed velit. Donec sed massa justo. Sed nec tempus nisi. Integer id dui egestas, feugiat turpis non, placerat tellus.",
    servings: 4,
    ingredients: [
      {
        name: "farina",
        quantity: 2,
        unit: "a",
      },
      {
        name: "farina",
        quantity: 15,
        unit: "a",
      },
      {
        name: "farina",
        quantity: 21,
        unit: "a",
      },
      {
        name: "farina",
        quantity: 4,
        unit: "a",
      },
      {
        name: "farina",
        quantity: 9,
        unit: "a",
      },
      {
        name: "farina",
        quantity: 5,
        unit: "a",
      },
      {
        name: "farina",
        quantity: 6,
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: 44,
        unit: "a",
      },
      {
        name: "farina",
        quantity: 1,
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: 16,
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
    ],
    steps: [
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
    ],
  },
  {
    name: "Pasta",
    author: "gico",
    description:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada erat eu risus tincidunt aliquam. Ut vulputate turpis nibh, ut cursus dolor accumsan in. Nam tincidunt fermentum rutrum. Vestibulum interdum, mi efficitur pulvinar dictum, diam tortor euismod neque, eget tempor massa est vel sapien. Aenean nulla ligula, hendrerit id pretium at, eleifend ut diam. In dignissim nibh nec mattis bibendum. Duis finibus, ex sed vehicula vulputate, urna quam pellentesque leo, a facilisis tellus libero sed velit. Donec sed massa justo. Sed nec tempus nisi. Integer id dui egestas, feugiat turpis non, placerat tellus.",
    servings: 4,
    ingredients: [
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
    ],
    steps: [
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
    ],
  },
  {
    name: "Brasato",
    author: "gico",
    description:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada erat eu risus tincidunt aliquam. Ut vulputate turpis nibh, ut cursus dolor accumsan in. Nam tincidunt fermentum rutrum. Vestibulum interdum, mi efficitur pulvinar dictum, diam tortor euismod neque, eget tempor massa est vel sapien. Aenean nulla ligula, hendrerit id pretium at, eleifend ut diam. In dignissim nibh nec mattis bibendum. Duis finibus, ex sed vehicula vulputate, urna quam pellentesque leo, a facilisis tellus libero sed velit. Donec sed massa justo. Sed nec tempus nisi. Integer id dui egestas, feugiat turpis non, placerat tellus.",
    servings: 4,
    ingredients: [
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
    ],
    steps: [
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
    ],
  },
  {
    name: "Carciofi",
    author: "gico",
    description:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada erat eu risus tincidunt aliquam. Ut vulputate turpis nibh, ut cursus dolor accumsan in. Nam tincidunt fermentum rutrum. Vestibulum interdum, mi efficitur pulvinar dictum, diam tortor euismod neque, eget tempor massa est vel sapien. Aenean nulla ligula, hendrerit id pretium at, eleifend ut diam. In dignissim nibh nec mattis bibendum. Duis finibus, ex sed vehicula vulputate, urna quam pellentesque leo, a facilisis tellus libero sed velit. Donec sed massa justo. Sed nec tempus nisi. Integer id dui egestas, feugiat turpis non, placerat tellus.",
    servings: 4,
    ingredients: [
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
      {
        name: "farina",
        quantity: "q.b.",
        unit: "a",
      },
    ],
    steps: [
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
      {
        img: "a",
        description: "metti la farina dentro",
      },
    ],
  },
];
