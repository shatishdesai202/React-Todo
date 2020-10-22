import React from 'react';

//Importing Todo
import Todo from './Todo';

export default function List({todos, setTodos, setStatus, setFilteredTodo, setInputText, inputText}) {
    
    return (
        <div className="d-flex justify-content-center align-items-center">
            <ul className="mt-5 col-10 col-centered" id="myUL">

               {setFilteredTodo.map( (t) => (

                 <Todo key={t.id} text={t.text} oneElement={t} todos={todos} setTodos={setTodos} setInputText={setInputText} 
                 inputText={inputText} />
            
               ))}

            </ul>
        </div>
    )
}
