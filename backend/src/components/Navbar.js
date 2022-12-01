import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


export default function BarraNavegacion({ menu1, menu2 }) {
    return (
        <Navbar collapseOnSelect bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">InstaYá</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='navbar-nav'>
                        {menu2 &&
                        <NavLink className='nav-link' to={'/crear'}>{menu2}</NavLink>
                         }
                        <NavLink className='nav-link' to={"/" + (menu1 == "Cerrar sesion" ? " " : menu1)}>{menu1}</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}