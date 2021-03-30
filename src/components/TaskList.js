import React from 'react';
import TaskListItem from './TaskListItem';

class TaskList extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      tasks: [
        { description: 'Task 1 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea' },
        { description: 'Task 2 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea' },
        { description: 'Task 3 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea' },
      ],
    };
  }

  render() {
    const { tasks } = this.state;
    const taskList = tasks.map((task) => <TaskListItem task={task} />);

    return (
      <div className="card mt-3">
        <div className="card-body">
          <h4> Task List </h4>
          <div className="list mt-3">
            {taskList}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
