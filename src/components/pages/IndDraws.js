import React, { Component } from 'react';
import DrawsList from '../data/DrawsList';
import style from '../../css/ProjectCell.css';
import { NavLink } from 'react-router-dom';
import { Router, Link, Route, withRouter}  from 'react-router-dom';



class IndDraws extends Component {

  render() {
    const { match, location, history } = this.props

    return (
      <div className="indydraw">
      {DrawsList.filter(e => e.link === location.pathname) .map((x) =>
                   <div className="Section">
                       <div className="ProjectText">
                         <h3>{x.name}</h3>
                        </div>
                         <img src={x.img1}/>
                         <img src={x.img2}/>
                         <img src={x.img3}/>
                         <img src={x.img4}/>
                         <img src={x.img5}/>
                         <img src={x.img6}/>
                         <img src={x.img7}/>
                         <img src={x.img8}/>
                       </div>
               )}
             <h3 className="footer">
               {DrawsList.map((e,id) =>
                 <span><NavLink to={e.link}>{e.name}</NavLink></span>
               )}
             </h3>
      </div>
    );

  }
}

export default withRouter(IndDraws)
