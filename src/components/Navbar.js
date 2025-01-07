import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">Acme</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/features">Features</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/comparison">Comparison</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/testimonials">Testimonials</Link></li>
                        
                        <li className="nav-item"><Link className="nav-link btn btn-primary" to="/signup">Get Started</Link></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
