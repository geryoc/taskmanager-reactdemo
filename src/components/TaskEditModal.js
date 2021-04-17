import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TaskEditModal = (props) => {
  const {
    taskEditForm, onTaskEditFormChangeDescription, showModal, onCancelTaskEdition, onEditTask,
  } = props;
  return (
    <Modal show={showModal} onHide={onCancelTaskEdition}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="m-2">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Insert task text here."
              value={taskEditForm.description}
              onChange={(event) => onTaskEditFormChangeDescription(event.target.value)}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancelTaskEdition}> Close </Button>
        <Button variant="primary" onClick={onEditTask}> Save Task </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskEditModal;
