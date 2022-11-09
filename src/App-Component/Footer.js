import React from "react";
import '../App.css';

export const Footer = (props) => {
    let footerPosition = {
        position:"fixed",
        bottom:"0",
        width:"100%"
    }
    return (
    <footer className={`pt - 3 mt-4 ${props.mode === 'light' ? 'lightModeBg lightModeColor' : 'darkModeBg darkModeColor' }`} style={footerPosition}>
        <ul className="nav justify-content-center border-bottom ">
            <li className="nav-item"><code href="/" className="nav-link px-2 text-muted">made with <span className="text-danger fs-6">&#10084;</span> by Rushi</code></li>
        </ul>
        <p className="text-center text-muted">© 2022 {props.title}</p>
    </footer>
    )
}