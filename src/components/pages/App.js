import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom';
import style from '../../css/Main.css';
import ProjectCell from '../pages/ProjectCell';
import ScrollToTop from '../utilities/ScrollToTop';
import ReactMarkdown from 'react-markdown';
import Header from  '../parts/Header';
import Footer from '../parts/Footer';
import Map2050 from '../data/Map2050.md';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(Map2050).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
  return (

  <Router>
  <ScrollToTop>
    <div className="Containter">
      <Header/>

      <div className="MainWindow">
          <Route exact path="/" component={ProjectCell} />
          
            <Switch>
              <Route path="/2050">
                <ReactMarkdown source={this.state.terms} />
              </Route>
          </Switch>
            
        <Footer/>
      </div>

    </div>
    </ScrollToTop>
  </Router>
  );
}
}

export default App;
