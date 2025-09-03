import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import aboutImg from '../../../src/assets/images/about.jpeg'

const About1 = () => {
    return (
        <section className="agk-about pt-130 pb-80" style={{
            overflow:"hidden"
        }}>
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    
                    <div className="agk-content-box style-one mb-50 pf_fadeup">
                        <div className="section-title mb-20">
                            <span className="sub-title">About us</span>
                            <h2>Unleash Your Power with  <span className='pro'>Peak Boxing Club</span> </h2>
                        </div>
                        <p>At Peak Boxing Club, we specialize in building strength, discipline, and confidence through world-class boxing and fitness training. By combining proven techniques, high-intensity workouts, and expert coaching, we help you push past your limits and reach peak performance.

</p>
                    <p>Our dedicated trainers work closely with every member to understand their goals—whether it’s fitness, competition, or personal growth—crafting customized programs that deliver real, measurable results..</p>
                    <div className="agk-button mb-30">
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
                    <ul>
                        <li>
                            
                        <div className="agenko-counter-box style-one">
  <div className="content">
    <h2 className="mb-10"><span className="count">500</span>+</h2>
    <p>Active Members</p>
  </div>
</div>

<div className="agenko-counter-box style-one">
 
</div>



                        </li>
                        <li>
                            
                            <div className="agenko-counter-box style-one">
                                <div className="content">
                                    <h2 className="mb-10"><span className="count">23</span>+</h2>
                                    <p>Award for digital innovation</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-xl-5">
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup">
                        <div className="agk-image">
                            <img src={aboutImg} alt="img"  style={
                                {
                                    minHeight:"600px",
                                    minWidth:"600px"
                                }
                            }/>
                        </div>
                        <div className="agenko-experince-box style-one">
                            <h2><span>24</span>+</h2>
                            <p>Years On The Market</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;