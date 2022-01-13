import React from 'react';

export const User = ({user, getChosenUser}) => {
    return (
        <div className={'wrap'}>
            <h5>{user.id} - {user.name} - </h5>

           <p> {user.username} - {user.email}</p>

            <button onClick={()=> getChosenUser(user.id)}> User-details </button>
        </div>
    );
};
