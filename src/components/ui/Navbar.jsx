import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-transparent border-bottom shadow">
        <span className='navbar-brand ms-5'>Laura Gutiérrez Álvarez</span>
        <div className="container-fluid justify-content-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to='/' className="nav-link">Inicio</NavLink>
                    <NavLink to='/cv' className="nav-link">CV</NavLink>
                    <NavLink to='/publications' className="nav-link">Publicaciones</NavLink>
                    <NavLink to='/contact' className="nav-link">Contacto</NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}
