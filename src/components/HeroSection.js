import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroSection = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(heroRef.current, 
            { opacity: 0, scale: 0.9 }, 
            { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
        );

        gsap.fromTo(".hero-title", 
            { y: -50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
        );

        gsap.fromTo(".hero-text", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
        );

        gsap.fromTo(".hero-button", 
            { scale: 0.8, opacity: 0 }, 
            { scale: 1, opacity: 1, duration: 1.2, delay: 0.7, ease: "elastic.out(1, 0.5)" }
        );
    }, []);

    // Particles configuration
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <section className="hero-section" ref={heroRef}>
            {/* Particles Background */}
            <Particles 
                id="particles-js"
                init={particlesInit}
                options={{
                    particles: {
                        number: { value: 60 },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5, random: true },
                        size: { value: 3, random: true },
                        move: { enable: true, speed: 1.2, direction: "none" }
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" }
                        },
                        modes: {
                            repulse: { distance: 100, duration: 0.4 },
                            push: { quantity: 4 }
                        }
                    }
                }}
            />

            {/* Dark Overlay */}
            <div className="overlay"></div>

            {/* Content */}
            <div className="container text-center">
                <h1 className="hero-title">The Modern Way to Find Products</h1>
                <p className="hero-text">Discover profitable products and grow your business</p>
                <motion.button 
                    className="hero-button btn btn-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Get Started
                </motion.button>
            </div>

            {/* Hanging Div in Bottom Left Corner */}
            <motion.div 
                className="hanging-div"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", bottom: "30px", left: "260px", top:"190px" , transformOrigin: "top center" }}
            >
                <p>Exclusive Deals</p>
            </motion.div>

            {/* Hanging Div in Top Right Corner */}
            <motion.div 
                className="hanging-div"
                animate={{ rotate: [-5, 50, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "sticky", top: "420px", right: "320px", transformOrigin: "top center" }}
            >
                <p>Find Your Perfect Match</p>
            </motion.div>
        </section>
    );
};

export default HeroSection;
