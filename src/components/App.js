import React from 'react';
import '../css/App.css';
import Heading from "./Heading";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import HomePage from "./HomePage";
import GameDetail from "./GameDetail";
import ContactPage from "./ContactPage";
import GameItem from "./GameItem";
import SearchGames from "./SearchGames";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

export default function App() {
  return (
      <Router className="App">
          <Navbar bg="dark" variant="dark" expand="lg">
              <NavLink to="/" exact>
                  <Navbar.Brand>RAWG</Navbar.Brand>
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <NavLink to="/" exact className="nav-link">HOME</NavLink>
                      <NavLink to="/contactpage" className="nav-link">CONTACT</NavLink>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Container>
              <Switch>
                  <Route path="/" exact component={HomePage}>
                  </Route>
                  <Route path="/gameDetail/:id" component={GameDetail}/>
                  <Route path="/contactpage" component={ContactPage}/>
              </Switch>
          </Container>
      </Router>
  );
}
