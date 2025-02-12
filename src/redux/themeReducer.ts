import { ThemeAction } from "./themeAction"

export interface InitialState {
    value: 'dark' | 'light'
}

const initialState: InitialState = {
    value: "light"
}

export default function themeReducer(state: InitialState = initialState, action: ThemeAction) {
    switch (action.type) {
        case 'theme/change':
            return { ...state, value: action.payload };
       
        default:
            return state;
    }
}


