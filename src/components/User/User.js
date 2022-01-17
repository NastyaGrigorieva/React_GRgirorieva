import React from 'react';
import css from 'User.css';

export const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div className={css.wrap}>
            <div>{id}) {name} -- {username} -- {email}</div>
        </div>

    );
};


