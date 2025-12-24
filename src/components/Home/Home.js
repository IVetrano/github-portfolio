import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../style.css";
import "./Home.css";
import ilustracion from "../../assets/ilustracion.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const roles = [
    "Desarrollador Full Stack",
    "Estudiante de Ingeniería",
    "Apasionado por la Tecnología"
];

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);
    
    const [roleIndex, setRoleIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Container className="home-container">
            <div className="animated-background"></div>
            <Row className="home-content">
                <Col md={6} className={`text-column ${isVisible ? 'fade-in-left' : ''}`}>
                    <div className="greeting-section">
                        <p className="hola">👋 ¡Hola!, soy</p>
                        <h1 className="nombre">
                            <span className="nombre-text">Ignacio Vetrano</span>
                        </h1>
                        <div className="role-container">
                            <p className="role-text" key={roleIndex}>
                                {roles[roleIndex]}
                            </p>
                        </div>
                        <p className="descripcion">
                            Transformando ideas en código y creando experiencias digitales únicas.
                            Siempre en búsqueda de nuevos desafíos.
                        </p>
                        <div className="social-links">
                            <a href="https://github.com/IVetrano" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/ignacio-vetrano-906a01221/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:ignaciovetrano00@gmail.com" className="social-icon">
                                <CiMail />
                            </a>
                        </div>
                        <div className="cta-buttons">
                            <a href="/github-portfolio/proyectos" className="btn-primary-custom">
                                Ver Proyectos
                            </a>
                            <a href="https://raw.githubusercontent.com/IVetrano/github-portfolio/main/Curriculum-vitae.pdf" className="btn-secondary-custom" target="_blank" rel="noopener noreferrer">
                                Descargar CV
                            </a>
                            <a href="/github-portfolio/contacto" className="btn-secondary-custom">
                                Contactar
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={6} className={`image-column ${isVisible ? 'fade-in-right' : ''}`}>
                    <div className="image-container">
                        <div className="floating-image">
                            <Image src={ilustracion} alt="Ilustración de Ignacio Vetrano" fluid />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;