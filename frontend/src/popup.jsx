import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function StaticExample({ setShowFromChild,show,setPasswordFromChild }) {


  return (
    <>
      <Modal show={show} onHide={()=> setPasswordFromChild("")}>
        <Modal.Header closeButton className="bg-danger">
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sorry, we can only calculate English numerals or special characters. Please remove all characters that are not included in this condition.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ ()=> setPasswordFromChild("")}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
