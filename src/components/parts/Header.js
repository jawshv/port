import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../css/Header.css';

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bg: 'black',
      copy: 'white',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
       bg: "#" + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6),
       copy: "#" + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6),
    }))

  }

  render() {

      return (
        <>
        <style>{`
            :root {
              --bg: ${this.state.bg};
              --copy: ${this.state.copy};
              --head: ${this.state.head};
              }
            `}
          </style>
        <div className="Deskhead">
          <h3 className="rolly">
              <span className="josh" onClick={this.handleClick}>JOSH V </span>
              <span className="toggle"><NavLink className="HeadDraws" activeClassName="active" to="/Draws">DRAWS</NavLink>•
              <NavLink className="HeadProjects" exact={true} activeClassName="active" to="/">PROJECTS</NavLink></span>
              <span className="infobutton"><NavLink activeClassName="active" to="/Info">INFO</NavLink></span>
          </h3>
      </div>
        <div className="Phonehead">
          <h2 className="rollytop">
          <span className="infobutton"><NavLink activeClassName="active" to="/Info">INFO</NavLink></span><span className="josh" onClick={this.handleClick}>JOSH V </span>
          </h2>
          <h2 className="rollybottom">
            <NavLink className="HeadDraws" activeClassName="active" to="/Draws">DRAWS</NavLink>
            <NavLink className="HeadProjects" exact={true} activeClassName="active" to="/">PROJECTS</NavLink>
        </h2>
    </div>
      </>
      )}
}
export default Header;
