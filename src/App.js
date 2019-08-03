import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./components/landing";
import LoginPage from "./components/login";
import ProfilePage from "./components/profile";
import SearchPage from "./components/search";
import ResultsPage from "./components/results";
import DashboardPage from "./components/dashboard";
import FavoritesPage from "./components/favorites";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="http://google.com" target="_blank" rel="noopener noreferrer">
              <img src={logo} width="30" height="30" alt="Home" />
            </a>
            <Link to="/" className="navbar-brand">TBH</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/search" className="nav-link">Search</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/results" className="nav-link">Results</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/favorites" className="nav-link">Favorites</Link>
                </li>
              </ul>
            </div>
          </nav>

          <h2>TBH App</h2>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/favorites" component={FavoritesPage} />
        </div>
      </Router>
    )
  }
}

export default App;
