import React from 'react';
import Header from './Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Layout() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="container">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default Layout;
