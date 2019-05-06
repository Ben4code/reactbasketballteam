import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Teams from './components/Teams';
import Team from './components/Team';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/teams" component={Teams}/>
            <Route exact path="/team/:id" component={Team}/>
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;
