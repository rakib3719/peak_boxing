import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import About1 from '../Components/About/About1';
import WhoWeAre2 from '../Components/WhoWeAre/WhoWeAre2';
import Team1 from '../Components/Team/Team1';
import Testimonial4 from '../Components/Testimonial/Testimonial4';
import Brand4 from '../Components/Brand/Brand4';

const AboutPage = () => {
    return (
        <div>
            <BreadCumb
                Title="About Us"
                content="Peak Boxing Club empowers athletes and fitness enthusiasts with expert coaching & dynamic training solutions"
            ></BreadCumb>
            <About1></About1>
            <WhoWeAre2></WhoWeAre2>
            <Team1></Team1>
            {/* <Testimonial4></Testimonial4>
            <Brand4></Brand4> */}
        </div>
    );
};

export default AboutPage;