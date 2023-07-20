import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NEWSJ</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">general</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">entertainment</a>
                            </li>                            
                            <li className="nav-item">
                                <a className="nav-link" href="/about">health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">technology</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
          
            </nav>
        )
    }
}

export default Navbar
