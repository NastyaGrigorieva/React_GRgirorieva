import React from 'react';

import {Form, Todos} from './components'
import css from "./App.module.css";
import Header from "./components/Header/Header";

export const App = () => {
    return (
        <div className={css.wrapper}>
            <Header/>
            <Form/>
            <Todos/>
        </div>
    );
};

