import React, {useCallback, useState, Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import highlighted from '../content/highlightedCases';
import style from '../../css/cases.css';

function Cases({height}) {

    const location = useLocation();

    const scrollTo = useCallback(() => {
            //   window.scrollTo(0, height)
    })

    return (
        <div class="cases">
            <h3>PROCESS</h3>
            <div onClick={scrollTo} class="nav">
            {
                highlighted.map((a, i) =>
                    <Link to={a.link}>
                        <div class="solocase">
                            <div>
                                <h2>{a.name}</h2>
                                <div class="tags" span="tags">
                                {a.tags.map((t) =>
                                    <span class={t}>{t}</span>
                                )}
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Cases;