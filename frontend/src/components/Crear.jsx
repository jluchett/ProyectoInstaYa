import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Login.css'
import BarraNavegacion from './Navbar';

export default function Crear() {
  return (
    <>
      <BarraNavegacion menu1="Cerrar sesion" />
      <Container className='crear'>
        <Row >
          <Form>
            <h2>Registro de Ordenes - Recogida</h2>
            <hr />


            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className='label'>Fecha de Inicio</Form.Label>
                <Form.Control type="date" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Hora</Form.Label>
                <Form.Control type="time" placeholder="Password" />
              </Form.Group>
            </Row>


            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Label>Estado</Form.Label>
                <Form.Select defaultValue="Seleccionar...">
                  <option>Seleccionar...</option>
                  <option>Guardado</option>
                  <option>Cancelado</option>
                  <option>Cumplido</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              </Form.Group>

            </Row>

            <Row className="mb-4" id='columna'>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label >Largo</Form.Label>
                <Form.Control placeholder="cm" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Ancho</Form.Label>
                <Form.Control type="text" placeholder="cm" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Alto</Form.Label>
                <Form.Control type="text" placeholder="cm" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Peso</Form.Label>
                <Form.Control type="text" placeholder="kg" />
              </Form.Group>
            </Row>


            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Direccion de Recogida</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Ciudad de Recogida</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nombre del Destinatario</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Cedula/Nit del Destinatario</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Direccion de Entrega</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Ciudad de Entrega</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>
          </Form>
        </Row>
      </Container>
      <br />
      <Button variant="primary" type="submit" className='button'>
        Crear Orden
      </Button>

    </>
  );
}