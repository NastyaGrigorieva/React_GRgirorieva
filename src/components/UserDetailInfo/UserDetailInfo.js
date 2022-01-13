import React from "react";

import '../../App.css'

export const UserDetailInfo = ({chosenUser, setUserId}) => {
    return (
        <div className={'comment'}>
            {
                JSON.stringify(chosenUser)
            }
            <button onClick={()=> setUserId(chosenUser.id)}> Покажися </button>
        </div>
    );
};