import React, { Component } from 'react';
import DrawsList from '../data/DrawsList';
import style from '../../css/DrawsCell.css';
import { NavLink } from 'react-router-dom'

class DrawsCell extends Component {
    render() {

        return (
          <div >
          <div className='Draws'>
          {DrawsList.map((e,i) =>
            <div className='DrawCell'>
                <NavLink to={e.link}>
               <img className='DrawImg' src={e.cover}/>
               <div className='Drawtxt'>
                  <h3>{i+1}.</h3>
                 <h3 className='title'>{e.name}</h3>
               </div>
              </NavLink>
           </div>
         )}
      </div>
      </div>
    );
    }
}

export default DrawsCell;
