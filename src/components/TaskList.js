import React from 'react';
import TaskListItem from './TaskListItem';

function TaskList(props) {
  const { tasks, onDeleteTask, onRequestTaskEdition } = props;

  const taskList = tasks.map((task) => (
    <TaskListItem
      task={task}
      key={task.id}
      onRequestTaskEdition={onRequestTaskEdition}
      onDeleteTask={onDeleteTask}
    />
  ));

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h4> Task List </h4>
        <ul className="list-group mt-3">
          {taskList}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
