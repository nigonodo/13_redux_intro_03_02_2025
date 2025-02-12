import { SandwichAction } from "./sandwichAction"

export interface InitialState {
    ingredients: ('bread' | 'cheese' | 'salami' | 'tomato')[]
}

const initialState: InitialState = {
    ingredients: []
}

export default function sandwichReducer(state: InitialState = initialState, action: SandwichAction) {
    switch (action.type) {
        case 'ingredients/add':
            return { ...state, ingredients: [...state.ingredients, action.payload] };
        case "ingredients/delete":
            return { ...state, ingredients: [] };
        default:
            return state;
    }
}
