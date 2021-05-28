import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { name, age, salary, grade, image, battingStyle } = props.player;
    const [isClicked, setIsClicked] = useState(false);

    return ( <
        div className = "col" >
        <
        div className = "card" >
        <
        img src = { image }
        className = "card-img-top"
        alt = "..." / >
        <
        div className = "card-body" >
        <
        h5 className = "card-title" > { name } < /h5> <
        pre >
        <
        h6 className = "card-text" > Age: { age } < /h6> <
        h6 className = "card-text" > Income: $ { salary } < /h6> <
        h6 className = "card-text" > Category: { grade } < /h6> <
        h6 className = "card-text" > { battingStyle }
        Batsmen < /h6> < /
        pre > <
        button type = "button"
        disabled = { isClicked }
        onClick = {
            () => {
                props.addPlayerToCart(props.player)
                setIsClicked(true)
            }
        }
        className = "btn btn-outline-success" > < FontAwesomeIcon icon = { faUserPlus }
        /> {isClicked ? "✓ Player Added" : "Add Player"}</button >
        <
        /div> < /
        div > <
        /div >
    );
};

export default Player;