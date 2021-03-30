import React from 'react';

class TaskForm extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      task: {
        description: '',
      },
    };

    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { task } = this.state;
    alert(`Submit Task: ${task.description}`);
    event.preventDefault();
  }

  handleChangeDescription(event) {
    this.setState({ task: { description: event.target.value } });
  }

  render() {
    const { task } = this.state;
    return (
      <div className="card mt-3">
        <div className="card-body">
          <h4> Create Task </h4>
          <form className="mt-4" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Insert task text here."
                  value={task.description}
                  onChange={this.handleChangeDescription}
                />

                <div className="input-group-append">
                  <button className="btn btn-success" type="submit"> Create </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
