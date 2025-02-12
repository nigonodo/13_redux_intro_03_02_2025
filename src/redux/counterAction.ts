export type ActionCounter = 
| { type: 'change', payload: 10 | -10 | 1 | -1 };



// | { type: 'counter/minus10' }
// | { type: 'counter/minus' }
// | { type: 'counter/plus' }
// | { type: 'counter/plus10' }

// { type: string, payload?: any }

