import { Alert, Button, FileUpload, Form, FormCheck, Modal, i, Col, Row, DatePicker } from "@govtechsg/sgds-react";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false)
  const currentDate = new Date();
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1)
  const [state, setState] = useState({
    licenceNumber: "",
    licenceIssuance: null,
    issueDate: currentDate,
    startDate: currentDate,
    licenceValidity: "1 year",
    validUntil: nextYear
  });
  const applicantDetails = {
    applicationType: "New",
    name: "LEI SHEN"
  };
  const licenceDetails = {
    licenceName: "AP Testing 2"
  };
  console.log(state);
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

            <Form.Group as={Col} lg={4}>
              <Form.Label>Application Type</Form.Label>
              <Form.Control type="text" value={applicantDetails.applicationType} disabled />
            </Form.Group>

            <Form.Group as={Col} lg={8}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={applicantDetails.name} disabled />
            </Form.Group>

            <h3>Licence Details</h3>

            <Form.Group as={Col} lg={8}>
              <Form.Label>Licence Name</Form.Label>
              <Form.Control type="text" value={licenceDetails.licenceName} disabled />
            </Form.Group>

            <Form.Group as={Col} lg={4}>
              <Form.Label>Licence No.</Form.Label>
              <Form.Control type="text" value={state.licenceNumber} onChange={e => setState({ ...state, licenceNumber: e.target.value })} />
              <Form.Text>20 characters maximum</Form.Text>
            </Form.Group>

            <Form.Group as={Col} lg={12}>
              <Form.Label>Licence Issuance</Form.Label>
              <FormCheck name="licenceIssuance" label="No licence file required" type="radio" onChange={e => setState({ ...state, licenceIssuance: "noLicence" })} />
              <FormCheck name="licenceIssuance" label="Upload existing licence file" type="radio" onChange={e => setState({ ...state, licenceIssuance: "uploadLicence" })} />
            </Form.Group>

            {state.licenceIssuance == "uploadLicence" &&
              <Form.Group as={Col} lg={12}>
                <Form.Label>Licence File</Form.Label>
                <FileUpload controlId="licenceFile" onChangeFile={() => { }}>Choose a file</FileUpload>
                <Form.Text>Allowed file types: PDF, JPEG, PNG.<br />Only 1 file at 10 MB or less</Form.Text>
              </Form.Group>
            }

            <Row>
              <Form.Group as={Col} lg={4}>
                <Form.Label>Issue Date</Form.Label>
                <DatePicker initialValue={state.issueDate} displayDate={state.issueDate} />
              </Form.Group>

              <Form.Group as={Col} lg={4}>
                <Form.Label>Start Date</Form.Label>
                <DatePicker initialValue={state.startDate} displayDate={state.startDate} />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} lg={4}>
                <Form.Label>Licence Validity</Form.Label>
                <Form.Select value={state.licenceValidity} onChange={e => setState({ ...state, licenceValidity: e.target.value })}>
                  <option>6 months</option>
                  <option>1 year</option>
                  <option>2 years</option>
                  <option>Other</option>
                  <option>No expiry</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} lg={4}>
                <Form.Label>Valid Until</Form.Label>
                <DatePicker initialValue={state.validUntil} displayDate={state.validUntil} />
              </Form.Group>
            </Row>

            <Form.Group as={Col} lg={12}>
              <Form.Label>Additional Documents (Optional)</Form.Label>
              <FileUpload controlId="additionalDocuments" onChangeFile={() => { }}>Choose a file</FileUpload>
              <Form.Text>Allowed file types: PDF, JPEG, PNG.<br />Only 1 file at 10 MB or less</Form.Text>
            </Form.Group>

            <Form.Group as={Col} lg={12}>
              <Form.Label>Agency Message to Applicant (Optional)</Form.Label>
              <Form.Text>This will be seen by the applicant. Please do not enter confidential information here.</Form.Text>
              <Form.Control as="textarea" placeholder="Enter further instructions or details for applicant here" />
              <Form.Text>500 characters maximum</Form.Text>
            </Form.Group>

            <Form.Group as={Col} lg={12}>
              <Form.Label>Internal Remarks (Optional)</Form.Label>
              <Form.Text>This is for internal use only, and will not be seen by the applicant.</Form.Text>
              <Form.Control as="textarea" />
              <Form.Text>500 characters maximum</Form.Text>
            </Form.Group>

            <Form.Group as={Col} lg={12}>
              <Form.Label>Internal Document (Optional)</Form.Label>
              <FileUpload controlId="internalDocument" onChangeFile={() => { }}>Choose a file</FileUpload>
              <Form.Text>This document is for internal use only, and will not be seen by the applicant. Allowed file types: PDF, JPEG, PNG.<br />Only 1 file at 10 MB or less</Form.Text>
            </Form.Group>

            <Col lg={12}>
              <Alert variant="warning">
                <i className="bi bi-exclamation-circle me-4"></i>
                <div>
                  <Alert.Heading>Licence details cannot be edited after application approval.</Alert.Heading>
                  <p>Please review all information carefully before proceeding.</p>
                </div>
              </Alert>
            </Col>

            <Button type="submit">Approve Application</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
