import React from "react";

export const TodoItem = (props) => {

        let dateTime = props.todoItem.endDate.split('T');

        let date = (dateTime[0]).split('-');
        let time = (dateTime[1]).split(':');
        let dateFormat = {
            DD : '',
            mm : '',
            YYYY : '',
            HH : '',
            MM : '',
            AM_PM : ''
        }
        dateFormat.DD = date[2];
        switch(date[1]){
            case '1': dateFormat.mm = "January";
                break;
            case '2': dateFormat.mm = "February";
                break;
            case '3': dateFormat.mm = "March";
                break;
            case '4': dateFormat.mm = "April";
                break;
            case '5': dateFormat.mm = "May";
                break;
            case '6': dateFormat.mm = "June";
                break;
            case '7': dateFormat.mm = "July";
                break;
            case '8': dateFormat.mm = "August";
                break;
            case '9': dateFormat.mm = "September";
                break;
            case '10': dateFormat.mm = "October";
                break;
            case '11': dateFormat.mm = "November";
                break;
            case '12': dateFormat.mm = "December";
                break;
            default : dateFormat.mm = date[1];
        }
        dateFormat.YYYY = date[0];
        let intHH = parseInt(time[0]);
        if(intHH > 12){
            dateFormat.HH = intHH-12;
        } else if(intHH === 0){
            dateFormat.HH = 12;
        } else {
            dateFormat.HH = intHH;
        }
        if(intHH > 11){
            dateFormat.AM_PM = 'PM';
        } else {
            dateFormat.AM_PM = 'AM';
        }
        dateFormat.MM = time[1];




    return (
        <div className={`container lightModeColor`}>
            <div className="card bg-light mb-3 w-lg-75">
                <div className="card-body">
                    <h5>{props.todoItem.taskName}</h5>
                    <p className="card-text">{props.todoItem.taskDescription}</p>
                </div>
                <div className="card-footer flex">
                    {props.todoItem.endDate ? <span className="text-muted"><small>Deadline : {dateFormat.mm} {dateFormat.DD}, {dateFormat.YYYY} | {dateFormat.HH}:{dateFormat.MM} {dateFormat.AM_PM} </small></span> : '' }
                    <button className="btn btn-danger btn-sm float-end" onClick={()=>{props.onDelete(props.todoItem)}}>Delete</button>
                </div>
            </div>            
        </div>
    )
}