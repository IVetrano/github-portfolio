// Importo componentes
import React from "react";
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

function NavBar() {
    return (
        <Navbar bg="transparent" expand="sm" data-bs-theme="dark">
        	<Container>
        		<Navbar.Brand href="/github-portfolio" className="logoIV">IVetrano</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-collapse" />
				<Navbar.Collapse id="navbar-collapse" >
        			<Nav>
            			<Nav.Link href="/github-portfolio/sobremi"><AiOutlineUser className="iconoBoton"/> Sobre mí</Nav.Link>
            			<Nav.Link href="/github-portfolio/proyectos"><IoBriefcaseOutline className="iconoBoton"/> Proyectos</Nav.Link>
            			<Nav.Link href="/github-portfolio/contacto"><MdOutlineMessage className="iconoBoton"/> Contacto</Nav.Link>
						<Nav.Link href="https://github.com/IVetrano/github-portfolio/raw/master/Curriculum vitae 2024.pdf" className="botonCV"><CgFileDocument className="iconoBoton"/> CV</Nav.Link>
          			</Nav>
				</Navbar.Collapse>
        	</Container>
      	</Navbar>
    );
}

export default NavBar;