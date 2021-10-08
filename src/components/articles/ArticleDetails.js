import React from "react";
import { connect } from "react-redux";

const ArticleDetails = ({ article }) => {
  return (
    <div className="details container">
      <h2 className="page-title center grey-text text-darken-2">
        {article.title}
      </h2>
      <div className="article-images">
        <div className="article-img">
          <img src={article.imgFront} alt={article.title} />
        </div>
        <div className="article-img">
          <img src={article.imgBack} alt={article.title} />
        </div>
      </div>

      <div className="article-content grey-text text-darken-2">
        <h5 className="red-text">
          <b>Item Information</b>
        </h5>
        <ul>
          <li>
            <b className="teal-text">Description: </b>
            {article.description}
          </li>

          <li>
            <b className="teal-text">Color: </b> {article.color}
          </li>
          <li>
            <b className="teal-text">Lenght: </b>
            {article.length}
          </li>
          <li>
            <b className="teal-text">Materials: </b>
            {article.materials}
          </li>
          <li>
            <b className="teal-text">Maintaing: </b>
            {article.maintaining}
          </li>
          <li>
            <b className="teal-text">Price: </b>
            {article.price}$
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const articles = state.articles;
  const article = articles ? articles[id] : null;
  return {
    article: article,
  };
};

export default connect(mapStateToProps, null)(ArticleDetails);
