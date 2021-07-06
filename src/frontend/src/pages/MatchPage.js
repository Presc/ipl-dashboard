import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';


export const MatchPage = () => {

    const [team, setTeam] = useState({ matches: [] });

    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
        </div>
    );
}