import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import Tarjeta from './Tarjeta/Tarjeta';
import worms from "../../assets/worms.jpg";
import algothief from "../../assets/algothief.jpg";
import pytris from "../../assets/tetris.png";
import portfolio from "../../assets/imagen_prueba.png";
import ivetranoTasks from "../../assets/ivetrano_tasks.png";
import turneroHospitalario from "../../assets/turnero_hospital.png";
import clubManager from "../../assets/club_manager.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Proyectos.css";

function Proyectos() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      titulo: "Worms Remake",
      contenido: "Un remake desarrollado en C++ del conocido juego Worms, un juego multijugador en línea, donde controlás un poderoso grupo de gusanos armados hasta los dientes, cuyo único objetivo es la destrucción.",
      imagenSrc: worms,
      link: "https://manusarivi.github.io/taller-tp-worms/",
      tags: ["C++", "Sockets", "Threads", "Multijugador", "Gaming"]
    },
    {
      titulo: "Club Manager",
      contenido: "Aplicación web fullstack para la gestión de clubes deportivos, desarrollada con React en el frontend y Python con FastAPI en el backend. Permite a los administradores gestionar socios, canchas, reservas y pagos (con integración de Mercado Pago), proporcionando una interfaz intuitiva para la administración eficiente del club.",
      imagenSrc: clubManager,
      link: "https://ivetrano.github.io/club_manager_doc/",
      tags: ["React", "FastAPI", "Fullstack"]
    },
    {
      titulo: "Ivetrano Tasks",
      contenido: "Aplicación fullstack para gestionar tareas, desarrollada con React en el frontend y Python con Flask en el backend. Permite a los usuarios crear, editar, eliminar y marcar tareas como completadas, proporcionando una interfaz intuitiva para la gestión eficiente del tiempo. Además de un calendario interactivo para visualizar las tareas programadas por fecha.",
      imagenSrc: ivetranoTasks,
      link: "https://ivetrano.github.io/ivetrano_tasks_front/",
      tags: ["React", "Flask", "Calendar"]
    },
    {
      titulo: "Turnero Hospitalario",
      contenido: "Sistema dividido en dos componentes: API REST, desarrollada en Ruby/Sinatra, que gestiona médicos, pacientes, especialidades y turnos. Y un Bot de Telegram, que actúa como interfaz para pacientes, permitiendo registrarse, consultar y reservar turnos médicos de manera simple e intuitiva. El proyecto fue diseñado bajo el enfoque BDD (Behavior Driven Development), utilizando Cucumber/Gherkin para definir y validar las historias de usuario del sistema.",
      imagenSrc: turneroHospitalario,
      link: "https://ivetrano.github.io/Turnero-Hospitalario/",
      tags: ["Ruby", "Sinatra", "Telegram Bot"]
    },
    {
      titulo: "Where In The World",
      contenido: "Un remake desarrollado en Java de Where in the World Is Carmen Sandiego? un juego de aventuras donde el jugador asume el papel de un detective novato que trabaja para la ACME Detective Agency. La misión principal del jugador es capturar a Carmen Sandiego, una astuta ladrona internacional, y su banda de criminales conocida como V.I.L.E. (Villains' International League of Evil).",
      imagenSrc: algothief,
      link: "https://ivetrano.github.io/WhereInTheWorld/",
      tags: ["Java", "Gaming", "Adventure"]
    },
    {
      titulo: "Pytris",
      contenido: "Un remake desarrollado en Python del conocido juego Tetris, donde piezas de diferentes formas caen desde la parte superior de la pantalla, y el objetivo es rotar y colocar estas piezas de manera estratégica para completar líneas horizontales sin dejar espacios vacíos.",
      imagenSrc: pytris,
      link: "https://ivetrano.github.io/Pytris/",
      tags: ["Python", "Gaming", "Classic"]
    },
    {
      titulo: "Portfolio",
      contenido: "Un portfolio desarrollado en JavaScript con React para mostrar proyectos y brindar información. (Es el portfolio que se está viendo en este momento).",
      imagenSrc: portfolio,
      link: "https://github.com/IVetrano/github-portfolio",
      tags: ["React", "Portfolio", "Web"]
    }
  ];

  return (
    <div className="proyectos-page">
      <Container className="proyectos-container">
        <div className="proyectos-header">
          <h2 className="proyectos-title">
            Mis <span className="title-highlight">Proyectos</span>
          </h2>
          <p className="proyectos-subtitle">
            Una colección de proyectos que demuestran mis habilidades y experiencia
          </p>
        </div>
        
        <div className={`proyectos-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="proyecto-wrapper"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Tarjeta {...project} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Proyectos;
