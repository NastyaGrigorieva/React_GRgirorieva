import React from 'react';

export const UseReduser = ({state, dispatch, counterNumber}) => {
    return (
        <div>
            <div> Count : {state['count' + counterNumber].count}</div>

            <button onClick={() => dispatch({type: 'count' + counterNumber, payload: 1})}> Тык +1</button>
            <button onClick={() => dispatch({type: 'count' + counterNumber, payload: -1})}> Тык - 1</button>
            <button onClick={() => dispatch({type: 'reset', payload: counterNumber})}> Утопия</button>
        </div>
    );
};

