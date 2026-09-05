export const LINKS = {
  order: "https://www.toasttab.com/local/order/rouxs",
  giftCards: "https://www.toasttab.com/local/gift-cards/rouxs",
  facebook: "https://www.facebook.com/profile.php?id=61569876320539",
  instagram: "https://www.instagram.com/rouxscreolecafe/",
  x: "https://x.com/RouxsCreoleCafe",
  maps: "https://maps.google.com/?q=170+N+Water+Ave,+Gallatin,+TN+37066",
  mapsEmbed:
    "https://maps.google.com/maps?q=170+North+Water+Avenue,+Gallatin,+TN+37066&z=16&output=embed",
  phone: "tel:+16154516961",
  truck: "tel:+16154284887",
  email: "mailto:info@rouxscreolecafe.com",
  doordash: "https://www.doordash.com/store/rouxs-creole-cafe-32768513",
  grubhub:
    "https://www.grubhub.com/restaurant/rouxs-creole-cafe-170-n-water-ave-gallatin/13184368",
  webb: "https://webbspinnervisions.net",
};

export const PLACE = {
  name: "Roux's Creole Cafe",
  street: "170 North Water Avenue",
  city: "Gallatin, TN 37066",
  phoneDisplay: "(615) 451-6961",
  truckDisplay: "(615) 428-4887",
};

export type MenuItem = {
  name: string;
  price: string;
  note?: string;
  featured?: boolean;
};

export type MenuGroup = {
  id: string;
  label: string;
  intro?: string;
  items: MenuItem[];
};

