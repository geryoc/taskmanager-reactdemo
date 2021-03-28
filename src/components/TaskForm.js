function TaskForm() {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h4> Create Task </h4>
        <form className="mt-4">
          <div className="form-group">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Insert task text here."
              />
              <div className="input-group-append">
                <button className="btn btn-success"> Create </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
