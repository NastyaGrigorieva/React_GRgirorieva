import React, {useReducer, useState} from 'react';

import "./App.css";

const reduser = (state, action) => {
    switch (action.type) {
        case 'addCat' :
            return {...state, cats: [...state.cats, {name: action.payload, id: Date.now()}]}
        case 'deleteCat' :
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)}
        case 'addDog' :
            return {...state, dogs: [...state.dogs, {name: action.payload, id: Date.now()}]}
        case 'deleteDog' :
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)}
        default:
            return state
    }
}

export const App = () => {
    const [state, dispatch] = useReducer(reduser, {
        cats: [],
        dogs: []
    });

    const [dogValue, setDogValue] = useState('');
    const [catValue, setCatValue] = useState('');

    const setNewAnimal = (setter, type, payload) => {
        dispatch({type, payload});
        setter('');
    }

    return (
        <div>
            <div className={"flex"}>
                <div>
                    <div>add Cat</div>
                    <input onChange={({target}) => setCatValue(target.value)}
                           type={'text'} value={catValue}/>
                    <button onClick={() => setNewAnimal(setCatValue, 'addCat', catValue)}>вывести</button>
                </div>

                <div>
                    <div>add Dog</div>
                    <input onChange={({target}) => setDogValue(target.value)}
                           type={'text'} value={dogValue}/>
                    <button onClick={() => setNewAnimal(setDogValue, 'addDog', dogValue)}>вывести</button>
                </div>
            </div>
            <hr/>

            <div className={"flex"}>
                <div>
                    Cats:
                    {
                        state.cats.map(cat => <div key={cat.id}>{cat.name}
                            <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>delete</button>
                        </div>)
                    }
                </div>

                <div>
                    Dogs:
                    {
                        state.dogs.map(dog => <div key={dog.id}>{dog.name}
                            <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>delete</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};
