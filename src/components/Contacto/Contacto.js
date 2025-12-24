import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css";
import "./Contacto.css";

import { CiPhone, CiMail, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Contacto() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="contacto-page">
            <Container className="contacto-container">
                <div className={`contacto-content ${isVisible ? 'visible' : ''}`}>
                    <Row>
                        <Col lg={6} className="contacto-info-section">
                            <div className="info-wrapper">
                                <h2 className="contacto-main-title">
                                    ¡Conectemos <span className="title-highlight">Juntos!</span>
                                </h2>
                                <p className="contacto-main-description">
                                    Si tenés un proyecto en mente, querés charlar sobre tecnología 
                                    o simplemente conectar, no dudes en contactarme. Estoy siempre 
                                    abierto a nuevas oportunidades y colaboraciones.
                                </p>
                                
                                <div className="info-highlight-box">
                                    <h3 className="info-subtitle">Disponible para</h3>
                                    <ul className="availability-list">
                                        <li>✓ Proyectos Freelance</li>
                                        <li>✓ Colaboraciones</li>
                                        <li>✓ Oportunidades Laborales</li>
                                        <li>✓ Consultorías</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        
                        <Col lg={6} className="contacto-details-section">
                            <div className="contact-cards">
                                <div className="contact-card">
                                    <div className="card-icon-wrapper">
                                        <CiMail className="card-icon" />
                                    </div>
                                    <div className="card-content">
                                        <h4 className="card-title">Email</h4>
                                        <a href="mailto:ignaciovetrano00@gmail.com" className="card-link">
                                            ignaciovetrano00@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="card-icon-wrapper">
                                        <CiPhone className="card-icon" />
                                    </div>
                                    <div className="card-content">
                                        <h4 className="card-title">Teléfono</h4>
                                        <p className="card-text">(+54) 11 5669-9587</p>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="card-icon-wrapper">
                                        <HiOutlineLocationMarker className="card-icon" />
                                    </div>
                                    <div className="card-content">
                                        <h4 className="card-title">Ubicación</h4>
                                        <p className="card-text">Buenos Aires, Argentina</p>
                                    </div>
                                </div>

                                <div className="social-section">
                                    <h4 className="social-title">Redes Sociales</h4>
                                    <div className="social-links-grid">
                                        <a
                                            href="https://github.com/IVetrano"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link-card"
                                        >
                                            <FaGithub className="social-link-icon" />
                                            <span>GitHub</span>
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/in/ignacio-vetrano-906a01221/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link-card"
                                        >
                                            <CiLinkedin className="social-link-icon" />
                                            <span>LinkedIn</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Contacto;
