import React, { useState } from 'react'
import '../App.css';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [endDate, setEndDate] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            props.showAlert('bi bi-exclamation-triangle-fill','Title or Description cannot be blank','warning')
        } else{
            props.addTodo(title, desc, endDate);
            setTitle("");
            setDesc("");
            setEndDate("");
            props.showAlert('bi bi-check-circle','Task added successfully','success');
        }
        
    }
    let today = new Date();
    let now = {
        date : today.getDate().toString(),
        month : (today.getMonth() + 1).toString(),
        year : today.getFullYear().toString()
    }
    console.log(`${now.year}-${now.month}-${now.date}`);
    return (
    <div className={`container my-3 ${props.mode === 'light' ? 'lightModeColor' : 'darkModeColor'}`}>
        <h3 className="mb-4">Add new task</h3>
        <div className="row">
            <div className="col-md-10">
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="inputTitle" className="form-label">Title</label>
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className={`form-control bg-transparent ${props.mode === 'light' ? 'lightModeColor' : 'darkModeColor'}`} id="inputTitle"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDesc" className="form-label">Description</label>
                        <input type="text" value={desc} onChange={(e) =>setDesc(e.target.value)} className={`form-control bg-transparent ${props.mode === 'light' ? 'lightModeColor' : 'darkModeColor'}`} id="inputDesc"/>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="inputEndDate" className="form-label">Deadline</label>
                        <input type="datetime-local" value={endDate} onChange={(e) =>setEndDate(e.target.value)} className={`form-control bg-transparent ${props.mode === 'light' ? 'lightModeColor' : 'darkModeColor darkModeCalender'}`} id="inputEndDate" min={`${now.year}-${now.month}-${now.date}}`}/>
                    </div>
                    <button type="submit" className="btn btn-success px-5 py-2">Add Task</button>
                </form>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
  )
}
