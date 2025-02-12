export type SandwichAction =
| { type: 'ingredients/add', payload: 'bread' | 'cheese' | 'tomato' | 'salami' }
| { type: 'ingredients/delete' }
