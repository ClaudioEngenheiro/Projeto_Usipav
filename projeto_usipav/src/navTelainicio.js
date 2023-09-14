import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Row, Col } from 'react-bootstrap';



function NavTelainicio() {
    return (
      <>
        <div>
          <Row>
            <Col xs="2">
              <Button variant="primary">Home</Button>{' '}
            </Col>
            <Col xs="2">
              <Button variant="primary">Voltar</Button>{' '}
            </Col>
            <Col xs="2">
              <Button variant="primary">Tela Atual</Button>{' '}
            </Col>        
            <Col xs="2">
              <Button variant="primary">Gráficos</Button>{' '}
            </Col>
            <Col xs="2">
              <Button variant="primary">Alarmes</Button>{' '}
            </Col>
          </Row>
        </div>
      </>
    )
}

export default NavTelainicio;

