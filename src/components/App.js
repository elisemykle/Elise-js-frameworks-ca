import React from 'react';
import '../css/App.css';
import Heading from "./Heading";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import HomePage from "./HomePage";
import Game from "./Game";
import ContactPage from "./ContactPage";
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
                  <Navbar.Brand>REACT-CA</Navbar.Brand>
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <NavLink to="/" exact className="nav-link">HOME</NavLink>
                      <NavLink to="/game" className="nav-link">GAME</NavLink>
                      <NavLink to="/contactpage" className="nav-link">CONTACT</NavLink>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Container>
              <Switch>
                  <Route path="/" exact component={HomePage}>
                  </Route>
                  <Route path="/game/:id" component={Game}/>
                  <Route path="/contactpage" component={ContactPage}/>
              </Switch>
          </Container>
      </Router>
  );
}
