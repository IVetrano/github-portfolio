import React from 'react';
import { Carousel } from "react-bootstrap"
import Tarjeta from './Tarjeta/Tarjeta';
import worms from "../../assets/worms.jpg";
import algothief from "../../assets/algothief.jpg"
import pytris from "../../assets/tetris.png"
import portfolio from "../../assets/imagen_prueba.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Proyectos.css"

function Proyectos() {
  return (
    <Carousel>
      <Carousel.Item>
      <Tarjeta
          titulo="Worms Remake"
          contenido="Un remake desarrollado en C++ del conocido juego Worms, 
                    un juego multijugador en linea, donde controlás
                    un poderoso grupo de gusanos armados
                    hasta los dientes, cuyo único objetivo es la destruccion."
          imagenSrc={worms}
          link="https://manusarivi.github.io/taller-tp-worms/"
      />
      </Carousel.Item>
      <Carousel.Item>
        <Tarjeta
          titulo="Where In The World"
          contenido="Un remake desarrollado en Java de Where in the World Is Carmen Sandiego?
                    un juego de aventuras donde el jugador asume el papel de un detective 
                    novato que trabaja para la ACME Detective Agency. La misión principal 
                    del jugador es capturar a Carmen Sandiego, una astuta ladrona internacional, 
                    y su banda de criminales conocida como V.I.L.E. 
                    (Villains’ International League of Evil)."
          imagenSrc={algothief}
          link="https://ivetrano.github.io/WhereInTheWorld/"
        />
      </Carousel.Item>
      <Carousel.Item>
      <Tarjeta
          titulo="Pytris"
          contenido="Un ramake desarrollado en Python del conocido juego Tetris, donde
                    piezas de diferentes formas caen desde la parte superior de la pantalla,
                    y el objetivo es rotar y colocar estas piezas de manera estratégica para 
                    completar líneas horizontales sin dejar espacios vacíos."
          imagenSrc={pytris}
          link="https://ivetrano.github.io/Pytris/"
      />
      </Carousel.Item>
      <Carousel.Item>
      <Tarjeta
          titulo="Portfolio"
          contenido="Un portfolio desarrollado en JavaScript con React para mostrar proyectos
                    y brindar información. (Es el portfolio que se esta viendo en este momento)."
          imagenSrc={portfolio}
          link="https://github.com/IVetrano/github-portfolio"
      />
      </Carousel.Item>
    </Carousel>
  );
};

export default Proyectos;
