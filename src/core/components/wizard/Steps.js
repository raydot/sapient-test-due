import React, { useState, PropTypes } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const Steps = ({ wizardContext, onAction, whichStep }) => {
  console.log("steps", wizardContext);
  //const [action, setAction] = useState(0);

  const Step1 = (
    <Container>
      <h3>Enter the sender's address:</h3>
      <Form className='form-horizontal'>
        <Row>
          <Col>
            <Form.Control placeholder="Sender's Name"></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control placeholder="Sender's Street Address"></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Form.Control placeholder='City'></Form.Control>
          </Col>
          <Col lg={4}>
            <Form.Control placeholder='State'></Form.Control>
          </Col>
          <Col lg={4}>
            <Form.Control placeholder='Zip'></Form.Control>
          </Col>
        </Row>

        <Button variant='primary' onClick={() => onAction(2)}>
          Next
        </Button>
      </Form>
    </Container>
  );

  const Step2 = (
    <Container>
      <h3>Enter the receiver's address:</h3>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Sender's Name"></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control placeholder="Sender's Street Address"></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Form.Control placeholder='City'></Form.Control>
          </Col>
          <Col lg={4}>
            <Form.Control placeholder='State'></Form.Control>
          </Col>
          <Col lg={4}>
            <Form.Control placeholder='Zip'></Form.Control>
          </Col>
        </Row>
      </Form>
      <Button variant='primary' onClick={() => onAction(1)}>
        Previous
      </Button>{" "}
      <Button variant='primary' onClick={() => onAction(2)}>
        Next
      </Button>
    </Container>
  );

  const Step3 = (
    <Container>
      <h3>Enter the package weight:</h3>
      <Form>
        <Row>
          <Col lg={12}>
            <Form.Control placeholder='Weight in Pounds'></Form.Control>
          </Col>
        </Row>
      </Form>
      <Button variant='primary' onClick={() => onAction(1)}>
        Previous
      </Button>{" "}
      <Button variant='primary' onClick={() => onAction(2)}>
        Next
      </Button>
    </Container>
  );

  const Step4 = (
    <Container>
      <h3>Please choose a shipping option</h3>
      <Form>
        <div className='radio'>
          <label>
            <input type='radio' value='ground' checked={true} /> Ground
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='priority' /> Priority
          </label>
        </div>
      </Form>
      <Button variant='primary' onClick={() => onAction(1)}>
        Previous
      </Button>{" "}
      <Button variant='primary' onClick={() => onAction(2)}>
        Next
      </Button>
    </Container>
  );

  const Step5 = (
    <Container>
      <h3>
        Please Confirm the following information. <br />
        Click "Previous" if you need to make changes or click "Create Label" if
        you are done.{" "}
      </h3>
      <Button onClick={() => onAction(1)}>Previous</Button>{" "}
      <Button onClick={() => onAction(3)}>Create Label</Button>
    </Container>
  );

  switch (whichStep) {
    case 0:
      return <div>{Step1}</div>;
      break;
    case 1:
      return <div>{Step2}</div>;
      break;
    case 2:
      return <div>{Step3}</div>;
      break;
    case 3:
      return <div>{Step4}</div>;
      break;
    case 4:
      return <div>{Step5}</div>;
      break;
    default:
      return <div>You broke it!</div>;
  }
};

Steps.propTypes = {
  //wizardContext: PropTypes.object.isRequired,
  //onAction: PropTypes.func.isRequired,
};

export default Steps;
