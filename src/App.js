import { Button, FileUpload, Form, Modal } from "@govtechsg/sgds-react";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Open</Button>
      <Modal show={showModal} fullscreen={true}>
        <Modal.Header closeButton onHide={() => setShowModal(false)}>
          <Modal.Title>You are approving Application No. FC232050646</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h3>Applicant Details</h3>

            <Form.Label>Application Type</Form.Label>
            <Form.Control type="text" value="New" disabled />

            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value="LEI SHEN" disabled />

            <h3>Licence Details</h3>

            <Form.Label>Licence Name</Form.Label>
            <Form.Control type="text" />

            <Form.Label>Licence No.</Form.Label>
            <Form.Control type="text" />
            <Form.Text>20 characters maximum</Form.Text>

            <Form.Label>Additional Documents(Optional)</Form.Label>
            <FileUpload>Choose a file</FileUpload>
            <Form.Text>Allowed file types: PDF, JPEG, PNG.<br />Only 1 file at 10 MB or less</Form.Text>

            <Form.Label>Agency Message to Applicant (Optional)</Form.Label>
            <Form.Text>This will be seen by the applicant. Please do not enter confidential information here.</Form.Text>
            <Form.Control as="textarea" placeholder="Enter further instructions or details for applicant here" />
            <Form.Text>500 characters maximum</Form.Text>

            <Form.Label>Internal Remarks (Optional)</Form.Label>
            <Form.Text>This is for internal use only, and will not be seen by the applicant.</Form.Text>
            <Form.Control as="textarea" />
            <Form.Text>500 characters maximum</Form.Text>

            <Form.Label>Internal Document (Optional)</Form.Label>
            <FileUpload>Choose a file</FileUpload>
            <Form.Text>This document is for internal use only, and will not be seen by the applicant. Allowed file types: PDF, JPEG, PNG.<br />Only 1 file at 10 MB or less</Form.Text>

            <Button type="submit">Approve Application</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
