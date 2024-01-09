import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Card, Form, Button, Row, Col } from "react-bootstrap";


function Contacto() {
  const [state, handleSubmit] = useForm("mpzeqdno");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = e => setEmail(e.target.value);
  const handleMessageChange = e => setMessage(e.target.value);
  const handleNameChange = e => setName(e.target.value);

  

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">

      <h1 className="text-center">Contacto</h1>
      
      <Card className="card-contacto, align-items-center" style={{maxWidth:'800px', backgroundColor:"light"}}>
        
        <Card.Body className="align-items-center">
          
          <Form onSubmit={handleSubmit}>

          <Form.Group as={Row} controlId="formPlaintextName">
              <Form.Label column sm="4">
                Nombre
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text" 
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="3">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email" 
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextMessage">
              <Form.Label column sm="4">
                Mensaje
              </Form.Label>
              <Col sm="10">
                <Form.Control as="textarea"
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="text-center">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button variant="primary" type="submit" disabled={state.submitting}>
                  Enviar
                </Button>
                {state.errors.length > 0 && (
                  <p>Error: {state.errors[0].message}</p>
                )}
                {state.succeeded && (
                  <p>Formulario enviado con éxito</p>
                )}
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contacto;
