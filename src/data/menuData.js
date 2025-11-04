const menuData = [
  // ☕ Hot Beverages
  { id: 1, name: "Filter Coffee", desc: "Freshly brewed South Indian filter coffee", price: 40, category: "Hot Beverages" },

  // 🍟 Snacks
  { id: 2, name: "French Fries", desc: "Crispy golden fries", price: 70, category: "Snacks" },
  { id: 3, name: "KFC Chicken Popcorn (16 nos)", desc: "Crispy bite-sized chicken popcorn", price: 160, category: "Snacks" },
  { id: 4, name: "KFC Chicken Wings (8 nos)", desc: "Spicy and crunchy chicken wings", price: 160, category: "Snacks" },
  { id: 5, name: "KFC Chicken Lollipop (4 nos)", desc: "Delicious deep-fried chicken lollipops", price: 160, category: "Snacks" },
  { id: 6, name: "KFC Strips Boneless (6 nos)", desc: "Tender boneless chicken strips", price: 160, category: "Snacks" },

  // 🧋 Cold Coffee & Shakes
  { id: 7, name: "Cold Coffee", desc: "Iced coffee with creamy froth", price: 100, category: "Cold Beverages & Shakes" },
  { id: 8, name: "Chocolate Cold Coffee", desc: "Cold coffee blended with chocolate", price: 120, category: "Cold Beverages & Shakes" },
  { id: 9, name: "Strawberry Shake", desc: "Sweet strawberry flavored shake", price: 120, category: "Cold Beverages & Shakes" },
  { id: 10, name: "Mango Shake", desc: "Refreshing mango milkshake", price: 120, category: "Cold Beverages & Shakes" },
  { id: 11, name: "Black Currant Shake", desc: "Fruity black currant flavored shake", price: 120, category: "Cold Beverages & Shakes" },
  { id: 12, name: "Vanilla Shake", desc: "Classic vanilla milkshake", price: 120, category: "Cold Beverages & Shakes" },
  { id: 13, name: "Chocolate Shake", desc: "Rich and creamy chocolate shake", price: 120, category: "Cold Beverages & Shakes" },
  { id: 14, name: "Kit Kat Shake", desc: "Kit Kat blended milkshake", price: 130, category: "Cold Beverages & Shakes" },
  { id: 15, name: "Brownie Shake", desc: "Brownie blended thick shake", price: 130, category: "Cold Beverages & Shakes" },

  // 🥪 Sandwiches
  { id: 16, name: "Corn Sandwich", desc: "Grilled sandwich stuffed with corn", price: 80, category: "Sandwiches" },
  { id: 17, name: "Paneer Sandwich", desc: "Grilled paneer sandwich", price: 100, category: "Sandwiches" },
  { id: 18, name: "Chicken Sandwich", desc: "Grilled chicken sandwich", price: 100, category: "Sandwiches" },
  { id: 19, name: "Tandoori Chicken Sandwich", desc: "Tandoori-spiced chicken sandwich", price: 120, category: "Sandwiches" },

  // 🍔 Burgers
  { id: 20, name: "Veg Burger", desc: "Veg patty burger with sauces", price: 80, category: "Burgers" },
  { id: 21, name: "Cheese Burger", desc: "Cheesy delight with soft bun", price: 100, category: "Burgers" },
  { id: 22, name: "Chicken Burger", desc: "Juicy chicken burger", price: 100, category: "Burgers" },
  { id: 23, name: "Chicken Cheese Burger", desc: "Loaded with cheese and chicken patty", price: 120, category: "Burgers" },

  // 🍹 Mojitos
  { id: 24, name: "Blue Mojito", desc: "Refreshing blue mint cooler", price: 80, category: "Mojitos" },
  { id: 25, name: "Virgin Mojito", desc: "Classic lime and mint mocktail", price: 80, category: "Mojitos" },
  { id: 26, name: "Watermelon Mojito", desc: "Cool watermelon mocktail", price: 80, category: "Mojitos" },
  { id: 27, name: "Strawberry Mojito", desc: "Sweet strawberry mint drink", price: 80, category: "Mojitos" },
  { id: 28, name: "Double Berry Mojito", desc: "Mixed berry refreshing mojito", price: 80, category: "Mojitos" },
  { id: 29, name: "Blueberry Mojito", desc: "Blueberry-infused mint drink", price: 80, category: "Mojitos" },

  // 🍫 Desserts
  { id: 30, name: "Brownie with Chocolate Syrup", desc: "Warm brownie with chocolate sauce", price: 90, category: "Desserts" },
  { id: 31, name: "Brownie with Ice Cream", desc: "Hot brownie topped with vanilla ice cream", price: 120, category: "Desserts" },

  // 🌯 Rolls
  { id: 32, name: "Corn Roll", desc: "Soft roll filled with spiced corn", price: 80, category: "Rolls" },
  { id: 33, name: "Paneer Tikka Roll", desc: "Paneer tikka wrapped in paratha", price: 100, category: "Rolls" },
  { id: 34, name: "Chicken Tikka Roll", desc: "Spicy chicken tikka roll", price: 100, category: "Rolls" },
  { id: 35, name: "Tandoori Chicken Roll", desc: "Smoky tandoori chicken wrapped roll", price: 100, category: "Rolls" },

  // 🍕 Veg Pizza
  { id: 36, name: "Corn Pizza", desc: "Cheesy pizza topped with corn", price: 160, category: "Veg Pizza" },
  { id: 37, name: "Capsicum and Onion Pizza", desc: "Topped with onion & capsicum", price: 160, category: "Veg Pizza" },
  { id: 38, name: "Paneer Tikka Pizza", desc: "Spicy paneer tikka pizza", price: 180, category: "Veg Pizza" },
  { id: 39, name: "Paneer and Corn Pizza", desc: "Cheesy pizza with paneer & corn", price: 180, category: "Veg Pizza" },
  { id: 40, name: "Mushroom Pizza", desc: "Loaded with mushrooms and cheese", price: 180, category: "Veg Pizza" },
  { id: 41, name: "Mushroom and Paneer Pizza", desc: "Paneer and mushroom topping", price: 180, category: "Veg Pizza" },
  { id: 42, name: "Veg Paradise", desc: "Loaded veggie delight pizza", price: 200, category: "Veg Pizza" },

  // 🍗 Non Veg Pizza
  { id: 43, name: "Chicken Tikka Pizza", desc: "Spicy chicken tikka topping", price: 200, category: "Non Veg Pizza" },
  { id: 44, name: "Tandoori Chicken Pizza", desc: "Tandoori-style spicy chicken", price: 200, category: "Non Veg Pizza" },
  { id: 45, name: "Chicken Golden Delight", desc: "Golden cheese and chicken topping", price: 220, category: "Non Veg Pizza" },
  { id: 46, name: "Chicken Supreme", desc: "Loaded with extra chicken & cheese", price: 230, category: "Non Veg Pizza" },
];

export default menuData;
