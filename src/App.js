import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/features" element={<Features />} />
                <Route path="/comparison" element={<Comparison />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
