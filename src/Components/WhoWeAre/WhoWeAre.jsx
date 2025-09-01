import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../VideoModal/VideoModal';
import { BsArrowRight } from 'react-icons/bs';
import randomImg from '../../assets/images/random.jpeg'

const WhoWeAre = () => {

        const [iframeSrc, setIframeSrc] = useState('about:blank');
        const [toggle, setToggle] = useState(false);
      
        const handelClick = () => {
          setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
          setToggle(!toggle);
        };
        const handelClose = () => {
          setIframeSrc('about:blank');
          setToggle(!toggle);
        };

    return (
                    <section className="agk-who-we gray-dark pt-130 pb-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5">
                                    
                                    <div className="agk-content-box mb-50 pf_fadeup">
                                        <div className="section-title mb-30">
                                            <span className="sub-title">What We Are</span>
                                            <h2>Train Hard. Stay Strong. Be Unstoppable.</h2>
                                        </div>
                                      <ul className="check-list style-one mb-40">
  <li><i className="bi bi-check2-circle"></i>Expert Boxing & Fitness Coaches</li>
  <li><i className="bi bi-check2-circle"></i>Personalized Training Programs</li>
  <li><i className="bi bi-check2-circle"></i>State-of-the-Art Gym Equipment</li>
  <li><i className="bi bi-check2-circle"></i>Supportive & Motivating Community</li>
  <li><i className="bi bi-check2-circle"></i>Proven Track Record of Member Success</li>
</ul>

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
                                <div className="col-xl-7">
                                    
                                    <div className="agk-play-image-box mb-50 pf_fadeup">
                                        <div className="agk-image style-four">
                                            <img src={randomImg} className="rounded-2" alt="Features" />
                                            <div onClick={handelClick} className="play-box">
                                                <a className="video-popup"><i className="bi bi-play-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                
                                <div className="big-text text-center mt-80 pt-70">
                                    <h2 className="text-anm-two">PEAK BOXING CLUB</h2>
                                </div>
                            </div>
                        </div>
                        <VideoModal
                            isTrue={toggle}
                            iframeSrc={iframeSrc}
                            handelClose={handelClose}        
                        ></VideoModal>                        
                    </section>
    );
};

export default WhoWeAre;