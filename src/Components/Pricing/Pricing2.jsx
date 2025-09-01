import React from 'react';

const Pricing2 = () => {
    return (
        <section className="agenko-pricing pt-130 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50 pf_zoomIn">
                            <span className="sub-title">Our Pricing</span>
                            <h2>Membership Plans That Fit Your Goals</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Basic Plan */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                            <div className="shape"><span></span></div>
                            <div className="pricing-head">
                                <span className="plan">Beginner</span>
                                <h2 className="price"><span className="currency">$</span>20/mo</h2>
                                <p>Perfect for newcomers to start their boxing and fitness journey.</p>
                            </div>
                            <div className="pricing-body">
                                <ul className="check-list style-one">
                                    <li><i className="bi bi-check2-square"></i>Access to Boxing Classes</li>
                                    <li><i className="bi bi-check2-square"></i>Basic Gym Equipment Use</li>
                                    <li><i className="bi bi-check2-square"></i>Group Warm-up Sessions</li>
                                    <li><i className="bi bi-check2-square"></i>Fitness Assessment</li>
                                    <li><i className="bi bi-check2-square"></i>Locker Room Access</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <button className="theme-btn style-two">Join Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Standard Plan */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                            <div className="shape"><span></span></div>
                            <div className="pricing-head">
                                <span className="plan">Intermediate</span>
                                <h2 className="price"><span className="currency">$</span>45/mo</h2>
                                <p>For regular trainees aiming to improve strength, endurance, and boxing skills.</p>
                            </div>
                            <div className="pricing-body">
                                <ul className="check-list style-one">
                                    <li><i className="bi bi-check2-square"></i>Unlimited Boxing Classes</li>
                                    <li><i className="bi bi-check2-square"></i>Advanced Gym Equipment Access</li>
                                    <li><i className="bi bi-check2-square"></i>Personalized Training Plan</li>
                                    <li><i className="bi bi-check2-square"></i>Nutrition Guidance</li>
                                    <li><i className="bi bi-check2-square"></i>Locker & Shower Access</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <button className="theme-btn style-two">Join Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="agenko-pricing-item style-three mb-40 pf_fadeup">
                            <div className="shape"><span></span></div>
                            <div className="pricing-head">
                                <span className="plan">Pro Athlete</span>
                                <h2 className="price"><span className="currency">$</span>90/mo</h2>
                                <p>For advanced athletes seeking full access, personal coaching, and competitive training.</p>
                            </div>
                            <div className="pricing-body">
                                <ul className="check-list style-one">
                                    <li><i className="bi bi-check2-square"></i>One-on-One Boxing Coaching</li>
                                    <li><i className="bi bi-check2-square"></i>Full Gym Access</li>
                                    <li><i className="bi bi-check2-square"></i>High-Intensity & Cardio Programs</li>
                                    <li><i className="bi bi-check2-square"></i>Advanced Nutrition Plan</li>
                                    <li><i className="bi bi-check2-square"></i>Priority Locker & Shower Access</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <button className="theme-btn style-two">Join Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing2;
