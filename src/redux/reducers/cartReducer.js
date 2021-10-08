import { CART_ADD, CART_REMOVE } from "../actions/cartTypes";
import { getArticle } from "../reducers/articlesReducer";

const initialState = {
  articles: [], // array of articles ids
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD:
      return {
        ...state,
        articles: [...state.articles, action.payload.id],
      };
    case CART_REMOVE:
      return {
        ...state,
        articles: state.articles.filter((id) => id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;

// selectors
export function isInCart(state, props) {
  return state.cart.articles.indexOf(props.id) !== -1;
}

export function getArticles(state, props) {
  return state.cart.articles.map((id) => getArticle(state, { id }));
}

export function getTotal(state, props) {
  return state.cart.articles.reduce((acc, id) => {
    const article = getArticle(state, { id });
    return acc + article.price;
  }, 0);
}
