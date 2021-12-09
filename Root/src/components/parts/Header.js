import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../css/Header.css';
import ReactSVG from 'react-svg'
import ReactGA from 'react-ga';
import Clock from '../utilities/clock'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: true,
      night: true,
    }
  }

// copy: "#" + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6),


  toggleImage = () => {
    this.setState(state => ({
      open: !state.open,
    }),
  )}

  componentDidMount() {
    const hours = new Date().getHours();
  
    if (7 < hours && 17 > hours ) {
      this.setState({ open: true })
    } else {
      this.setState({ open: false })
    }
  }
  

  eyeImage = () =>
    this.state.open ? 'icons/open.svg' : 'icons/closed.svg'


  render() {
   const { open } = this.state;

      return (
        <>
          {open ? <style>{`:root {
              --bg: rgb(223, 223, 223);
              --copy: rgb(24, 24, 24);
              }
            `}</style> : null }
        <div className="Deskhead">
          <h3 className="rolly">
              <span className="headright">
              <Clock/>
                <ReactSVG className="eye" src={this.eyeImage()} onClick={this.toggleImage}/>
              </span>
          </h3>
      </div>
      </>
      )}
}
export default Header;
