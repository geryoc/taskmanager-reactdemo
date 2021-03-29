import React from 'react';
import TaskListItem from './TaskListItem';

function TaskList() {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h4> Task List </h4>
        <div className="list mt-3">
          <TaskListItem
            task={{
              description:
                'Task 1 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea',
            }}
          />
          <TaskListItem
            task={{
              description:
                'Task 2 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea',
            }}
          />
          <TaskListItem
            task={{
              description:
                'Task 3 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskList;
