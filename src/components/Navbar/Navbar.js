// Importo componentes
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Importo CSS
import "./Navbar.css";

// Importo iconos
import { IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar 
            expand="lg" 
            data-bs-theme="dark" 
            className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
            fixed="top"
        >
        	<Container>
        		<Navbar.Brand href="/github-portfolio" className="logoIV">
                    <span className="logo-bracket">&lt;</span>
                    IVetrano
                    <span className="logo-bracket">/&gt;</span>
                </Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-collapse" />
				<Navbar.Collapse id="navbar-collapse" >
        			<Nav className="ms-auto">
                        <Nav.Link href="/github-portfolio" className="nav-link-custom">
                            <AiOutlineHome className="iconoBoton"/> 
                            <span>Inicio</span>
                        </Nav.Link>
            			<Nav.Link href="/github-portfolio/sobremi" className="nav-link-custom">
                            <AiOutlineUser className="iconoBoton"/> 
                            <span>Sobre mí</span>
                        </Nav.Link>
            			<Nav.Link href="/github-portfolio/proyectos" className="nav-link-custom">
                            <IoBriefcaseOutline className="iconoBoton"/> 
                            <span>Proyectos</span>
                        </Nav.Link>
            			<Nav.Link href="/github-portfolio/contacto" className="nav-link-custom">
                            <MdOutlineMessage className="iconoBoton"/> 
                            <span>Contacto</span>
                        </Nav.Link>
						<Nav.Link 
                            href="https://raw.githubusercontent.com/IVetrano/github-portfolio/main/Curriculum-vitae.pdf" 
                            className="botonCV"
                        >
                            <CgFileDocument className="iconoBoton"/> 
                            <span>CV</span>
                        </Nav.Link>
          			</Nav>
				</Navbar.Collapse>
        	</Container>
      	</Navbar>
    );
}

export default NavBar;