import React, { useLayoutEffect, ref, useRef, useState, Component, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";
import Footer from '../parts/Footer.js'
import Cases from './Cases.js';
import ProjectCell from '../pages/ProjectCell';
import styles from '../../css/Main.css'
import ReactMarkdown from 'react-markdown';
import Header from '../parts/Header';
import Map2050 from '../content/Map2050.md';
import Prints from '../content/Prints.md';
import Aerial from '../content/Aerial.md';
import Baby from '../content/baby.md';
import Hive_app from '../content/Hive-app.md';
import Hive_marketing from '../content/Hive-marketing.md';
import dfn from '../content/dfn.md';
import parking from '../content/parking.md';
import La25x25 from '../content/La25x25.md';
import ScrollToTop from '../utilities/ScrollToTop';
import { set } from 'react-ga';


const App = () => {

  const [aerial, setaerial] = useState(0)
  const [freeway, setFreeway] = useState(0)
  const [baby, setbaby] = useState(0)
  const [hive, sethive] = useState(0)
  const [La25, setLa25] = useState(0)
  const [Printers, setPrints] = useState(0)

  useEffect(() => {
    fetch(Aerial).then((response) => response.text()).then((text) => {
      setaerial(text)
    })
    fetch(dfn).then((response) => response.text()).then((text) => {
     setFreeway(text)
    })
    fetch(Baby).then((response) => response.text()).then((text) => {
      setbaby(text)
    })
    fetch(Hive_marketing).then((response) => response.text()).then((text) => {
      sethive(text)
    })
    fetch(La25x25).then((response) => response.text()).then((text) => {
      setLa25(text)
    })
    fetch(Prints).then((response) => response.text()).then((text) => {
      setPrints(text)
    })

  },[]);

    const renderers = {
      image: ({ alt, src }) => {
        if (alt === "half") {
          return(
             <img class="half" src={src}/>
           )
        } else { return( <img class="full" src={src}/> )}
      },
      h2: ({ title, level }) => {
          return(
            console.log(title),
             <h2 id={title} class="half"> {level} </h2>
           )
      },
    
    };

    const inputRef = useRef(0)
    const [height, setHeight] = useState()
    
    useEffect (() => {
      setHeight(inputRef.current.offsetHeight);
    },[]);

    window.addEventListener("resize", function() {
      setHeight(inputRef.current.offsetHeight);
      });


    

    return (

      <Router>
        <div className="Containter">
          <Header />
          <div class="MainWindow">
            <ProjectCell  innerRef={inputRef} />
            <div className="dive">
              <Cases />
              <div class="liner"></div>
              <ScrollToTop objectheight={height}/>
              <Switch>
             
                <div className="content">

                  <ReactMarkdown
                    renderers={renderers}
                    // source={this.state.terms}
                  />

                  <Route path="/25">
                    <ReactMarkdown renderers={renderers} escapeHtml={false} source={La25 ? La25 : null} />
                  </Route>
                  <Route path="/prints">
                    <ReactMarkdown renderers={renderers} escapeHtml={false} source={Printers ? Printers : null} />
                  </Route>
                  <Route path="/aerial">
                    <ReactMarkdown renderers={renderers} escapeHtml={false} source={aerial ? aerial : null} />
                  </Route>
                  <Route path="/dfn">
                    <ReactMarkdown renderers={renderers} escapeHtml={false} source={freeway ? freeway : null} />
                  </Route>
                  <Route path="/baby">
                    <ReactMarkdown renderers={renderers} escapeHtml={false} source={baby ? baby : null} />
                  </Route>
                  <Route path="/hive">
                    <ReactMarkdown renderers={renderers} escapeHtml={false} source={hive? hive : null} />
                  </Route>
                </div>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
// }

export default App;
