import React from "react";

import logo from "../../img/logo.png"

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid d-flex justify-content-around">
                <a className="navbar-brand" href="https://es.wikipedia.org/wiki/Minions">
                    <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top" />
                    MINIONS
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://minions.fandom.com/es/wiki/Minions" target="blank">Acerca de</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.minijuegos.com/juego/minion-golf" target="blank">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mailto: minions@gru.com">Contáctanos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;
