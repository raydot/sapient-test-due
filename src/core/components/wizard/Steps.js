import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

const Steps = ({ wizardContext, onAction, whichStep }) => {
  const ActionButtons = ( // Not in use right now
    <Container>
      <Button variant='primary' onClick={() => onAction(1)}>
        Previous
      </Button>{" "}
      <Button variant='primary' onClick={() => onAction(2)}>
        Next
      </Button>
    </Container>
  );

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
        <Button
          variant='primary'
          className='elbowRoom'
          onClick={() => onAction(2)}
        >
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
      <Button
        variant='primary'
        className='elbowRoom'
        onClick={() => onAction(1)}
      >
        Previous
      </Button>{" "}
      <Button
        variant='primary'
        className='elbowRoom'
        onClick={() => onAction(2)}
      >
        Next
      </Button>
    </Container>
  );

  const Step3 = (
    <Container>
      <h3>Enter the package weight:</h3>
      <Form>
        <Row>
          <Col lg={4}> </Col>
          <Col lg={4}>
            <Form.Control placeholder='Weight in Pounds'></Form.Control>
          </Col>
          <Col lg={4}> </Col>
        </Row>
      </Form>
      <Button
        variant='primary'
        className='elbowRoom'
        onClick={() => onAction(1)}
      >
        Previous
      </Button>{" "}
      <Button
        variant='primary'
        className='elbowRoom'
        onClick={() => onAction(2)}
      >
        Next
      </Button>
    </Container>
  );

  const [shipping, setShipping] = useState("Ground");
  const shippingButtons = [
    { caption: "Ground", value: "ground" },
    { caption: "Priority", value: "priority" },
  ];
  const Step4 = (
    <Container>
      <h3>Please choose a shipping option</h3>
      <Form>
        <ButtonGroup toggle>
          {shippingButtons.map((radio, index) => (
            <ToggleButton
              variant='secondary'
              key={index}
              type='radio'
              name='radio'
              value={radio.value}
              checked={shipping === radio.value}
              onChange={(e) => setShipping(e.currentTarget.value)}
            >
              {radio.caption}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Form>
      <Button
        variant='primary'
        className='elbowRoom'
        onClick={() => onAction(1)}
      >
        Previous
      </Button>{" "}
      <Button
        variant='primary'
        className='elbowRoom'
        onClick={() => onAction(2)}
      >
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
      <Row>
        <h4>Shipper Information</h4>
        <Row>
          <Col lg={12}>{wizardContext.from.name}</Col>
        </Row>
        <Row>{wizardContext.from.street}</Row>
        <Row>
          {wizardContext.from.city}, {wizardContext.from.state}{" "}
          {wizardContext.from.zip}
        </Row>
      </Row>
      <Row>
        <h4>Receiver Information</h4>
      </Row>
      <Row>{wizardContext.to.name}</Row>
      <Row>{wizardContext.to.street}</Row>
      <Row>
        {wizardContext.to.city}, {wizardContext.to.state} {wizardContext.to.zip}
      </Row>
      <Row>
        <Row>
          <Col lg={6}>Package Weight: {wizardContext.weight} pounds</Col>
          <Col lg={6}>Shipping Option: {wizardContext.shippingOption}</Col>
        </Row>
      </Row>
      <Button className='elbowRoom' onClick={() => onAction(1)}>
        Previous
      </Button>{" "}
      <Button className='elbowRoom' onClick={() => onAction(3)}>
        Create Label
      </Button>
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
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default Steps;
