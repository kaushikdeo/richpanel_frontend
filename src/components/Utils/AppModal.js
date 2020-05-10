import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const AppModal = ({show, onHide, addNewTask, setTaskText}) => {
  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={(e) => setTaskText(e.target.value)} />
          <Button onClick={addNewTask} variant="success">Success</Button>{' '}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default AppModal;