const articlesReducer = (state = []) => {
  return state;
};

export default articlesReducer;

// selectors
export function getArticles(state, props) {
  return state.articles;
}

export function getArticle(state, props) {
  return state.articles.find((article) => article.id === props.id);
}
