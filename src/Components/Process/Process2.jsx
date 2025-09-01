import React from 'react';


const Process2 = () => {
    return (
        <section className="agk-work-process pt-130 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-title">Training Process</span>
                            <h2>How We Transform Fitness  
                                Through Discipline & Dedication
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-box mb-55 pf_fadeup">
                            <p>
                                Our training system is designed to take you step by step 
                                from setting clear goals to achieving peak performance. 
                                Whether beginner or pro, we guide you every step of the way.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Step 1 */}
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-two mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-flag"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Assessment & Goal Setting</h4>
                                <p>We evaluate fitness levels and set personalized goals to kickstart your journey.</p>
                                <div className="step">Step-01</div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-two mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-activity"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Customized Training</h4>
                                <p>Boxing drills, cardio, and strength programs tailored to your needs.</p>
                                <div className="step">Step-02</div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-two mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-heart-pulse"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Progress Tracking</h4>
                                <p>We monitor performance, endurance, and skill growth with measurable results.</p>
                                <div className="step">Step-03</div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="agenko-iconic-box style-two mb-40 pf_fadeup">
                            <div className="icon">
                                <i className="bi bi-trophy"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Support & Motivation</h4>
                                <p>Our coaches ensure you stay motivated, confident, and ready for every challenge.</p>
                                <div className="step">Step-04</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process2;
