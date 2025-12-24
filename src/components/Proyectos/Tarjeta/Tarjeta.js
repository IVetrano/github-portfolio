import React, { useState } from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Tarjeta.css";
import { FiExternalLink } from "react-icons/fi";

function Tarjeta(props) {
    const { titulo, contenido, imagenSrc, link, tags = [] } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card 
            className="project-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card-image-container">
                <Card.Img 
                    className="card-image" 
                    variant="top" 
                    src={imagenSrc} 
                    alt={titulo}
                />
                <div className={`image-overlay ${isHovered ? 'active' : ''}`}>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-link"
                    >
                        <FiExternalLink className="link-icon" />
                        <span>Ver proyecto</span>
                    </a>
                </div>
            </div>
            <Card.Body className="card-body-custom">
                <Card.Title className="card-title-custom">{titulo}</Card.Title>
                {tags.length > 0 && (
                    <div className="tags-container">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                )}
                <Card.Text className="card-text-custom">{contenido}</Card.Text>
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-view-project"
                >
                    Ver más
                    <FiExternalLink className="btn-icon" />
                </a>
            </Card.Body>
        </Card>
    );
}

export default Tarjeta;