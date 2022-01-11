import React from "react";
export const Card = ({card}) => {
    console.log(card);
    return (
        <div>
            <h2>{card.mission_name}</h2>
            <p> - {card.launch_year}</p>
            <img src={card.links.mission_patch_small} alt={card.mission_name}/>
        </div>

    )
}