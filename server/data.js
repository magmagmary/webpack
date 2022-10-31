const { sub } = require('date-fns')
const cats = [
  {
    id: 1,
    name: "Sydney",
    phone: "111-111-1111",
    email: "jamal@hotmail.com",
    image: {
      url: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      alt: "beautiful cat",
    },
    favoured: false,
    color: "grey",
    gender: "female",
  },
  {
    id: 2,
    name: "Ethan",
    phone: "222-222-2222",
    email: "ethan@hotmail.com",
    image: {
      url: "https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      alt: "beautiful cat",
    },
    favoured: false,
    color: "grey",
    gender: "male",
  },
  {
    id: 3,
    name: "Lily",
    phone: "333-333-3333",
    email: "laith@hotmail.com",
    image: {
      url: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      alt: "beautiful cat",
    },
    favoured: false,
    color: "grey",
    gender: "female",
  },
  {
    id: 4,
    name: "Felix",
    phone: "444-444-4444",
    email: "gather@hotmail.com",
    image: {
      url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      alt: "beautiful cat",
    },
    favoured: false,
    color: "grey",
    gender: "male",
  },
  {
    id: 5,
    name: "Holly",
    phone: "555-555-5555",
    email: "laith@hotmail.com",
    image: {
      url: "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      alt: "beautiful cat",
    },
    favoured: false,
    color: "grey",
    gender: "female",
  },
];

const posts = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    userId: '',
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza.',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    userId: '',
  },
];

const users = [
  { id: '0', name: 'Dude Lebowski' },
  { id: '1', name: 'Neil Young' },
  { id: '2', name: 'Dave Gray' },
];

const products = [
  {
    id: '1',
    name: 'Springs Robot',
    detail: 'Super Springs Robot',
    price: 70,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot1.png?raw=true',
  },
  {
    id: '2',
    name: 'Sergeant Robot',
    detail: 'Super Sergeant Robot',
    price: 129,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot2.png?raw=true',
  },
  {
    id: '3',
    name: 'River Robot',
    detail: 'Super River Robot',
    price: 91,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot3.png?raw=true',
  },
  {
    id: '4',
    name: 'Rex Robot',
    detail: 'Super Rex Robot',
    price: 47,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot4.png?raw=true',
  },
  {
    id: '5',
    name: 'Portman Robot',
    detail: 'Super Portman Robot',
    price: 95,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot5.png?raw=true',
  },
  {
    id: '6',
    name: 'Levi Robot',
    detail: 'Super Levi Robot',
    price: 89,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot6.png?raw=true',
  },
  {
    id: '7',
    name: 'Fred Robot',
    detail: 'Super Fred Robot',
    price: 45,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot7.png?raw=true',
  },
  {
    id: '8',
    name: 'Elton Robot',
    detail: 'Super Elton Robot',
    price: 12,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot8.png?raw=true',
  },
  {
    id: '9',
    name: 'Eileen Robot',
    detail: 'Super Eileen Robot',
    price: 39,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot9.png?raw=true',
  },
  {
    id: '10',
    name: 'Dolores Robot',
    detail: 'Super Dolores Robot',
    price: 102,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot10.png?raw=true',
  },
  {
    id: '11',
    name: 'Dolly Robot',
    detail: 'Super Dolly Robot',
    price: 82,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot11.png?raw=true',
  },
  {
    id: '12',
    name: 'Bubbles Robot',
    detail: 'Super Bubbles Robot',
    price: 55,
    imageUrl:
      'https://github.com/ebenezerdon/shopping-cart-images/blob/main/robot12.png?raw=true',
  },
];


module.exports = {
  cats,
  posts,
  users,
  products
};
