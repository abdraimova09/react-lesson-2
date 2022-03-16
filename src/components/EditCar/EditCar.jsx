import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function EditCar({ show, setShow, carToEdit, updateCar }) {
  const [model, setModel] = useState(carToEdit.model);
  const [image, setImage] = useState(carToEdit.image);
  function save() {
    let editedCar = {
      model,
      image,
      id: carToEdit.id,
    };
    updateCar(editedCar);
  }
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            type="text"
            placeholder="Model"
          />
          <br />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="Image"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button onClick={() => save()} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditCar;
