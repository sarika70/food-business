export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: string[];
}

export interface MenuCategory {
  name: string;
  description: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    name: 'Appetizers',
    description: 'Start your meal with our delicious selection of starters',
    items: [
      {
        name: 'Bruschetta Trio',
        description:
          'Three varieties of toasted artisan bread topped with heirloom tomatoes, fresh mozzarella, and basil pesto',
        price: '12.99',
        tags: ['Vegetarian', 'Popular'],
      },
      {
        name: 'Crispy Calamari',
        description: 'Lightly breaded and fried to perfection, served with spicy marinara and lemon aioli',
        price: '14.99',
        tags: ['Seafood'],
      },
      {
        name: 'Seasonal Soup',
        description: 'Chef\'s daily creation using the freshest seasonal ingredients, served with crusty bread',
        price: '8.99',
        tags: ['Chef Special'],
      },
      {
        name: 'Stuffed Mushrooms',
        description: 'Baby bella mushrooms filled with herb cream cheese, garlic, and parmesan, baked until golden',
        price: '11.99',
        tags: ['Vegetarian'],
      },
    ],
  },
  {
    name: 'Main Courses',
    description: 'Hearty and satisfying dishes crafted with care',
    items: [
      {
        name: 'Grilled Salmon',
        description:
          'Wild-caught Atlantic salmon with lemon butter sauce, served with roasted vegetables and herb rice',
        price: '26.99',
        tags: ['Seafood', 'Gluten-Free', 'Popular'],
      },
      {
        name: 'Braised Short Ribs',
        description: 'Slow-cooked beef short ribs in red wine reduction, served with creamy mashed potatoes',
        price: '32.99',
        tags: ['Chef Special'],
      },
      {
        name: 'Chicken Piccata',
        description: 'Pan-seared chicken breast with capers, white wine, and lemon butter, served over angel hair pasta',
        price: '22.99',
        tags: ['Popular'],
      },
      {
        name: 'Vegetable Risotto',
        description: 'Creamy arborio rice with seasonal vegetables, parmesan, and truffle oil',
        price: '19.99',
        tags: ['Vegetarian', 'Gluten-Free'],
      },
      {
        name: 'Ribeye Steak',
        description: '12oz prime ribeye grilled to your liking, served with garlic butter and choice of two sides',
        price: '38.99',
        tags: ['Premium'],
      },
    ],
  },
  {
    name: 'Desserts',
    description: 'Sweet endings to complete your dining experience',
    items: [
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a molten center, served with vanilla ice cream and berry compote',
        price: '9.99',
        tags: ['Popular'],
      },
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with espresso-soaked ladyfingers, mascarpone cream, and cocoa',
        price: '8.99',
        tags: ['Chef Special'],
      },
      {
        name: 'Seasonal Fruit Tart',
        description: 'Buttery pastry crust filled with vanilla custard and topped with fresh seasonal fruits',
        price: '8.99',
        tags: ['Vegetarian'],
      },
      {
        name: 'Crème Brûlée',
        description: 'Silky vanilla custard with a caramelized sugar crust, served with fresh berries',
        price: '9.99',
        tags: ['Gluten-Free'],
      },
    ],
  },
];
