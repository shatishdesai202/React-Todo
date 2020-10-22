import React, { useEffect, useState } from 'react';

export const MyContext = React.createContext();

export default function Todo({ todos, text, setTodos, oneElement, setInputText, inputText }) {    

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

    return (
        <div>
            <li className={`mt-2 ${oneElement.completed ? 'completed' : ''} `}>
                {text}
                <button onClick={handleDeleteButton} className="ml-2 btn btn-sm btn-danger float-right">Delete</button>
                <button onClick={handleComplete} className="mr-2 btn btn-sm btn-success float-right">
                    {` ${oneElement.completed ? 'completed' : 'UnComplet'}`} </button>
            </li>
        </div>
    )
}
