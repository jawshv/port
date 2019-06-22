import React, { Component } from 'react';
import ProjectList from '../data/ProjectList';
import style from '../../css/ProjectCell.css';
import { NavLink } from 'react-router-dom';

class ProjectCell extends Component {

  render() {


        return (
          <h2 className="Projects">
          {ProjectList.map((e,id) =>
            <span className="ProjectBasket">
              <div className="imgwindow">
                  <img className="ProjectImg" src={e.image}/>
              </div>
              <span className="ProjectCell">
                      <NavLink className="ProjectBody" to={e.link}>
                              <span className="year">{e.year}</span>
                              <span className="ProjectTitle">{e.title}</span> {e.caption}
                      </NavLink>
              </span>
            </span>)}
          </h2>
        );
    }
}

export default ProjectCell;
