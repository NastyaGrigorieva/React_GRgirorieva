import React from 'react';

export const User = ({user, getChosenUser}) => {
    return (
        <div className={'wrap'}>
            <h4>{user.id} - {user.name} - </h4>

            {user.username} - {user.email}

            <button onClick={()=> getChosenUser(user.id)}> User-details </button>
        </div>
    );
};
