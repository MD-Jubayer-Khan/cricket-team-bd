import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import Player from '../Player/Player'
const Players = (props) => {
        const [players, setPlayers] = useState([]);

        useEffect(() => setPlayers(fakeData), []);

        return ( <
            div className = "col-md-8 mt-5" >
            <
            div className = "row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 g-4" > {
                players.map(player => < Player key = { player.name }
                    addPlayerToCart = { props.addPlayerToCart }
                    player = { player }
                    />)
                } <
                /div> < /
                div >
            );
        };

        export default Players;