export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ingredients: string;
  allergens?: string;
  dietary: string;
  spicyLevel: number;
  prepTime: number;
}

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 1,
    name: "Seared Scallops",
    description: "Pan-seared scallops served with a cauliflower purée, crispy pancetta, and micro greens.",
    price: 18.95,
    category: "appetizers",
    image: "https://images.pexels.com/photos/29707927/pexels-photo-29707927/free-photo-of-delicious-seared-scallops-with-corn-succotash.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ingredients: "Sea scallops, cauliflower, pancetta, olive oil, micro greens, lemon zest, sea salt",
    allergens: "Shellfish, Dairy",
    dietary: "Gluten-Free",
    spicyLevel: 0,
    prepTime: 20
  },
  {
    id: 2,
    name: "Truffle Arancini",
    description: "Crispy risotto balls infused with black truffle and stuffed with fontina cheese, served with a truffle aioli.",
    price: 16.50,
    category: "appetizers",
    image: "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ingredients: "Arborio rice, black truffle, fontina cheese, panko breadcrumbs, eggs, truffle oil, mayonnaise, garlic",
    allergens: "Gluten, Dairy, Eggs",
    dietary: "Vegetarian",
    spicyLevel: 0,
    prepTime: 25
  },
  {
    id: 3,
    name: "Burrata & Heirloom Tomatoes",
    description: "Creamy burrata cheese served with heirloom tomatoes, basil, aged balsamic glaze, and extra virgin olive oil.",
    price: 15.95,
    category: "appetizers",
    image: "https://images.pexels.com/photos/15781258/pexels-photo-15781258/free-photo-of-fork-and-knife-over-bowl-with-meal.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ingredients: "Burrata cheese, heirloom tomatoes, fresh basil, aged balsamic vinegar, extra virgin olive oil, sea salt, black pepper",
    allergens: "Dairy",
    dietary: "Vegetarian, Gluten-Free",
    spicyLevel: 0,
    prepTime: 15
  },
  {
    id: 4,
    name: "Spicy Tuna Tartare",
    description: "Fresh diced tuna mixed with avocado, cucumber, and spicy mayo, served with wonton crisps.",
    price: 19.95,
    category: "appetizers",
    image: "https://images.pexels.com/photos/31815433/pexels-photo-31815433/free-photo-of-delicious-poke-bowl-with-seaweed-garnish.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ingredients: "Fresh tuna, avocado, cucumber, spicy mayonnaise, soy sauce, sesame oil, green onion, wonton wrappers",
    allergens: "Fish, Gluten, Eggs, Soy",
    dietary: "Dairy-Free",
    spicyLevel: 2,
    prepTime: 30
  },
  
  // Main Course
  {
    id: 5,
    name: "Beef Tenderloin",
    description: "8oz prime beef tenderloin cooked to your preference, served with truffle mashed potatoes, roasted asparagus, and a red wine reduction.",
    price: 42.95,
    category: "main-course",
    image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: "Prime beef tenderloin, potatoes, truffle oil, butter, asparagus, red wine, beef stock, shallots, garlic",
    allergens: "Dairy",
    dietary: "Gluten-Free",
    spicyLevel: 0,
    prepTime: 35
  },
  {
    id: 6,
    name: "Pan-Seared Salmon",
    description: "Fresh Atlantic salmon with a crispy skin, served on a bed of wild rice pilaf with roasted Brussels sprouts and a lemon-dill beurre blanc.",
    price: 34.95,
    category: "main-course",
    image: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: "Atlantic salmon, wild rice, Brussels sprouts, shallots, white wine, lemon, dill, butter, olive oil",
    allergens: "Fish, Dairy",
    dietary: "Gluten-Free",
    spicyLevel: 0,
    prepTime: 30
  },
  {
    id: 7,
    name: "Mushroom Risotto",
    description: "Creamy Arborio rice cooked with a medley of wild mushrooms, finished with parmesan cheese, truffle oil, and fresh herbs.",
    price: 27.95,
    category: "main-course",
    image: "https://images.pexels.com/photos/31779539/pexels-photo-31779539/free-photo-of-delicious-mushroom-risotto-with-parmesan-cheese.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ingredients: "Arborio rice, assorted wild mushrooms, shallots, garlic, white wine, vegetable stock, parmesan cheese, truffle oil, fresh thyme",
    allergens: "Dairy",
    dietary: "Vegetarian, Gluten-Free",
    spicyLevel: 0,
    prepTime: 40
  },
  {
    id: 8,
    name: "Rack of Lamb",
    description: "Herb-crusted rack of lamb served with roasted garlic mashed potatoes, glazed baby carrots, and a rosemary jus.",
    price: 46.95,
    category: "main-course",
    image: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: "Rack of lamb, herbs, breadcrumbs, Dijon mustard, potatoes, garlic, butter, baby carrots, rosemary, lamb stock",
    allergens: "Gluten, Dairy",
    dietary: "",
    spicyLevel: 0,
    prepTime: 45
  },
  {
    id: 9,
    name: "Seafood Linguine",
    description: "Fresh linguine pasta tossed with shrimp, scallops, and mussels in a light tomato and white wine sauce.",
    price: 36.95,
    category: "main-course",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: "Linguine pasta, shrimp, scallops, mussels, tomatoes, white wine, garlic, shallots, fresh herbs, olive oil, chili flakes",
    allergens: "Gluten, Shellfish",
    dietary: "Dairy-Free",
    spicyLevel: 1,
    prepTime: 35
  },
  
  // Desserts
  {
    id: 10,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream and fresh berries.",
    price: 12.95,
    category: "desserts",
    image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: "Dark chocolate, butter, eggs, sugar, flour, vanilla bean, heavy cream, mixed berries",
    allergens: "Gluten, Dairy, Eggs",
    dietary: "Vegetarian",
    spicyLevel: 0,
    prepTime: 25
  },
  {
    id: 11,
    name: "creme brulle",
    description: "Classic vanilla bean custard with a caramelized sugar crust, served with fresh berries.",
    price: 10.95,
    category: "desserts",
    image: "https://images.pexels.com/photos/4040696/pexels-photo-4040696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: "Heavy cream, egg yolks, vanilla bean, sugar, mixed berries",
    allergens: "Dairy, Eggs",
    dietary: "Vegetarian, Gluten-Free",
    spicyLevel: 0,
    prepTime: 20
  },
  {
    id: 12,
    name: "Tiramisu",
    description: "Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
    price: 11.95,
    category: "desserts",
    image: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: "Ladyfingers, mascarpone cheese, eggs, sugar, espresso, cocoa powder, Marsala wine",
    allergens: "Gluten, Dairy, Eggs",
    dietary: "Vegetarian",
    spicyLevel: 0,
    prepTime: 30
  },
  
  // Beverages
  {
    id: 13,
    name: "Signature Mojito",
    description: "Classic cocktail made with fresh mint, lime, rum, and soda water.",
    price: 14.95,
    category: "beverages",
    image: "https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: "White rum, fresh lime juice, mint leaves, sugar, soda water",
    allergens: "",
    dietary: "Vegan, Gluten-Free",
    spicyLevel: 0,
    prepTime: 10
  },
  {
    id: 14,
    name: "Espresso Martini",
    description: "A sophisticated cocktail made with vodka, coffee liqueur, and freshly brewed espresso.",
    price: 15.95,
    category: "beverages",
    image: "https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: "Vodka, coffee liqueur, espresso, simple syrup",
    allergens: "",
    dietary: "Vegan, Gluten-Free",
    spicyLevel: 0,
    prepTime: 10
  },
  {
    id: 15,
    name: "Tropical Fruit Smoothie",
    description: "Refreshing blend of mango, pineapple, and banana with a hint of coconut.",
    price: 9.95,
    category: "beverages",
    image: "https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ingredients: "Mango, pineapple, banana, coconut milk, ice",
    allergens: "",
    dietary: "Vegan, Gluten-Free",
    spicyLevel: 0,
    prepTime: 10
  }
];