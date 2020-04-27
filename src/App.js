import React, { Component } from 'react';
import './components/App.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import 'semantic-ui-css/semantic.min.css'
import NavBar from './NavBar.js'
import Home from './components/Home.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





export class App extends Component {
  constructor() {
    super()
    this.state = { loading: true };
    
  }

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    this.setState({ loading: false });
  }

  render() {

    return (
      <Router>
        <NavBar />
        <Switch>
          
          
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>
    );
  }
}



export default App;
