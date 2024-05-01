import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Tarjeta.css";

function Tarjeta(props) {

    const { titulo, contenido, imagenSrc, link } = props;

    return (
        <Card className="tarjeta">
  			<Card.Body className="d-flex cuerpo-tarjeta">
    			<Card.Img className="imagen-tarjeta" variant="top" src={imagenSrc} />
    			<div className="ml-3">
    				<Card.Title className="titulo">{titulo}</Card.Title>
    				<Card.Text className="contenido">{contenido}</Card.Text>
    				<Button 
						style={{backgroundColor: "#036d19", borderColor: "#036d19"}} 
						variant="primary"
						href={link}>Ver mas</Button>
    			</div>
  			</Card.Body>
		</Card>
    );
}

export default Tarjeta;