import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavbarDemonSlayer = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand className="ms-4" href="#inicio">Demon Slayer</Navbar.Brand>
            <Navbar.Toggle className="me-4" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto me-4">
                    <Nav.Link className="mx-1" href="#inicio">Início</Nav.Link>
                    <NavDropdown className="mx-1" title="Anime" id="basic-nav-dropdown">
                        <NavDropdown.Item>Personagens</NavDropdown.Item>
                        <NavDropdown.Item>Os Onis</NavDropdown.Item>
                        <NavDropdown.Item>Os Pilares</NavDropdown.Item>
                        <NavDropdown.Item>Os 12 Kizukis</NavDropdown.Item>
                        <NavDropdown.Item>Muzan</NavDropdown.Item>
                        <NavDropdown.Item>O treinamento</NavDropdown.Item>
                        <NavDropdown.Item>Arcos da História</NavDropdown.Item>
                        <NavDropdown.Item>Curiosidades</NavDropdown.Item>
                        <NavDropdown.Item>Episódios</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="mx-1" title="Mangá" id="basic-nav-dropdown">
                        <NavDropdown.Item>Informações</NavDropdown.Item>
                        <NavDropdown.Item>Diferenças entre o Mangá e o Anime</NavDropdown.Item>
                        <NavDropdown.Item>Making Of</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="mx-1" title="Filmes" id="basic-nav-dropdown">
                        <NavDropdown.Item>Mugen Train</NavDropdown.Item>
                        <NavDropdown.Item>Próximos lançamentos</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="mx-1" title="Sobre" id="basic-nav-dropdown">
                        <NavDropdown.Item>História do Autor</NavDropdown.Item>
                        <NavDropdown.Item>Equipe de Produção</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="mx-1" href="#contato">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarDemonSlayer;