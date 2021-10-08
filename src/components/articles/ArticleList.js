import React from "react";
import Article from "./Article";
import { connect } from "react-redux";
import { getArticles } from "../../redux/reducers/articlesReducer";

const ArticleList = ({ articles }) => {
  return (
    <div className="container">
      <h2 className="page-title center grey-text text-darken-2">Our Dresses</h2>

      <div className="article-list">
        {articles.map((article) => (
          <div className="article" key={article.id}>
            <Article {...article} key={article.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    articles: getArticles(state, props),
  };
};

export default connect(mapStateToProps)(ArticleList);
