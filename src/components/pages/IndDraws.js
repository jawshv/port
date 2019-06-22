import React, { Component } from 'react';
import DrawsList from '../data/DrawsList';
import style from '../../css/ProjectCell.css';
import { Router, Link, Route, withRouter}  from 'react-router-dom';



class IndDraws extends Component {

  render() {
    const { match, location, history } = this.props

    return (
      <div>
      {DrawsList.filter(e => e.link === location.pathname) .map((x,id) =>
                   <div className="Section">
                       <div className="ProjectText">
                         <h3>{id+1}</h3>
                         <h3>{x.name}</h3>
                        </div>
                         <img className="imgfull" src={x.img1}/>
                       </div>
               )}
      </div>
    );
  }
}

export default withRouter(IndDraws)
