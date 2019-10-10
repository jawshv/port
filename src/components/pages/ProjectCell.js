import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from '../data/List';
import style from '../../css/ProjectCell.css';
import { NavLink } from 'react-router-dom';
import Clock from '../utilities/clock'


class ProjectCell extends Component {


  render() {


        return (
          <div className="Projects">

          <h3 className="into"><a target="_blank" href="http://textfiles.com/underconstruction/">⚠️ under construction ⚠️</a></h3>

          <h1 className="into">hi, my name is <a>josh vredevoogd</a> welcome to my <a>wwwww</a></h1>


          <div className="ProjectMill">
          {List.map((e,id) =>
            <>
            {(e.head) &&

              <div className="ProjectHead">
              <h1>{e.emoji}</h1>
              <h1>{e.head}</h1>
              </div>}

            {(e.title) &&

            <div className={(e.full) ? ("ProjectBasket fullbasket") : ("ProjectBasket")}>


              <div className="ProjectCell">
              <div className="Projectcopy">
              <span className="Projecttitle">
              {(e.link) ? (<h2 className="titlelink"><NavLink to={e.link}> {e.title}</NavLink></h2>) : (e.outlink) ? (<h2 className="titlelink"><a className="out" target="_blank" href={e.outlink}>{e.title}</a></h2>) : (<h2 className="titlelink">{e.title}</h2>)
              }

              {(e.soon) && <h4 className="ProjectSoon">COMING SOON</h4>}{(e.process) && <h4 className="ProjectProcess">PROCESS</h4>}</span>
                <h3 className="Projectheader"><span>{e.role}</span></h3>
              </div>
                <div className="imgwindow">
                {(e.link) ? (<NavLink to={e.link}>
                <img className="ProjectImg" src={e.image}/>
                </NavLink>) : (e.outlink) ? (<a target="_blank" href={e.outlink}><img className="ProjectImg out" src={e.image}/></a>) :
                (<img className="ProjectImg" src={e.image}/>)}
                </div>
              </div>
            </div>}</>)}



            <h1 id="#j" className="ProjectHead">I'm always open to new projects. Find me via <a target="_blank" href="mailto:joshkv@gmail.com">email</a>, <a target="_blank" href="https://twitter.com/Jawshv">twitter</a>, <a target="_blank" href="https://www.instagram.com/jawshkv/">insta</a>, <a target="_blank" href="https://www.are.na/josh-vredevoogd">are.na</a></h1>

            <h1 id="#w" className="ProjectHead">This site is built using React. Feel free to steal anything you like: <a target="_blank" href="https://github.com/jawshv/port">github</a></h1>

          </div>
          </div>
        );
    }
}

export default ProjectCell;
