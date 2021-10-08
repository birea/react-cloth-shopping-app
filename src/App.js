import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import ArticleList from "./components/articles/ArticleList";
import ArticleDetails from "./components/articles/ArticleDetails";
import PageNotFound from "./components/PageNotFound";
import Cart from "./components/cart/Cart";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/articles" component={ArticleList} />
          <Route path="/article/:id" component={ArticleDetails} />
          <Route path="/cart" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
      </>
    );
  }
}
export default App;
