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
            <div className='Infobox'>
              {Contact.map((e) =>
                <table>
                <tr>
                    {(e.me) && <th>{e.me}</th>}
                </tr>
                <tr>
                    {(e.where) && <th>{e.where}</th>}
                </tr>
                <tr>
                  {(e.llink) && <th><a className="link" target="_blank" href={e.llink}>{e.l_lname}</a></th>}
                  {(e.rlink) && <th><a className="link" target="_blank" href={e.rlink}>{e.l_rname}</a></th>}
                </tr>
                <tr>
                  {(e.lname) && <th>{e.lname}</th>}
                  {(e.rname) && <th>{e.rname}</th>}
                </tr>
                <tr>
                  {(e.site) && <th><a className="link" target="_blank" href={e.git}>{e.site} Last updated: {e.update}</a></th>}
                </tr>
              </table>
              )}

            </div>
          </div>
          </div>

        )}}

export default Info;
