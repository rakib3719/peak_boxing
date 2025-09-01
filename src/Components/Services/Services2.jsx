import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Services2 = () => {
    return (
        <section className="agk-services gray-dark pt-130 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-65 pf_fadeup">
                            <span className="sub-title">Our Servicess</span>
                            <h2>Transform Your Body & Mind  
                                Through Boxing & Fitness
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-box mb-60 pf_fadeup">
                            <p>
                                We provide world-class training, state-of-the-art equipment, 
                                and expert guidance to help you unleash your inner strength, 
                                build confidence, and achieve peak performance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Service 1 */}
                    <div className="col-lg-12">
                        <div className="agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title">
                                <div className="sn-number">01</div>
                                <h3 className="title">Personal Training</h3>
                            </div>
                            <div className="content">
                                <p>
                                    One-on-one <span>boxing and fitness coaching</span> tailored 
                                    to your goals—whether it’s weight loss, strength building, or 
                                    preparing for the ring.
                                </p>
                            </div>
                             <div className="hero-button">
                                                               <Link to="/about" className="theme-btn style-one">
                                                                   <span className="text-flip">
                                                                       <span className="text">GET STARTED</span>
                                                                       <span className="text" style={{
                                                                           fontSize:"30px",
                                                                           textAlign:"center",
                                                                           fontWeight:"700"
                                                                       }}> <BsArrowRight/></span>
                                                                   </span>
                                                               </Link>
                                                           </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="col-lg-12">
                        <div className="agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title">
                                <div className="sn-number">02</div>
                                <h3 className="title">Gym Store</h3>
                            </div>
                            <div className="content">
                                <p>
                                    From <span>boxing gloves and gear</span> to supplements and 
                                    fitness apparel, our store has everything you need to support 
                                    your training journey.
                                </p>
                            </div>
                          <div className="hero-button">
                                                            <Link to="/about" className="theme-btn style-one">
                                                                <span className="text-flip">
                                                                    <span className="text">GET STARTED</span>
                                                                    <span className="text" style={{
                                                                        fontSize:"30px",
                                                                        textAlign:"center",
                                                                        fontWeight:"700"
                                                                    }}> <BsArrowRight/></span>
                                                                </span>
                                                            </Link>
                                                        </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="col-lg-12">
                        <div className="agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title">
                                <div className="sn-number">03</div>
                                <h3 className="title">Cardio Equipment</h3>
                            </div>
                            <div className="content">
                                <p>
                                    Train with our <span>state-of-the-art cardio machines</span> 
                                    including treadmills, spin bikes, and endurance equipment to 
                                    maximize stamina and performance.
                                </p>
                            </div>
                            <div className="hero-button">
                                                              <Link to="/about" className="theme-btn style-one">
                                                                  <span className="text-flip">
                                                                      <span className="text">GET STARTED</span>
                                                                      <span className="text" style={{
                                                                          fontSize:"30px",
                                                                          textAlign:"center",
                                                                          fontWeight:"700"
                                                                      }}> <BsArrowRight/></span>
                                                                  </span>
                                                              </Link>
                                                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services2;
