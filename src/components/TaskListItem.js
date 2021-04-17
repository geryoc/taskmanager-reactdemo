import React from 'react';

function TaskListItem(props) {
  const { task, onDeleteTask, onRequestTaskEdition } = props;
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center p-1">
        <div>
          <p className="d-inline">{task.description}</p>
        </div>
        <div>
          <button className="btn btn-primary" type="button" onClick={() => onRequestTaskEdition(task)}> Edit </button>
          <button className="btn btn-danger ml-1" type="button" onClick={() => onDeleteTask(task)}> Delete </button>
        </div>
      </div>
    </li>
  );
}

export default TaskListItem;
