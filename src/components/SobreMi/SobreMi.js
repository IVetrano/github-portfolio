import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../style.css";
import "./SobreMi.css";
import photo from "../../assets/foto.png";

/* Importo iconos */
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


function SobreMi() {
    return (
        <Container className="two-column-layout">
            <Row>
                <Col md={6}>
                    <p className="texto">
                        Soy Ignacio Vetrano, estudiante del cuarto año de Ingenieria
                        en Informatica en la Universidad de Buenos Aires.
                    </p>
                    <p className="texto2">
                        A lo largo de mi carrera aprendí a utilizar las siguientes tecnologias:
                    </p>
                    <div>
                        <p className="iconos">
                            <FaC className="icono" title="Lenguaje C"/>
                            <TbBrandCpp className="icono" title="Lenguaje C++"/>
                            <FaPython className="icono" title="Python"/>
                            <FaJava className="icono" title="Java"/>
                            <SiApachemaven className="icono" title="Maven"/>
                            <FaGitAlt className="icono" title="git"/>
                            <FaGithub className="icono" title="GitHub"/>
                            <FaDocker className="icono" title="Docker"/>
                            <SiUml className="icono" title="UML"/>
                            <SiPandas className="icono" title="Pandas"/>
                            <SiGooglecolab className="icono" title="Google Colab"/>
                            <FaReact className="icono" title="React"/>
                            <FaCss3Alt className="icono" title="CSS"/>
                        </p>
                    </div>
                </Col>
                <Col md={6}>
                    <Image src={photo} alt="Imagen aquí" fluid />
                </Col>
            </Row>
        </Container>
    );
}

export default SobreMi;