import React from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import TaskEditModal from './TaskEditModal';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: uuid(), description: 'Task 1 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea' },
        { id: uuid(), description: 'Task 2 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea' },
        { id: uuid(), description: 'Task 3 - Texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea texto de ejemplo de tarea' },
      ],
      showEditModal: false,
      taskEditForm: { id: '', description: '' },
    };

    this.onCreateTask = this.onCreateTask.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.onEditTask = this.onEditTask.bind(this);
    this.onRequestTaskEdition = this.onRequestTaskEdition.bind(this);
    this.onCancelTaskEdition = this.onCancelTaskEdition.bind(this);
    this.onTaskEditFormChangeDescription = this.onTaskEditFormChangeDescription.bind(this);
  }

  onCreateTask(taskForm) {
    const newTask = {
      id: uuid(),
      description: taskForm.description,
    };

    this.setState((previousState) => ({
      ...previousState,
      tasks: [...previousState.tasks, newTask],
    }));
  }

  onDeleteTask(deleteTask) {
    this.setState((previousState) => ({
      ...previousState,
      tasks: previousState.tasks.filter((task) => task.id !== deleteTask.id),
    }));
  }

  onEditTask() {
    this.setState((previousState) => ({
      ...previousState,
      showEditModal: false,
      taskEditForm: { id: '', description: '' },
      tasks: previousState.tasks.map((task) => (task.id !== previousState.taskEditForm.id ? task : {
        id: previousState.taskEditForm.id,
        description: previousState.taskEditForm.description,
      })),
    }));
  }

  onRequestTaskEdition(task) {
    this.setState((previousState) => ({
      ...previousState,
      taskEditForm: task,
      showEditModal: true,
    }));
  }

  onCancelTaskEdition() {
    this.setState((previousState) => ({
      ...previousState,
      taskEditForm: { id: '', description: '' },
      showEditModal: false,
    }));
  }

  onTaskEditFormChangeDescription(value) {
    this.setState((previousState) => ({
      ...previousState,
      taskEditForm: {
        ...previousState.taskEditForm,
        description: value,
      },
    }));
  }

  render() {
    const { tasks, taskEditForm, showEditModal } = this.state;
    return (
      <div className="container-fluid">
        <Header />
        <div className="container">
          <TaskForm onCreateTask={this.onCreateTask} />

          <TaskList
            tasks={tasks}
            onRequestTaskEdition={this.onRequestTaskEdition}
            onDeleteTask={this.onDeleteTask}
          />

          <TaskEditModal
            showModal={showEditModal}
            taskEditForm={taskEditForm}
            onEditTask={this.onEditTask}
            onCancelTaskEdition={this.onCancelTaskEdition}
            onTaskEditFormChangeDescription={this.onTaskEditFormChangeDescription}
          />
        </div>
      </div>
    );
  }
}

export default Layout;
