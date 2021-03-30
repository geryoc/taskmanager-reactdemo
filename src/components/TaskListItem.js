import React from 'react';

class TaskListItem extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      task: params.task,
    };
  }

  render() {
    const { task } = this.state;
    return (
      <div className="card mt-2">
        <div className="card-body p-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="">
              <p className="d-inline">{task.description}</p>
            </div>
            <div>
              <button className="btn btn-primary" type="button"> Edit </button>
              <button className="btn btn-danger ml-1" type="button"> Delete </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskListItem;
