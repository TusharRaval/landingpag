import React from 'react';
import './Testimonials.css'; // Import custom CSS for styling

import a from '../images/a.jpg'; // Import images
import b from '../images/b.png'; // Import images
import c from '../images/c.png'; // Import images

const testimonialsData = [
    {
        name: "John Doe",
        position: "E-commerce Seller",
        image: {a},
        testimonial: "Acme helped me find profitable products faster than ever. My sales have skyrocketed!"
    },
    {
        name: "Sarah Smith",
        position: "Amazon FBA Seller",
        image: {b},
        testimonial: "The research tools are amazing! I saved so much time finding trending products."
    },
    {
        name: "Michael Johnson",
        position: "Dropshipper",
        image: {c},
        testimonial: "I love the user-friendly interface and the powerful analytics Acme provides."
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title text-center">What Our Customers Say</h2>
                <div className="row">
                    {testimonialsData.map((testimonial, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="testimonial-card">
                                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image"/>
                                <p className="testimonial-text">"{testimonial.testimonial}"</p>
                                <h5 className="testimonial-name">{testimonial.name}</h5>
                                <p className="testimonial-position">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
