import { legacy_createStore as createStore } from "redux";
import { ThemeReducer } from "./reducer";

export const store = createStore(ThemeReducer);