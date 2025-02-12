import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counterReducer";
import themeReducer from "./themeReducer";
import sandwichReducer from "./sandwichReducer";

const store = legacy_createStore(combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    sandwich: sandwichReducer
}))

export default store;

export type RootState = ReturnType<typeof store.getState>;
