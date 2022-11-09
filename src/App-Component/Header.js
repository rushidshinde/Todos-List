import React from "react";
import logoDark from '../logoDark.png';
import logoLight from '../logoLight.png';

import PropTypes from 'prop-types';

export const Header = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg ${props.mode === 'light' ? 'lightModeBg lightModeColor' : 'darkModeBg darkModeColor' }`}>
            <div className="container-fluid">
                <span className={`navbar-brand fw-bold ${props.mode === 'light' ? 'lightModeColor' : 'darkModeColor'}`} ><img width='30px' height='auto' src={props.mode === 'light' ? logoLight : logoDark} alt={props.title}/> {props.title}</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/*<a className="nav-link" href="/">Home</a>*/}
                        </li>
                    </ul>
                    {props.searchBar ? <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : ""}
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="darkModeSwitch"/>
                        <label className="form-check-label" htmlFor="darkModeSwitch"><i className={props.mode === 'light' ? 'bi bi-moon-fill' : 'bi bi-brightness-high-fill'}></i> {props.mode === 'light' ? 'Dark Mode' : 'Light Mode' }</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    searchBar: true,
    title: "title not set"
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
}