import React from 'react';
import "./TaskCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import { epochDateConverter } from '../util/epochDateConverter';
import { format } from 'date-fns';


export const TaskCard = ({ task, handleDeleteTask }) => {

  const formattedDate = task?.deadline && epochDateConverter(task.deadline, 'eee. MMM do')




  return (
        <div className='card-content'>

      <Link className="card-link" to={`/tasks/${task.id}` }>
       
        <span className="card-name">
          {task.name}
        </span>
        <span className='card-date'>{formattedDate}</span>
        <span className='card-status'>{task.isCompleted === false || 0 ? <span className='x'><FontAwesomeIcon icon={faXmark} /></span>: <span className='check'><FontAwesomeIcon icon={faCheck} /></span>}</span>
    
      </Link>

        </div>
   
  );
}
