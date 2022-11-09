import React from "react";

export const TodoItem = (props) => {

        let dateTime = props.todoItem.endDate.split('T');

        let date = (dateTime[0]).split('-');
        let time = (dateTime[1]).split(':');
        let DD = date[2];
        let mm;
        switch(date[1]){
            case 1: mm = "January";
                break;
            case 2: mm = "February";
                break;
            case 3: mm = "March";
                break;
            case 4: mm = "April";
                break;
            case 5: mm = "May";
                break;
            case 6: mm = "June";
                break;
            case 7: mm = "July";
                break;
            case 8: mm = "August";
                break;
            case 9: mm = "September";
                break;
            case 10: mm = "October";
                break;
            case 11: mm = "November";
                break;
            case 12: mm = "December";
                break;
            default : mm = date[1];
        }
        let YYYY = date[0];
        let HH = time[0];
        let MM = time[1];


    return (
        <div className={`container lightModeColor`}>
            <div className="card bg-light mb-3 w-lg-75">
                <div className="card-body">
                    <h5>{props.todoItem.taskName}</h5>
                    <p className="card-text">{props.todoItem.taskDescription}</p>
                </div>
                <div className="card-footer flex">
                    {props.todoItem.endDate ? <span className="text-muted"><small>Deadline : {DD}/{mm}/{YYYY} Time {HH}:{MM} </small></span> : '' }
                    <button className="btn btn-danger btn-sm float-end" onClick={()=>{props.onDelete(props.todoItem)}}>Delete</button>
                </div>
            </div>            
        </div>
    )
}