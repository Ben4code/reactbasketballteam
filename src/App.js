import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';

import './app.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
            <Route exact path="/" component={Home}/>
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;
