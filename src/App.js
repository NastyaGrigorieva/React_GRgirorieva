import React from 'react';

import {Form, Todos} from './components'
import css from "./App.module.css";

export const App = () => {
    return (
        <div className={css.wrapper}>
           <Form/>
           <Todos/>
        </div>
    );
};

