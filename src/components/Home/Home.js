import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css";
import "./Home.css";
import photo from "../../assets/imagen_prueba.png";

function Home() {
    return (
        <section>
            <Container id="home">
                <Row>
                    <Col md={7}>
                        <h1 className="text">
                            ¡Hola!, soy
                        </h1>

                        <h1 className="name">
                            Ignacio Vetrano
                        </h1>

                        <h1 className="text">
                            Estudiante de Ingenieria en informatica
                        </h1>
                    </Col>

                    <Col md={5} style={{ paddingBottom: 20 }}>
                        <img
                            src={photo}
                            alt="Mi foto"
                            className="img-fluid"
                            style={{ maxHeight: "450px"}}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;