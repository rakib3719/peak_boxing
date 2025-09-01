import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/circle.png'

const Services4 = () => {

    const serviceContent = [
        {
            img:{img1}, 
            title:'Boxing Training', 
            subTitle:'Personal & Group Sessions', 
            content:'Expert-led boxing sessions designed to improve your technique, strength, and endurance. Suitable for beginners and advanced athletes alike.'
        },
        {
            img:'/assets/images/pages/service/strength-conditioning.jpg', 
            title:'Strength & Conditioning', 
            subTitle:'Gym & Fitness Programs', 
            content:'Tailored strength and conditioning programs to enhance muscle tone, stamina, and overall fitness for peak performance in boxing and daily life.'
        },
        {
            img:'/assets/images/pages/service/cardio-workouts.jpg', 
            title:'Cardio Workouts', 
            subTitle:'High-Intensity Training', 
            content:'Dynamic cardio sessions including HIIT, jump rope, and circuit training to boost endurance, burn fat, and increase cardiovascular health.'
        },
        {
            img:'/assets/images/pages/service/gym-equipment.jpg', 
            title:'Gym Facilities', 
            subTitle:'Modern Equipment & Gear', 
            content:'Fully-equipped gym with the latest boxing rings, free weights, cardio machines, and gear to ensure a complete training experience.'
        },
    ]; 

    return (
        <section className="agk-services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb-60 text-center pf_zoomIn">
                            <span className="sub-title">Our Services</span>
                            <h2>Top Services We Offer</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {serviceContent.map((item, i) => (
                            <div key={i} className="agenko-card-item style-two mb-10 pf_fadeup">
                                {/* <div className="thumbnail">
                                    <img src={item.img.src} alt={item.title} />
                                </div> */}
                                <div className="card-title">
                                    <h2><Link to="/service/service-details">{item.title}</Link></h2>
                                    <h4>{item.subTitle}</h4>
                                </div>
                                <div className="content">
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services4;
