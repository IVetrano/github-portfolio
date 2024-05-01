import React from "react";
import { Container } from "react-bootstrap";
import "../style.css";
import "./Contacto.css";

import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Contacto() {
    return (
        <Container className="contenedor">
            <p>Podes contactarme a traves de los siguientes medios:</p>
            <p><CiPhone /> (+54) 11 5669-9587</p>
            <p><CiMail /> ignaciovetrano00@gmail.com</p>
            <a href="https://github.com/IVetrano" style={{ display: "block", marginBottom: "15px"}}><FaGithub /> IVetrano</a>
            <a href="https://www.linkedin.com/in/ignacio-vetrano-906a01221/" style={{ display: "block" }}><CiLinkedin /> Ignacio Vetrano</a>
        </Container>
    );
}

export default Contacto;