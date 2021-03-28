function App() {
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="bg-warning p-3">
        <h1 className="mx-auto w-25"> Task Manager! </h1>
      </div>

      {/* Content */}
      <div className="container">
        {/* Task Form */}
        <div class="card mt-3">
          <div class="card-body">
            <h4> Create Task </h4>
            <form className="mt-4">
              <div className="form-group">
                <div class="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert task text here."
                  />
                  <div class="input-group-append">
                    <button className="btn btn-success"> Create </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Task List */}
        <div class="card mt-3">
          <div class="card-body">
            <h4> Task List </h4>
            <div className="list mt-3">
              {/* Tarea 1 */}
              <div className="card mt-2">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                      <p className="d-inline">
                        Tarea 1 - texto de tarea de ejemplo texto de tarea de
                        ejemplo texto de tarea de ejemplo
                      </p>
                    </div>
                    <div>
                      <button className="btn btn-primary"> Edit </button>
                      <button className="btn btn-danger ml-1"> Delete </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarea 2 */}
              <div className="card mt-2">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                      <p className="d-inline">
                        Tarea 2 - texto de tarea de ejemplo texto de tarea de
                        ejemplo texto de tarea de ejemplo
                      </p>
                    </div>
                    <div>
                      <button className="btn btn-primary"> Edit </button>
                      <button className="btn btn-danger ml-1"> Delete </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarea 3 */}
              <div className="card mt-2">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                      <p className="d-inline">
                        Tarea 3 - texto de tarea de ejemplo texto de tarea de
                        ejemplo texto de tarea de ejemplo
                      </p>
                    </div>
                    <div>
                      <button className="btn btn-primary"> Edit </button>
                      <button className="btn btn-danger ml-1"> Delete </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
