import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const {all, completed} = useSelector(state => state.todo)

    return (
        <div>
            <h2>All: {all}   Completed: {completed}</h2>
            <hr/>
        </div>
    );
};

export default Header;