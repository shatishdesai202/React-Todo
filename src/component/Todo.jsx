import React, { useEffect, useState } from 'react';

export const MyContext = React.createContext();

export default function Todo({ setUpdate, update, todos, text, ids, setTodos, oneElement, setInputText, inputText }) {

    // const [update, setUpdate] = useState();

    const handleDeleteButton = () => {
        setTodos(todos.filter((el) => { return el.id !== oneElement.id }))
    };

    const handleComplete = () => {

        setTodos(todos.map((el) => {

            if (el.id === oneElement.id) {
                return {
                    ...el, completed: !el.completed
                }
            }
            
            return el;
       
        }));
    };

    const handleUpdateButton = () => {
        setInputText(text)
        setUpdate('');
        setUpdate(oneElement.id);
        // console.log('inside handle button function --->', update);
        
    };


    // console.log('this is update state--->', update);
    return (


        <div>
            <li className={`mt-2 ${oneElement.completed ? 'completed' : ''} `}>
                {text}
                <button onClick={handleDeleteButton} className="ml-2 btn btn-sm btn-danger float-right">Delete
                </button>
                <button onClick={() => handleUpdateButton() } className="ml-2 btn btn-sm btn-primary float-right">Update({ids})</button>
                <button onClick={handleComplete} className="mr-2 btn btn-sm btn-success float-right">
                    {` ${oneElement.completed ? 'completed' : 'UnCompleted'}`} </button>
            </li>
        </div>
        
    )
}
