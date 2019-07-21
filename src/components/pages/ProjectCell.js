import React, { Component } from 'react';
import ProjectList from '../data/ProjectList';
import style from '../../css/ProjectCell.css';
import { NavLink } from 'react-router-dom';
import Clock from '../utilities/clock'


class ProjectCell extends Component {

  render() {


        return (
          <div className="Projects">
          <div className="plant">

              <h3 className="checkit"><Clock/> <br/>Check out a project -></h3>
          </div>
          <h2>
          {ProjectList.map((e,id) =>
            <span className="ProjectBasket">
              <div className="imgwindow">
                  <img className="ProjectImg" src={e.image}/>
              </div>
              <span className="ProjectCell">
                      <NavLink className="ProjectBody" to={e.link}>
                              <span className="year">{e.year}</span>
                              <span className="ProjectTitle">{e.title}</span> <span className="ProjectSub">{e.tag} </span>
                      </NavLink>
              </span>
            </span>)}
          </h2>
          </div>
        );
    }
}

export default ProjectCell;
