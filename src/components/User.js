import React from 'react';

export const User = ({user}) => {
    return (
        <div>
            <b>{user.id} - {user.name} - </b>

            {user.username} - {user.email}

        </div>
    );
};
