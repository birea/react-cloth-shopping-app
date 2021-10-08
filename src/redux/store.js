import { createStore } from "redux";

import rootReducer from "./reducers/rootReducer";
import articlesData from "../data/articles";

let store = createStore(rootReducer, {
  articles: articlesData,
});

export default store;
