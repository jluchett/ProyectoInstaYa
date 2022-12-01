import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BarraNavegacion from './Navbar';

export default function Register() {
    return (
        <>
            <BarraNavegacion menu1="Login" />
            <Container className='crear'>

                <h2>Registro de Usuarios</h2>
                <Form autoComplete='off'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tus Nombres" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tus Apellidos" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu email" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Acepto la politica de privacidad de datos personales." />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>
                </Form>
            </Container>
        </>
    )
}