import React from 'react';
import './nav.css';
export const Nav = ({setState, loggedIn, user, setLoggedIn}) => {
    let logout = () => {
        console.log(user);
        fetch('/logout', { method: 'GET'})
        setLoggedIn(false);
    };
    let loginPane;
    let registerPane;
    if (!loggedIn) {
        loginPane = (
            <li className="nav-item">
                <a className="nav-link" href="#Login" onClick={() => { setState(4) }}>Login</a>
            </li>
        );
        registerPane = (
            <li className="nav-item">
                <a className="nav-link" href="#Register" onClick={() => { setState(5) }}>Register</a>
            </li>
        );
    } else {
        loginPane = (
            <li className="nav-item">
                <a className="nav-link" href="#Login" onClick={() => { logout(false) }}>{user}: Logout</a>
            </li>
        );
    }
    return (
        <div className="px-3">
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className="navbar-brand" href="#Home" onClick={() => { setState(0) }}>Brokers</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-4" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#Finance" onClick={() => { setState(1) }}>Finance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Scholarship" onClick={() => { setState(2) }}>Scholarship</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#About" onClick={() => { setState(3) }}>About</a>
                        </li>
                        {loginPane}
                        {registerPane}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
