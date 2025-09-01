import React from 'react';
import image from '../../assets/images/boxing.jpg'

const WhyChoose1 = () => {
    return (
        <section className="agenko-why-choose pt-125 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="agenko-content-box mb-50 pf_fadeup">
                            <div className="section-title mb-30">
                                <span className="sub-title">Why Choose Us</span>
                                <h2>Your Trusted Partner for Strength & Fitness</h2>
                            </div>
                            <p className="mb-35">
                                At PEAK BOXING CLUB, we specialize in empowering members to achieve peak performance through expert coaching, personalized training programs, and a motivating community environment.
                            </p>
                            
                            <div className="agenko-skill-list">
                                
                                <div className="agenko-skill-item style-one mb-20">
                                    <div className="progress-title">
                                        <h5>Boxing Training <span>92%</span></h5>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                                
                                <div className="agenko-skill-item style-one mb-20">
                                    <div className="progress-title">
                                        <h5>Strength & Conditioning <span>88%</span></h5>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                                
                                <div className="agenko-skill-item style-one mb-20">
                                    <div className="progress-title">
                                        <h5>Cardio & Endurance <span>85%</span></h5>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="agenko-image-box text-xl-end mb-50 pf_fadeup">
                            <div className="agenko-image">
                                <img src={image} alt="Gym Training Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose1;
