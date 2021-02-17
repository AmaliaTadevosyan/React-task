import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Pages/HomePage/HomePage";
import News from "./components/Pages/News/News";
import Login from "./components/Pages/Login/Login";
import Profile from "./components/Pages/Profile/Profile";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/news' component={News} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
