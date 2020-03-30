import React from 'react';
import './css/App.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/ContactPage";
import GameDetail from "./components/game/GameDetail";
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
