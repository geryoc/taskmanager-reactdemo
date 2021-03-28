function TaskListItem(params) {
  console.log(params);
  return (
    <div className="card mt-2">
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="">
            <p className="d-inline"> {params.Task.Description} </p>
          </div>
          <div>
            <button className="btn btn-primary"> Edit </button>
            <button className="btn btn-danger ml-1"> Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskListItem;
