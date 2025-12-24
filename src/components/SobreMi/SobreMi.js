import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../style.css";
import "./SobreMi.css";
import photo from "../../assets/foto.png";

/* Importo iconos */
import { FaLinux } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiUml } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { SiRubysinatra } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiCucumber } from "react-icons/si";
import { FaGitlab } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { MdSpeed } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { AiOutlineDatabase } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";

function SobreMi() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const technologies = [
        { icon: <FaLinux className="tech-icon" />, name: "Linux" },
        { icon: <FaC className="tech-icon" />, name: "C" },
        { icon: <TbBrandCpp className="tech-icon" />, name: "C++" },
        { icon: <FaPython className="tech-icon" />, name: "Python" },
        { icon: <FaJava className="tech-icon" />, name: "Java" },
        { icon: <SiApachemaven className="tech-icon" />, name: "Maven" },
        { icon: <FaGitAlt className="tech-icon" />, name: "Git" },
        { icon: <FaGithub className="tech-icon" />, name: "GitHub" },
        { icon: <FaGitlab className="tech-icon" />, name: "GitLab" },
        { icon: <FaDocker className="tech-icon" />, name: "Docker" },
        { icon: <SiUml className="tech-icon" />, name: "UML" },
        { icon: <SiPandas className="tech-icon" />, name: "Pandas" },
        { icon: <SiGooglecolab className="tech-icon" />, name: "Google Colab" },
        { icon: <FaReact className="tech-icon" />, name: "React" },
        { icon: <FaCss3Alt className="tech-icon" />, name: "CSS" },
        { icon: <DiRuby className="tech-icon" />, name: "Ruby" },
        { icon: <SiRubysinatra className="tech-icon" />, name: "Sinatra" },
        { icon: <SiFastapi className="tech-icon" />, name: "FastAPI" },
        { icon: <SiFlask className="tech-icon" />, name: "Flask" },
        { icon: <SiCucumber className="tech-icon" />, name: "Cucumber" },
        { icon: <SiJira className="tech-icon" />, name: "Jira" },
        { icon: <SiMysql className="tech-icon" />, name: "MySQL" },
        { icon: <SiPostgresql className="tech-icon" />, name: "PostgreSQL" },
    ];

    const methodologies = [
        { icon: <MdSpeed className="tech-icon" />, name: "SCRUM" },
        { icon: <SiCucumber className="tech-icon" />, name: "BDD" },
        { icon: <BiCodeBlock className="tech-icon" />, name: "TDD" },
        { icon: <MdSpeed className="tech-icon" />, name: "Concurrencia" },
        { icon: <BiCodeBlock className="tech-icon" />, name: "Sockets" },
        { icon: <BiCodeBlock className="tech-icon" />, name: "Threads" },
        { icon: <AiOutlineDatabase className="tech-icon" />, name: "Algoritmos" },
        { icon: <AiOutlineDatabase className="tech-icon" />, name: "Ingeniería de Datos" },
        { icon: <GiArtificialIntelligence className="tech-icon" />, name: "Machine Learning" },
        { icon: <AiOutlineDatabase className="tech-icon" />, name: "Visualización" },
    ];

    return (
        <Container className="sobremi-container">
            <div className="sobremi-background"></div>
            <Row className={`sobremi-content ${isVisible ? 'visible' : ''}`}>
                <Col md={6} className="text-section">
                    <div className="content-wrapper">
                        <h2 className="section-title">
                            <span className="title-highlight">Sobre</span> mí
                        </h2>
                        <p className="about-text">
                            Soy <span className="text-highlight">Ignacio Vetrano</span>, estudiante del último año de 
                            <span className="text-highlight"> Ingeniería en Informática</span> en la 
                            Universidad de Buenos Aires.
                        </p>
                        <p className="about-text-secondary">
                            Apasionado por crear soluciones innovadoras y eficientes. 
                            Mi experiencia abarca desde desarrollo backend robusto hasta 
                            interfaces frontend modernas y responsivas.
                        </p>
                        
                        <div className="skills-intro">
                            <h3 className="skills-title">Tecnologías y Herramientas</h3>
                            <p className="skills-description">
                                A lo largo de mi carrera he trabajado con:
                            </p>
                        </div>
                        
                        <div className="tech-grid">
                            {technologies.map((tech, index) => (
                                <div 
                                    key={index} 
                                    className="tech-card"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {tech.icon}
                                    <span className="tech-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="skills-intro" style={{ marginTop: '40px' }}>
                            <h3 className="skills-title">Metodologías y Conocimientos</h3>
                            <p className="skills-description">
                                Experiencia en:
                            </p>
                        </div>
                        
                        <div className="tech-grid">
                            {methodologies.map((method, index) => (
                                <div 
                                    key={index} 
                                    className="tech-card methodology-card"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {method.icon}
                                    <span className="tech-name">{method.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col md={6} className="image-section">
                    <div className="profile-image-container">
                        <div className="image-decoration"></div>
                        <div className="profile-image-wrapper">
                            <Image src={photo} alt="Ignacio Vetrano" fluid className="profile-image" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SobreMi;