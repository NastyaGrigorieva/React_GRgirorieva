import React, {useEffect, useState} from "react";

import {Card} from "../Card/Сard"

export const Wrap = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(response => response.json())
            .then(json => setCard(json));
    }, [])

    const filterCards = card.filter(value => value.launch_year !== "2020")

    return (
        <div>
            {filterCards.map(card => <Card key={card.flight_number} card={card}/>)}
        </div>
    );
};