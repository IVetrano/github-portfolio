import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../style.css";
import "./Home.css";
import ilustracion from "../../assets/ilustracion.png";

function Home() {
    return (
        <Container className="two-column-layout">
            <Row>
                <Col md={6}>
                    <p className="hola">¡Hola!, soy</p>
                    <p className="nombre">Ignacio Vetrano</p>
                    <p className="text">Estudiante de Ingenieria en informatica</p>
                </Col>
                <Col md={6}>
                    <Image src={ilustracion} alt="Imagen aquí" fluid />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;