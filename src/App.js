import React, {useReducer} from 'react';
import {UseReduser} from "./components/UseReducer/UseReducer";

const reduser = (state, action) => {
    state = {...state, callCount: state.callCount + 1}
    switch (action.type) {
        case'count1':
            return {...state, count1: {...state.count1, count: state.count1.count + action.payload}}
        case'count2':
            return {...state, count2: {...state.count2, count: state.count2.count + action.payload}}
        case'count3':
            return {...state, count3: {...state.count3, count: state.count3.count + action.payload}}
        case'reset':
            return {...state, ['count'+ action.payload]: {...state['count'+ action.payload], count: 0}}

        case 'resetCallCounter':
            return{...state, callCount:0}

        default:
            return state
    }
}

export const App = () => {
    const [state, dispatch] = useReducer(reduser, {
        count1: {count: 0},
        count2: {count: 0},
        count3: {count: 0},
        callCount: 0
    });

    return (
        <div>


            <UseReduser state={state} dispatch={dispatch} counterNumber={1}/>
            <UseReduser state={state} dispatch={dispatch} counterNumber={2}/>
            <UseReduser state={state} dispatch={dispatch} counterNumber={3}/>

            <hr/>
            <div>
                callCount : {state.callCount}
                <button onClick={() => dispatch({type: 'resetCallCounter'})}> Nsr</button>
            </div>

        </div>
    );
};

