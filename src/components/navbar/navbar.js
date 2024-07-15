import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

const NavbarDemonSlayer = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Toggle className="ms-auto me-4" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto justify-content-center align-items-center">
                    <Nav.Link className="p-3" href="#inicio">Início</Nav.Link>

                    <Nav.Link className="p-3" href="#anime">Anime</Nav.Link>
                    {/*
                    <NavDropdown className="nav-dropdown p-3" title="Anime" id="basic-nav-dropdown">
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
                    */}

                    <Nav.Link className="p-3" href="#manga">Mangá</Nav.Link>
                    {/*
                    <NavDropdown className="nav-dropdown p-3" title="Mangá" id="basic-nav-dropdown">
                        <NavDropdown.Item>Informações</NavDropdown.Item>
                        <NavDropdown.Item>Diferenças entre o Mangá e o Anime</NavDropdown.Item>
                        <NavDropdown.Item>Making Of</NavDropdown.Item>
                    </NavDropdown> 
                    */}
                    
                    <Nav.Link className="p-3" href="#filmes">Filmes</Nav.Link>
                    {/*
                    <NavDropdown className="nav-dropdown p-3" title="Filmes" id="basic-nav-dropdown">
                        <NavDropdown.Item>Mugen Train</NavDropdown.Item>
                        <NavDropdown.Item>Próximos lançamentos</NavDropdown.Item>
                    </NavDropdown>
                    */}

                    <Nav.Link className="p-3" href="#sobre">Sobre</Nav.Link>
                    {/*
                    <NavDropdown className="nav-dropdown p-3" title="Sobre" id="basic-nav-dropdown">
                        <NavDropdown.Item>História do Autor</NavDropdown.Item>
                        <NavDropdown.Item>Equipe de Produção</NavDropdown.Item>
                    </NavDropdown>
                    */}
                    
                    <Nav.Link className="p-3" href="#contato">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarDemonSlayer;