import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Home from "./components/Home";
import Meals from "./components/Meals";
import MealWithId from "./components/MealWithId";
import AddingMeal from "./components/AddingMeal";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/meals">
          <Meals />
        </Route>
        <Route exact path="/meals/:id">
          <MealWithId></MealWithId>
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
        <Route exact path="/addingMeals">
          <AddingMeal></AddingMeal>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
