import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../css/Header.css';

class Header extends Component {

  render() {

      return (
        <>
        <div className="Footer">
          <h3 className="construct">
          <span><br/><a target="_blank" href="http://textfiles.com/underconstruction/">⚠️ under construction ⚠️</a></span>
          <span><br/>Last Updated: 10/11/19</span>

          </h3>
      </div>
      </>
      )}
}
export default Header;
