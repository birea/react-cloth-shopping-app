import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  articles: articlesReducer,
});

export default rootReducer;
