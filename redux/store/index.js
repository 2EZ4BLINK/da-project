import { createStore } from "redux";
import allReducer from "./rootReducer/rootReducer";

const store = createStore(allReducer);

export default store;
