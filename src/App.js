import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom'
import Form from "./Form";
import Result from "./Result";
import { Navbar, Nav, NavItem } from "react-bootstrap"

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };



  render() {
    return (
      <div className="App">
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>

                <a href="http://www.nbcuniversal.com/" color="#9370db">NBCUniversal</a>

              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="http://www.nbcuniversal.com/who-we-are">
                  WHO WE ARE
      </NavItem>
                <NavItem eventKey={2} href="http://www.nbcuniversal.com/our-history">
                  OUR HISTORY
      </NavItem>
                <NavItem eventKey={2} href="http://www.nbcuniversal.com/newsroom">
                  NEWSROOM
      </NavItem>
                <NavItem eventKey={2} href="http://www.nbcuniversal.com/values">
                  VALUES
      </NavItem>
                <NavItem eventKey={2} href="http://www.nbcuniversal.com/careers">
                  CAREERS
      </NavItem>
                <NavItem eventKey={2} href="http://www.nbcuniversal.com/">
                  BUSINESSES
      </NavItem>


              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="https://twitter.com/NBCUniversal">
                  Twitter
      </NavItem>
                <NavItem eventKey={2} href="https://www.facebook.com/nbcuniversal">
                  Facebook
      </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <h1>Cable, Internet, and Phone Package Recommendation Survey</h1>
        <br />
        <br />
        <Switch>
          <Route
            exact path="/"
            render={(routeProps) => (
              <Form {...routeProps} onChange={fields => this.onChange(fields)} fields={this.state.fields} />
            )}
          />
          <Route path="/result"
            render={(routeProps) => (
              <Result {...routeProps} fields={this.state.fields} />
            )}
          />
        </Switch>
        <br />
        <br />
        <br />
        {/* <p>{JSON.stringify(this.state.fields, null, 2)}</p> */}
      </div>
    );
  }
}

export default App;