export const MENU: MenuGroup[] = [
  {
    id: "apps",
    label: "Appetizers",
    intro: "Shareable plates, fried to order.",
    items: [
      {
        name: "Fried Green Tomatoes",
        price: "$8",
        note: "Hand-breaded, served with remoulade.",
        featured: true,
      },
      {
        name: "Boudin Balls",
        price: "$8",
        note: "Classic boudin in a panko crust, remoulade.",
      },
      {
        name: "Alligator Bites",
        price: "$12",
        note: "Those old “tastes like chicken” claims don’t fly.",
      },
      {
        name: "Oysters on the Halfshell",
        price: "6 / $14 · 12 / $26",
        note: "Flown in fresh from the Gulf, hand-shucked.",
        featured: true,
      },
      {
        name: "Fried Oysters",
        price: "$12",
        note: "Hand-battered to order, remoulade.",
      },
      {
        name: "Shrimp Cocktail",
        price: "$12",
        note: "Tender shrimp, house cocktail sauce.",
      },
      {
        name: "Roux's House Salad",
        price: "$7",
        note: "Shaved iceberg, house olive salad, Italian dressing. Add fried shrimp, fish, or salami & cheese +$5.",
      },
    ],
  },
  {
    id: "poboys",
    label: "Po'boys & Muffuletta",
    intro:
      "All po'boys on Leidenheimer French bread. Deli listed as half; full sizes available.",
    items: [
      {
        name: "Ham & Cheese",
        price: "$8",
        note: "Cheddar, Swiss, or provolone.",
      },
      {
        name: "Turkey & Cheese",
        price: "$8",
        note: "Cheddar, Swiss, or provolone.",
      },
      {
        name: "Cajun Club",
        price: "$8.50",
        note: "Ham, turkey, bacon, Swiss.",
      },
      {
        name: "Granny's BLT",
        price: "$9",
        note: "Fried green tomatoes, bacon, lettuce, remoulade.",
      },
      {
        name: "Cuban",
        price: "$8.50",
        note: "Ham, pork, Creole mustard, pickles.",
      },
      {
        name: "The Debris",
        price: "$13",
        note: "Slow-cooked chuck in brown gravy — the original po'boy. Sloppy like it should be.",
        featured: true,
      },
      {
        name: "Shrimp",
        price: "$13",
        note: "Fried or blackened, remoulade.",
        featured: true,
      },
      {
        name: "Grilled Andouille",
        price: "$8",
        note: "Spicy sausage, mayo, peppers, onions.",
      },
      {
        name: "Fried Oyster",
        price: "$16",
        note: "Gulf oysters, Blue Plate mayo, lettuce, tomato, pickle.",
      },
      {
        name: "Fried Chicken Tenders",
        price: "$11.50",
        note: "Hand-battered, lettuce, tomato, mayo.",
      },
      {
        name: "Catfish",
        price: "$12",
        note: "Hand-breaded, lettuce, tomato, pickle, mayo.",
      },
      {
        name: "Muffuletta",
        price: "¼ $10 · ½ $20 · whole $40",
        note: "Ham, mortadella, Genoa salami, provolone, mozzarella, house olive salad. The whole one weighs over five pounds.",
        featured: true,
      },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    intro: "Sub chips for fries or onion rings +$2, or a Bayou Favorite side +$5.",
    items: [
      {
        name: "Deli Combo",
        price: "$13",
        note: "Any deli po'boy or muffuletta + chips + drink.",
      },
      {
        name: "Specialty Combo",
        price: "$17",
        note: "Any specialty po'boy or muffuletta + chips + drink.",
      },
      {
        name: "All-In Combo",
        price: "$18",
        note: "Any deli po'boy or muffuletta + chips + drink + dessert.",
      },
      {
        name: "Bayou Combo",
        price: "$14",
        note: "Fish, chicken tenders, or shrimp + chips + drink.",
      },
    ],
  },
  {
    id: "bayou",
    label: "Bayou Favorites",
    intro: "From-scratch pots. Side or entrée.",
    items: [
      {
        name: "Red Beans & Rice",
        price: "Side $7 · Entrée $14",
        note: "Dried beans, ham hocks, the whole nine yards.",
        featured: true,
      },
      {
        name: "Creole Shrimp Gumbo",
        price: "Side $9 · Entrée $18",
        note: "Dark roux, Gulf shrimp.",
        featured: true,
      },
      {
        name: "Chicken & Sausage Gumbo",
        price: "Side $8 · Entrée $16",
        note: "Gumbo Ya-Ya. A crowd favorite.",
      },
      {
        name: "Crawfish Étouffée",
        price: "Side $9 · Entrée $18",
        note: "Smothered, creamy, a big roux punch and crawfish tails in every bite.",
        featured: true,
      },
    ],
  },
  {
    id: "grill",
    label: "Fried · Grilled · Blackened",
    items: [
      { name: "Chicken Tenders, 5 pc", price: "$7.50" },
      { name: "Shrimp, 6 oz", price: "$8.50" },
      {
        name: "Fried Catfish, 2 pc",
        price: "$8",
        note: "Cornmeal-breaded, house tartar, lemon.",
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      {
        name: "Zapp's Chips",
        price: "$2.75",
        note: "Sea Salt, Mesquite, Crawtater, Voodoo, Voodoo Heat.",
      },
      { name: "Crinkle Fries", price: "$3.75 · double $7.50" },
      { name: "Beer-Battered Onion Rings", price: "$4.75 · double $9.50" },
    ],
  },
  {
    id: "dessert",
    label: "Desserts",
    items: [
      {
        name: "Beignets",
        price: "$4",
        note: "Made in-house, fried to order, powdered sugar.",
        featured: true,
      },
      {
        name: "Bread Pudding",
        price: "$5.50",
        note: "1830s church-cookbook recipe with a bourbon glaze.",
        featured: true,
      },
      {
        name: "Bananas Foster Cake",
        price: "$7",
        note: "A nod to Brennan's, in cake form.",
      },
      {
        name: "Abita Root Beer Float",
        price: "$5.50",
        note: "Cane-sugar Abita root beer, vanilla bean ice cream.",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    intro: "Abita on tap energy. Frozen daiquiris. House cocktails.",
    items: [
      { name: "Abita Beers", price: "$5.50", note: "Amber, Jockamo IPA, Purple Haze, Turbo Dog, Beeracuda, Mardi Gras Bock, Light." },
      { name: "16 oz Frozen Daiquiris", price: "Virgin $7 · liquor $11", note: "Strawberry, Piña Colada, Hurricane." },
      { name: "16 oz Cocktails", price: "$13", note: "Bloody Roux, Hurricane, Mardi Gras Tea, Margarita Creole." },
      { name: "Sidecar Tooter", price: "$3–$4" },
      { name: "Sweet / Unsweet / ½ & ½ Tea", price: "$3.25" },
      { name: "Fruit Tea, Lemonade, Abita Root Beer", price: "$3.75" },
      { name: "Coke products, bottle", price: "$3" },
      { name: "Spring Water", price: "$1.50" },
    ],
  },
];

export const FEATURED = [
  {
    name: "Shrimp Po'boy",
    price: "$13",
    image: "/images/poboy-shrimp.jpg",
    caption: "Fried or blackened. Leidenheimer bread.",
  },
  {
    name: "Creole Shrimp Gumbo",
    price: "from $9",
    image: "/images/gumbo.jpg",
    caption: "Dark roux. No shortcuts.",
  },
  {
    name: "Muffuletta",
    price: "from $10",
    image: "/images/muffuletta.jpg",
    caption: "House olive salad. A New Orleans original.",
  },
  {
    name: "Crawfish Étouffée",
    price: "from $9",
    image: "/images/etouffee.jpg",
    caption: "Smothered. Heavenly.",
  },
  {
    name: "Beignets",
    price: "$4",
    image: "/images/beignets.jpg",
    caption: "Fried to order. Powdered sugar.",
  },
  {
    name: "Fried Green Tomatoes",
    price: "$8",
    image: "/images/fried-green-tomatoes.jpg",
    caption: "Remoulade on the side.",
  },
];

export const HOURS_ROWS = [
  { days: "Monday – Thursday", hours: "11 AM – last seating 7:30 PM" },
  { days: "Friday – Saturday", hours: "11 AM – last seating 8:30 PM" },
  { days: "Sunday", hours: "11 AM – last seating 7:30 PM" },
  { days: "Happy Hour, daily", hours: "3 PM – 6 PM" },
];

export const HAPPY_HOUR_DEALS = [
  { title: "$2 off appetizers", detail: "Fried green tomatoes, boudin, oysters, and the rest of the shareables." },
  { title: "2-for-1 beers", detail: "Abita pints while the window is open." },
  { title: "Liquor drinks", detail: "House cocktails and daiquiris at Happy Hour pricing." },
  { title: "Roux's Rewards", detail: "Earn tokens on Abita — redeem for drinks, beignets, or discounts." },
];

export const BRANDS = [
  "Leidenheimer",
  "Abita",
  "Blue Plate",
  "Luzianne Tea",
  "Tabasco",
  "Crystal",
  "Tony Chachere's",
];
