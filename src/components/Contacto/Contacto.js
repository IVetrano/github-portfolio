import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css";
import "./Contacto.css";

import { CiPhone, CiMail, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Contacto() {
    return (
        <Container className="two-column-layout contacto-layout">
            <Row>
                <Col md={6}>
                    <div className="contacto-info">
                        <h2 className="contacto-titulo">Contacto</h2>
                        <p className="contacto-descripcion">
                            Si querés charlar sobre proyectos, oportunidades o simplemente conectar, estos son mis medios de contacto:
                        </p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="contacto-items">
                        <div className="contacto-item">
                            <CiPhone className="icono_contacto" />
                            <span>(+54) 11 5669-9587</span>
                        </div>

                        <div className="contacto-item">
                            <CiMail className="icono_contacto" />
                            <span>ignaciovetrano00@gmail.com</span>
                        </div>

                        <a
                            href="https://github.com/IVetrano"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contacto-item enlace"
                        >
                            <FaGithub className="icono_contacto" />
                            <span>IVetrano</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ignacio-vetrano-906a01221/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contacto-item enlace"
                        >
                            <CiLinkedin className="icono_contacto" />
                            <span>Ignacio Vetrano</span>
                        </a>
                    </div>
                </Col>
            </Row>
            

            
        </Container>
    );
}

export default Contacto;
