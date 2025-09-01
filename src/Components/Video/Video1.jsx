import React, { useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';

const Video1 = () => {

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
        <section className="agk-video">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="agk-play-image-box pf_zoomIn">
                        <div className="agk-image">
                            <img src="/assets/images/creative-agency/hero/hero-img1.jpg" alt="Hero Image" />
                            <div onClick={handelClick} className="play-box">
                                <a className="video-popup"><i className="bi bi-play-fill"></i></a>
                            </div>
                        </div>
                    </div>
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

export default Video1;