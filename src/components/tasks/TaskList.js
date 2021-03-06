import React, { useEffect, useState } from "react";
import "./TaskList.css"
import { getAllTasks, deleteTask } from "../../modules/TaskManager";
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./TaskCard";

// GROUP: display a list of all the tasks from the database

export const TaskList = () => {
    const [tasks, setTasks] = useState([])
    
    const navigate = useNavigate();

    const handleDeleteTask = id => {
        deleteTask(id)
        .then(() => getAllTasks().then(setTasks));
    };

  

    useEffect(() => {
        getAllTasks().then(setTasks)
    },[])

    return(
        <div className="list-container">
            <div className ="task__list" key={tasks.length} >
                <h2 className="list__header">Tasks</h2>
                <div className="list__fields">
                    <span className="list__field taskHeader">Task</span> 
                    <span className="list__field deadlineHeader">Deadline</span> 
                    <span className="list__field statusHeader">Completion</span>
                </div>
                <div className="list__content">
                    {tasks.map(t => (

                        <TaskCard
                        key={t.id}
                        task={t}
                        handleDeleteTask={handleDeleteTask} />
                    
                    ))}
                </div>
            </div>
        <button type="button"
            className="add__button"
            onClick={() => {navigate("/tasks/create")}}>
                Create New Task
            </button>
        </div>
    )
}