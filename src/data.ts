export type Dish = {
  image: string
  name: string
  kitchen: string
  location: string
  price: string
  badge?: 'Popular' | 'Spicy' | 'Vegetarian' | 'Breakfast'
}

export type DeliveryArea = {
  name: string
  time: string
}

export const steps = [
  { image: '/assets/step-1.svg', number: 'Step 1', title: 'Pick a kitchen', copy: 'Forty kitchens from Westfield to Brusubi, with live opening hours and honest delivery times.' },
  { image: '/assets/step-2.svg', number: 'Step 2', title: 'Build your order', copy: 'Extra pepper, no onions, two spoons. Every kitchen readies your note before it starts cooking.' },
  { image: '/assets/step-3.svg', number: 'Step 3', title: 'Track your rider', copy: 'See the scooter on the map from the moment it leaves. Pay cash at the gate or by mobile money in the app.' },
] as const

export const dishes: Dish[] = [
  { image: '/assets/dish-1.svg', name: 'Benachin', kitchen: "Mama Binta's Kitchen", location: 'Westfield', price: 'D250', badge: 'Popular' },
  { image: '/assets/dish-2.svg', name: 'Domoda', kitchen: 'Kairaba Corner', location: 'Kololi', price: 'D200', badge: 'Popular' },
  { image: '/assets/dish-3.svg', name: 'Chicken yassa', kitchen: 'Senegambia Grill', location: 'Kololi', price: 'D350', badge: 'Spicy' },
  { image: '/assets/dish-4.svg', name: 'Afra', kitchen: 'Afra Bantaba', location: 'Bakau', price: 'D400', badge: 'Spicy' },
  { image: '/assets/dish-5.svg', name: 'Superkanja', kitchen: "Aunty Haddy's", location: 'Serrekunda', price: 'D180', badge: 'Vegetarian' },
  { image: '/assets/dish-6.svg', name: 'Tapalapa and egg', kitchen: 'Morning Bread', location: 'Bakau', price: 'D75', badge: 'Breakfast' },
]

export const deliveryAreas: DeliveryArea[] = [
  { name: 'Serrekunda', time: '25 min' },
  { name: 'Bakau', time: '30 min' },
  { name: 'Kololi', time: '30 min' },
  { name: 'Brusubi', time: '40 min' },
  { name: 'Banjul', time: '45 min' },
  { name: 'Lamin', time: '45 min' },
]
