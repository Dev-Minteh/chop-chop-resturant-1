export type Dish = {
  image: string
  name: string
  kitchen: string
  location: string
  price: string
  badge?: 'Vegetarian'
}

export type DeliveryArea = {
  name: string
  time: string
}

export const steps = [
  { image: '/assets/step-1.svg', number: '01', title: 'Pick a kitchen', copy: 'Browse local kitchens and find something you are craving.' },
  { image: '/assets/step-2.svg', number: '02', title: 'Choose your dish', copy: 'Add a favourite to your basket and make it your own.' },
  { image: '/assets/step-3.svg', number: '03', title: 'We bring it', copy: 'Your meal arrives hot, fresh, and ready to enjoy.' },
] as const

export const dishes: Dish[] = [
  { image: '/assets/dish-1.svg', name: 'Benachin', kitchen: 'Awa’s Kitchen', location: 'Sukuta', price: 'D280' },
  { image: '/assets/dish-2.svg', name: 'Domoda', kitchen: 'Mama Sira’s', location: 'Bakau', price: 'D250', badge: 'Vegetarian' },
  { image: '/assets/dish-3.svg', name: 'Chicken Yassa', kitchen: 'The Jollof Spot', location: 'Fajara', price: 'D320' },
  { image: '/assets/dish-4.svg', name: 'Afra Platter', kitchen: 'Grill House', location: 'Serrekunda', price: 'D350' },
  { image: '/assets/dish-5.svg', name: 'Superkanja', kitchen: 'Kaddy’s Kitchen', location: 'Kololi', price: 'D220', badge: 'Vegetarian' },
  { image: '/assets/dish-6.svg', name: 'Tapalapa & Egg', kitchen: 'The Breakfast Club', location: 'Kanifing', price: 'D180' },
]

export const deliveryAreas: DeliveryArea[] = [
  { name: 'Bakau', time: '20–30 min' },
  { name: 'Fajara', time: '20–30 min' },
  { name: 'Kololi', time: '25–35 min' },
  { name: 'Serrekunda', time: '25–35 min' },
  { name: 'Kanifing', time: '30–40 min' },
  { name: 'Sukuta', time: '35–45 min' },
]
