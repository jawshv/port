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
                        {(x.sections) &&
                          x.sections.map((sections,id) =>
                            <div className="drawbox">
                            {(sections.img) && <a target="_blank" href={sections.img} ><img className="imgfull" src={sections.img} /></a>}
                            </div>
                       )}
                      </div>
               )}
             <h3 className="footer">
               {DrawsList.map((e,id) =>
                <span><NavLink to={e.link}> {id+1}.{e.name}</NavLink></span>
               )}
             </h3>
      </div>
    );

  }
}

export default withRouter(IndDraws)
