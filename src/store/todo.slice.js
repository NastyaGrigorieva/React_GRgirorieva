import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: new Date().getTime(), name: action.payload.todo, status: false})
        },
        changeStatus: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.status = !todo.status
        },
        deleteTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos.splice(index, 1)
        }

    }
});

export const todoReduser = todoSlice.reducer;
export const {addTodo, changeStatus, deleteTodo} = todoSlice.actions;