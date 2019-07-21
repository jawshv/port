import React, { Component } from 'react';
import ProjectList from '../data/ProjectList';
import { Router, Link, Route, withRouter}  from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import style from '../../css/IndProject.css';

class IndProjects extends Component {

  componentDidMount() {
  const anchor = this.props.location.hash;

  if (anchor) {
    const domElement = document.querySelector(anchor);
    if (domElement) {
      domElement.scrollIntoView();
    }
  }
  }

  render() {

  const { match, location, history } = this.props

    return (
      <div>
      {ProjectList.filter(e => e.link === location.pathname).map((e,id) =>
                   <div className="IndProject">
                       <div className="ProjectHeader">
                         <h3>{e.title}<br/><br/>{e.year}<br/><br/>{e.position}</h3>
                       </div>
                    {(e.Sections) &&
                      e.Sections.map((Sections,id) =>
                        <div className="Section">
                        {(Sections.header) && <h2 className="sectionHeader"> / {Sections.header} </h2>}
                        {(Sections.img) && <div className="imgcontain"> <img className="imgfull" src={Sections.img} /><h3>{Sections.caption}</h3></div>}
                        <h2>
                          {(Sections.words) && <span className="words"> {Sections.words} </span>}
                          {(Sections.title) && <span> {Sections.title}</span>}
                          {(Sections.offsite) && <a className="link" target="_blank" href={Sections.offsite}>{Sections.offsitewords}</a>}
                          {(Sections.words2) && <span> {Sections.words2} </span>}
                          {(Sections.video) && <div style={{padding:'56.25% 0 0 0',position:'relative',}}><iframe src={Sections.video} style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%',}} frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>}
                        </h2>
                        </div>
                      )}
                    </div>
               )}
          <h3 className="footer">
            {ProjectList.map((e,id) =>
              <span><NavLink to={e.link}> {id+1}.{e.title}</NavLink></span>
            )}
          </h3>
      </div>
    );
  }
}

export default withRouter(IndProjects)
