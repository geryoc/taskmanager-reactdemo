import React from 'react';
import eventManager from '../events/EventManager';
import TaskDeletedEvent from '../events/task/TaskDeletedEvent';

class TaskListItem extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      task: params.task,
    };
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(event) {
    const { task } = this.state;
    eventManager.publish(new TaskDeletedEvent(task));
    event.preventDefault();
  }

  render() {
    const { task } = this.state;
    return (
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center p-1">
          <div>
            <p className="d-inline">{task.description}</p>
          </div>
          <div>
            <button className="btn btn-primary" type="button"> Edit </button>
            <button className="btn btn-danger ml-1" type="button" onClick={this.deleteTask}> Delete </button>
          </div>
        </div>
      </li>
    );
  }
}

export default TaskListItem;
