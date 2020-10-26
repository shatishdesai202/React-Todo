import React, { useEffect, useState } from 'react';

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { MyContext } from './Todo'

export default function Form({ update,setUpdate, inputText, setInputText, todos, setTodos, setStatus }) {

    useEffect( ()=>{
        console.log('UPDATE---*->',update);
    },[update])

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    };


    const handleSublitButton = (e) => {
        e.preventDefault();
        // update
        console.log(update);
        if(update != ""){
            
            setTodos(todos.map((el) => {

                if (el.id === update) {
                    
                    setInputText('');
                    setUpdate("");
                    return {
                        ...el, text: inputText
                    }  
                }
                return el;
    
            }));

            return false;
        }
        
        //Check Input Box Empty or Not
        if (inputText === "") {
            return false;
        }
        // console.log('clicked');

        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.floor(Math.random() * 12562562) }
        ])

        setInputText('');

    };

    const handleFilterChange = (e) => {
        // console.log('***');
        // console.log(e.target.value);
        setStatus(e.target.value);
    };


    return (
        <React.Fragment>
            <div id="myDIV" className="header">

                <form>

                    <input value={inputText} onChange={handleInputChange} type="text" id="myInput" placeholder="Eg. Buy Milk" />

                    <input onClick={handleSublitButton} type="submit" className="addBtn" value="add" />

                </form>

                <div className="col-3 centered mt-5">

                    <select onChange={handleFilterChange} className="form-control" name="filter" id="filter">
                        <option value="all">All</option>
                        <option value="complete">Complete</option>
                        <option value="uncomplete">Uncomplete</option>
                    </select>

                </div>
            </div>

        </React.Fragment>
    )
}