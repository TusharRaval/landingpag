import React from 'react';

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <h2>Unique features built for Sellers</h2>
                <div className="row">
                    <div className="col-md-4 feature-box">
                        <h3>Data-Driven Insights</h3>
                        <p>Find profitable products fast.</p>
                    </div>
                    <div className="col-md-4 feature-box">
                        <h3>Market Comparison</h3>
                        <p>Compare products in different marketplaces.</p>
                    </div>
                    <div className="col-md-4 feature-box">
                        <h3>Automated Outreach</h3>
                        <p>Ensure emails get delivered.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
