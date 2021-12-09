import React, { useEffect, prevState, useRef, useCallback, useState, Component } from 'react';
import ReactDOM from 'react-dom';
import List from '../content/List';
import { NavLink } from 'react-router-dom';
import Clock from '../utilities/clock';
import { ReactSVG } from 'react-svg'
import { ReactComponent as Spin } from '../utilities/spinner.svg';


const ProjectCell = ({ innerRef }) => {

  const [spin, setSpin] = useState(false)
  const [project, setproject] = useState(List[0]);
  const [counter, setCounter] = useState(1)

  const New = useCallback(() => {
    setCounter(counter !== List.length - 1 ? counter + 1 : 0)
    setproject(List[counter])

    setSpin(true)
    setTimeout(function () { //Start the timer
      setSpin(false)
    }.bind(this), 300)

  });


  return (

    <div ref={innerRef} class="Projects">

      {/* <div class="liner"></div> */}

      <h1><a target="_blank" href="https://github.com/jawshv/port">josh vredevoogd</a> is a designer living in Los Angeles. currently interested in rail schematics, orthophotos, and open data.</h1>

      <h1>by day designing for <a target="_blank" href="https://hivelighting.com/">Hive Lighting</a>,  by night advocating for a healthier city with <a target="_blank" href="https://streetsforall.org/">Streets for All</a></h1>

      <div class="ProjectMill">

        <img class="ProjectImg" src={project.image} />
        <div>
          <h3 class="year">in {project.date}</h3>

          <h1>
            <a key={counter} target="_blank" rel="noopener noreferrer" href={project.link} style={{ color: project.color }}> {project.copy}</a>
          </h1>
          <div class={"churn"} onClick={New} >
            <Spin class={spin ? "spin rotate" : "spin"}
            />
            <h3>something else please</h3>
          </div>
        </div>
      </div>

      <h1 class="into">around via <a target="_blank" href="mailto:joshkv@gmail.com">email</a>, <a target="_blank" href="https://twitter.com/Jawshv">twitter</a>, <a target="_blank" href="https://www.instagram.com/jawshkv/">insta</a>, <a target="_blank" href="https://www.are.na/josh-vredevoogd">are.na</a>, or <a target="_blank" href="https://github.com/jawshv/port">github</a></h1>
    </div>
  );
}

export default ProjectCell;
