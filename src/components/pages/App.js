import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom';
import style from '../../css/Main.css';
import ProjectCell from '../pages/ProjectCell';
import ProjectList from '../data/ProjectList';
import IndProjects from '../pages/IndProjects';
import IndDraws from '../pages/IndDraws';
import DrawsCell from '../pages/DrawsCell';
import DrawsList from '../data/DrawsList';
import ScrollToTop from '../utilities/ScrollToTop';
import Header from  '../parts/Header';
import Footer from  '../parts/Footer';
import Info from '../parts/Info';


class App extends Component {

  render() {
  return (

  <Router>
  <ScrollToTop>
    <div className="Containter">
      <Header/>

      <div className="MainWindow">
          <Route exact path="/" component={ProjectCell} />
          {ProjectList.map((route, index) => (
            <Route
              key={index}
              path={route.link}
              render={(routeProps) => <IndProjects {...routeProps} />}
            />
          ))}
        <Footer/>
      </div>

    </div>
    </ScrollToTop>
  </Router>
  );
}
}

export default App;
