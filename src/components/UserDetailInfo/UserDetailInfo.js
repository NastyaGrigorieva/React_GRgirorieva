import React from "react";

import '../../App.css'

export const UserDetailInfo = ({chosenUser, setUserId}) => {
    return (
        <div className={'details'}>
            <ul>
                <li>{chosenUser.id}</li>
                <li> {chosenUser.name}</li>
                <li>{chosenUser.username}</li>
                <li>{chosenUser.email}</li>
            </ul>
            <button onClick={() => setUserId(chosenUser.id)}> Покажися</button>
        </div>
    );
};