import './App.css';
import {Header} from "./App-Component/Header";
import {Alert} from "./App-Component/Alert";
import {Todos} from "./App-Component/Todos";
import {AddTodo} from "./App-Component/AddTodo";
import {Footer} from "./App-Component/Footer";
import React, { useState, useEffect } from 'react';


function App() {

    const showAlert = (heading, message, type)=>{
        setAlert({
            heading: heading,
            message: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
        } else{
            setMode('light');
        }
    }
    let initTodo;
    if(localStorage.getItem("todos") === null){
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    let myAppName = "Todos";
    const onDelete = (todoItem) => {
        setTodos(todos.filter((e)=>{
            return e !== todoItem;
        }))
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert('bi bi-check-circle','Task deleted successfully','success');
    }
    const addTodo = (taskName,taskDescription, endDate) =>{
        let srNo;
        if(todos.length === 0 ){
            srNo = 1;
        } else {
            srNo = todos[todos.length - 1].srNo+1;
        }
        const myTodo = {
            srNo: srNo,
            taskName: taskName,
            taskDescription: taskDescription,
            endDate: endDate
        }
        setTodos([...todos, myTodo]);
    }
    const [alert, setAlert] = useState(null);
    const [mode, setMode] = useState('light');

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    if(mode === 'light'){
        window.document.body.classList.add('lightModeBg');
        window.document.body.classList.remove('darkModeBg');
    } else {
        window.document.body.classList.add('darkModeBg');
        window.document.body.classList.remove('lightModeBg');
    }
    return (
            <>
                <Header title={myAppName} searchBar={false} toggleMode={toggleMode} mode={mode}></Header>
                <Alert alert={alert}></Alert>
                <div className="row pt-2">
                    <div className="col-lg-7">
                        <AddTodo showAlert={showAlert} addTodo={addTodo} mode={mode}></AddTodo>
                    </div>
                    <div className="col-lg-5">
                        <Todos todos = {todos} onDelete={onDelete} mode={mode}></Todos>
                    </div>
                </div>
                <div className="">
                    <Footer title={myAppName} mode={mode}></Footer>
                </div>
            </>
    );
}

export default App;
