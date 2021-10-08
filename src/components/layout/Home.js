import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content center container">
        <h1 className="home-title red-text">Welcome to the dress shop !</h1>
        <button className="waves-effect waves-light btn">
          <Link className="white-text" to="/articles">
            Shop dresses
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
