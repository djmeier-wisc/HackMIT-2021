import React from 'react';
import './nav.css';
export const Nav = ({setState}) => {
    return (
        <nav id = 'nav' className = 'nav navbar-dark bg-dark mb-5'>
            <span className = 'nav navbar-brand mb-0 h1 mx-auto'><li><a href="#Home" onClick={()=>{setState(0)}}>Home</a></li></span>
            <span className = 'nav navbar-brand mb-0 h1 mx-auto'><li><a href="#Finance" onClick={()=>{setState(1)}}>Finance</a></li></span>
            <span className = 'nav navbar-brand mb-0 h1 mx-auto'><li><a href="#Scholarship" onClick={()=>{setState(2)}}>Scholarship</a></li></span>
            <span className = 'nav navbar-brand mb-0 h1 mx-auto'><li><a href="#About" onClick={()=>{setState(3)}}>About us</a></li></span>
            <span className = 'nav navbar-brand mb-0 h1 mx-auto'><li><a href="#Login" onClick={()=>{setState(4)}}>Login</a></li></span>
            <span className = 'nav navbar-brand mb-0 h1 mx-auto'><li><a>Brokers</a></li></span>
        </nav>
    )
}
