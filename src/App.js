import React, { useState, useEffect } from 'react';


// Import BOOTSTRAP CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Import External Css
import './App.css';

//Importing Component
import Header from './component/Header';
import Form from './component/Form';
import List from './component/List';

export default function App() {

    // State
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodo, setFilteredTodo] = useState([]);
    const [update, setUpdate] = useState('');

    useEffect( ()=>{
        getLocalStorage();
    },[])

    // Use Effect
    useEffect( ()=>{
        handleStatus();
        setLocalStorage();
    }, [todos, status]); 

    


    // Functions 
     
    const handleStatus = () =>{

        switch (status) {

            case "complete":
                setFilteredTodo(todos.filter( (todo) => todo.completed ));
                break;
            
            case "uncomplete":
                setFilteredTodo(todos.filter( (todo) => {
                   return (todo.completed === false)
                } ));
                break;
        
            default:
                setFilteredTodo(todos);
                break;
        }

    };

    // Save LocalStorage
    const setLocalStorage =  () =>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const getLocalStorage = () =>{
        if(localStorage.getItem("todos") == null){
            localStorage.setItem("todos", JSON.stringify([]));
        }else{
          const x = JSON.parse(localStorage.getItem("todos"));
            setTodos(x);
        }
    };

    return (

        <React.Fragment>

            <Header />
            <Form update={update} setUpdate={setUpdate} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
            <List update={update} setUpdate={setUpdate} todos={todos} setTodos={setTodos} setFilteredTodo={filteredTodo} setInputText={setInputText} inputText={inputText} />

        </React.Fragment>

    
)

}
