import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/image1.jpeg'
import image2 from '../../assets/images/image2.jpeg'
import image3 from '../../assets/images/image3.jpeg'
import image4 from '../../assets/images/about.jpeg'
import image5 from '../../assets/images/about2.jpeg'
import image6 from '../../assets/images/image4.jpeg'
import image7 from '../../assets/images/random.jpeg'

const ZymBoxingGallery = () => {
    const boxingContent = [
        {img: image1, title: 'Boxing Training Sessions', cat1: 'Training', cat2: 'Fitness'},
        {img: image2, title: 'Competition Preparation', cat1: 'Competition', cat2: 'Training'},
        {img: image3, title: 'Boxing Equipment Showcase', cat1: 'Equipment', cat2: 'Gear'},
        {img: image4, title: 'Professional Boxing Coaches', cat1: 'Coaching', cat2: 'Training'},
        {img: image5, title: 'Boxing Gym Facilities', cat1: 'Facility', cat2: 'Gym'},
        {img: image6, title: 'Boxing Championship Events', cat1: 'Event', cat2: 'Competition'},
    ]; 

    return (
        <section className="zym-boxing-gallery pt-130 pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-60">
                            <span className="sub-title">Our Boxing Gallery</span>
                            <h2>Experience The Power of Boxing Training</h2>
                            <p>See our state-of-the-art facilities, professional trainers, and dedicated athletes in action.</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="zym-button mb-60 float-lg-end">
                            <Link to="/gallery" className="theme-btn boxing-btn">
                            
                                <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {boxingContent.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="zym-gallery-item mb-30">
                                <div className="gallery-thumbnail">
                                    <img src={item.img} alt={item.title} />
                                    <div className="gallery-overlay">
                                        <div className="overlay-content">
                                            <div className="gallery-categories">
                                                <span className="category">{item.cat1}</span>
                                                <span className="category">{item.cat2}</span>
                                            </div>
                                           
                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        
        </section>
    );
};

export default ZymBoxingGallery;

