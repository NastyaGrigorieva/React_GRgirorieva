import {configureStore} from "@reduxjs/toolkit";
import {todoReduser} from "./todo.slice";

 export const store = configureStore({
    reducer: {
        todo:todoReduser
    }
});