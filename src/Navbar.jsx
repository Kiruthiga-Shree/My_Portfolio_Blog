import React from 'react'
import pdf from './assets/Resume.pdf'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { BrowserRouter as Router, Switch, 
//     Route, Redirect,} from "react-router-dom";
export const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary nav fixed">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#hero">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skillset</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <span className="git">
                             <a href={pdf} download="My_Resume.pdf">Resume<img src="https://iihl.org/wp-content/uploads/2020/02/download-icon-white-png-1.png" alt="downloadicon" className='download' /></a>
                            <a href="https://github.com/Kiruthiga-Shree"><img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="github" className='giticon' /></a>
                            <a href="https://www.linkedin.com/in/kiruthiga-shree-3a791220b"><img src="https://icon-library.com/images/linkedin-icon-white/linkedin-icon-white-9.jpg" alt="linkedin" className='linkedin'/></a>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}
