import React from "react";
import { TodoItem } from "./TodoItem";
import '../App.css';

export const Todos = (props) => {
    return(
        <div className={`container my-3 pb-5 ${props.mode === 'light' ? 'lightModeColor' : 'darkModeColor'}`}>
            <h3 className="mb-4">Tasks</h3>
            <div className="taskListContainer">
                {props.todos.length === 0 ?
                <div className="card bg-light lightModeColor mb-3">
                    <div className="card-header">Notice</div>
                    <div className="card-body">
                        <h5 className="card-title">No task available</h5>
                    </div>
                </div>
                : props.todos.map((todoItem) =>{
                    return <TodoItem todoItem = {todoItem} key = {todoItem.srNo} onDelete={props.onDelete} mode={props.mode} ></TodoItem>
                })}
            </div>
        </div>
    )
}
