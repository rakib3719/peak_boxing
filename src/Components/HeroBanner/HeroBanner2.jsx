import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../assets/images/cover.jpg'
import { BsArrowRight } from 'react-icons/bs';
import { GiBoxingGlove } from 'react-icons/gi';
import { FaNutritionix } from 'react-icons/fa';
import { MdPool } from 'react-icons/md';


const HeroBanner2 = () => {
    return (
        <section className="agk-hero">
        <div className="hero-wrapper-two">
            <div className="shape shape-one"><span><img className="rotate360" src="/assets/images/digital-agency/hero/shape/shape1.png" alt="Shape" /></span></div>
            <div className="shape shape-two"><span><img className="animate-float-bob-y" src="/assets/images/digital-agency/hero/shape/shape2.png" alt="Shape" /></span></div>
            <div className="shape circle-one"><span></span></div>
            <div className="shape circle-two"><span></span></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <h1>
                                <span className="text-anm ">Ultimate Crossfit </span>
                                <span className="text-anm">Facility</span>
                            </h1>
                           {/* <div className="pro" style={{  marginLeft:"12px !important"}}>Pro</div> */}
                            <div className="text-box pf_fadeup">
                                <p>          Transform your body, elevate your fitness, and join the community at the premier Crossfit facility in town.</p>
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
                <div className="row">
                    <div className="col-lg-4 "  style={{
                        marginTop:"120px"
                    }}>
                        <ul className="service-list pf_fadeup ">
                            <li>
                                
                                <Link to="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-browser-edge"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Best equipment</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link to="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                  <GiBoxingGlove />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Training plan</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link to="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                 <FaNutritionix />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Nutrition plan</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                               
                                {/* <Link to="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                   <MdPool />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Swimming pool</h4>
                                    </div>
                                </Link> */}
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        
                        <div className="hero-image style-one pf_fadeup">
                            <img src={cover} alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroBanner2;