import React, { Component } from 'react';
import Contact from '../data/Contact';
import style from '../../css/Info.css';

const block:any = {
};


class Info extends Component {

  render() {
          return (
          <div>
            <div className='Info'>
              <div className='links'>
                <h3>Links</h3>
                {Contact.map((e) =>
                  <div>
                  <h2>
                    {(e.offsite) && <a className="link" target="_blank" href={e.offsite}>{e.offsitewords}</a>}</h2>
                  </div>
                )}
              </div>

              <div className='me'>
              <h3>Hello</h3>
              {Contact.map((e) => (e.me) && <h2>{e.me}</h2>)}
              </div>

            </div>
          </div>

        )}}

export default Info;
