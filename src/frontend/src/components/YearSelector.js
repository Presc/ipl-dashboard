import React from "react";
import { Link } from "react-router-dom";

import './YearSelector.scss';

export const YearSelector = (teamName) => {
    
    let years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endyear = process.env.REACT_APP_DATA_END_YEAR;

    for (let i = startYear; i <= endyear; i++) {
        years.push(i);
    }

    return (
        <ol className="YearSelector">
        {years.map(year => (
            <li>
                <Link to={`/teams/${teamName.teamName}/matches/${year}`}> {year} </Link>
            </li>
        )) }
        </ol>
    )
}