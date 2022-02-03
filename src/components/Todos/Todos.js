import React from 'react';
import {useSelector} from "react-redux";

import {Todo} from '../Todo/Todo'
import css from "./Todos.module.css"

export const Todos = () => {
    const {todos} = useSelector(state => state.todo)
    return (
        <div className={css.wrapper}>
            {todos.map(todo=> <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

