import React from 'react';

const WhoWeAre2 = () => {
    return (
        <section className="agk-features gray-dark pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title mb-45 pf_fadeup">
                            <span className="sub-title">About Us</span>
                            <h2>We are your trusted
                                Boxing & Fitness Experts.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-box mb-40 pf_fadeup">
                            <p>
                                At [Your Gym Name], we empower athletes and fitness enthusiasts with personalized coaching, state-of-the-art equipment, and a motivating community to achieve peak performance.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Feature 1 */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-seven mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-box"></i>
                            </div>
                            <div className="content">
                                <h4>Expert Coaching</h4>
                                <p>Certified trainers providing personalized boxing & fitness guidance.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-seven mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-calendar"></i>
                            </div>
                            <div className="content">
                                <h4>Training Programs</h4>
                                <p>Structured programs for beginners to advanced athletes.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-seven mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-bar-chart-line"></i>
                            </div>
                            <div className="content">
                                <h4>Performance Tracking</h4>
                                <p>Monitor progress with regular assessments and fitness metrics.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-seven mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-heart-pulse"></i>
                            </div>
                            <div className="content">
                                <h4>Healthy Lifestyle</h4>
                                <p>Guidance on nutrition, recovery, and holistic fitness habits.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre2;
