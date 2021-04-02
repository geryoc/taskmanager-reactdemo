import React from 'react';
import { v4 as uuid } from 'uuid';
import TaskDeletedEvent from '../events/task/TaskDeletedEvent';
import TaskCreatedEvent from '../events/task/TaskCreatedEvent';
import eventManager from '../events/EventManager';
import TaskListItem from './TaskListItem';

class TaskList extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      tasks: [
        { id: uuid(), description: 'Task 1 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea' },
        { id: uuid(), description: 'Task 2 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea' },
        { id: uuid(), description: 'Task 3 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea' },
      ],
    };

    this.onCreatedTask = this.onCreatedTask.bind(this);
    this.onDeletedTask = this.onDeletedTask.bind(this);

    this.createdTaskSuscription = eventManager.suscribe(TaskCreatedEvent, this.onCreatedTask);
    this.deletedTaskSuscription = eventManager.suscribe(TaskDeletedEvent, this.onDeletedTask);
  }

  componentWillUnmount() {
    this.createdTaskSuscription.unsubscribe();
    this.deletedTaskSuscription.unsubscribe();
  }

  onCreatedTask(newTask) {
    this.setState((previousState) => ({ tasks: [...previousState.tasks, newTask] }));
  }

  onDeletedTask(deletedTask) {
    this.setState((previousState) => ({
      tasks: previousState.tasks.filter((task) => task.id !== deletedTask.id),
    }));
  }

  render() {
    const { tasks } = this.state;
    const taskList = tasks.map((task) => <TaskListItem task={task} key={task.id} />);

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
}

export default TaskList;
