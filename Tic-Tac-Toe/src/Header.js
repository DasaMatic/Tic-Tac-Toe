import React from 'react';
import './index.css';
import {
    Link
} from 'react-router-dom';



function Header() {
    return (




        <header className="root">




            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"></link>


            <div className="contrainer">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/"><h3>Tic-Tac-Toe</h3></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link" href="/Game"><i className="fas fa-gamepad"></i> Game</a>
                            <a className="nav-link" href="#">|</a>
                            <a className="nav-item nav-link" href="/Contact"><i className="fas fa-user"></i> Contact</a>
                        </div>
                    </div>
                </nav>
            </div>


        </header>
    )
}

export default Header;