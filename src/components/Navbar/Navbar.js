// Importo componentes
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

// Importo CSS
import "./Navbar.css";

// Importo iconos
import { IoBriefcaseOutline } from "react-icons/io5";
import {
    AiOutlineHome,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineMessage } from "react-icons/md"

function NavBar() {
//function Navbar({ scrollTo }) {
    // Control para cambiar transparencia al scrollear
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    // Cada vez que se scrollee, se llamara a la funcion "scrollHandler" antes definida
    window.addEventListener("scroll", scrollHandler);

/*
    // Para Scrollear a la seccion que se toca:
    function scrollHome() {
        scrollTo("Home");
    }

    function scrollAboutMe() {
        scrollTo("AboutMe");
    }

    function scrollProjects() {
        scrollTo("Projects");
    }
*/
    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand /*onClick={scrollHome}*/ className="logo">
                    IVetrano
                </Navbar.Brand>
            </Container>

        </Navbar>
    );
}

export default NavBar;