import React, { useEffect, prevState, useCallback, useState, Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import highlighted from '../content/highlightedCases';
import style from '../../css/cases.css';

function Cases() {

    return (
        <div class="cases">
            <h3>PROCESS</h3>
            <div class="nav">
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