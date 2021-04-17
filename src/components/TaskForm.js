import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskForm: {
        description: '',
      },
    };

    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { taskForm } = this.state;
    const { onCreateTask } = this.props;

    onCreateTask(taskForm);

    this.setState({ taskForm: { description: '' } });
  }

  handleChangeDescription(event) {
    event.preventDefault();
    this.setState({ taskForm: { description: event.target.value } });
  }

  render() {
    const { taskForm } = this.state;
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
                  value={taskForm.description}
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
