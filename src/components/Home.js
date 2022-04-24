import React from "react";
import NavigationBar from "../containers/NavigationBar";
import Footer from "./Footer";
import { RegisterPage } from "../containers/RegisterPage";
import { LoginPage } from "../containers/LoginPage";
import { RestaurantPage } from "../containers/Restaurant";
import "../styles/ChapterApp.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Home = () => {
  return (
    <Router>
      <div className="header">
        <NavigationBar />
      </div>
      <Switch>
        <Route path="/" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/restaurant" exact component={RestaurantPage} />
      </Switch>
      <Footer />
    </Router>
  );
};
