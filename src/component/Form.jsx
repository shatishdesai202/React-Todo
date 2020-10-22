import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form({inputText, setInputText, todos, setTodos, setStatus}) {



    const handleInputChange = (e) =>{
        // console.log(e.target.value);
        setInputText(e.target.value);
    };


    const handleSublitButton = (e) =>{
        e.preventDefault();
        
        
        //Check Input Box Empty or Not
        if(inputText === ""){
            return false;
        }

        // console.log('clicked');
        
        
       
        

        setTodos([
            ...todos, {text:inputText, completed:false, id: Math.floor(Math.random() * 12562562)} 
        ])

        setInputText('');

    };

    const handleFilterChange = (e) =>{
        // console.log('***');
        // console.log(e.target.value);
        setStatus(e.target.value);
    };


    return (
        <React.Fragment>
            <div id="myDIV" className="header">
                          
                <form>

                    <input value={inputText} onChange={ handleInputChange } type="text" id="myInput" placeholder="Eg. Buy Milk"/>
                    
                    <input  onClick={ handleSublitButton } type="submit" className="addBtn" value="add" />
                
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