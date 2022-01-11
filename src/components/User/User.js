import React from 'react';

export const User = ({user}) => {
    return (
        <div className={'wrap'}>
            <h4>{user.id} - {user.name} - </h4>

            {user.username} - {user.email}

        </div>
    );
};
