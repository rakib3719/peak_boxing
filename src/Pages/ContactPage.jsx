import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Contact from '../Components/Contact/Contact';

const ContactPage = () => {
    return (
        <div>
            <BreadCumb
                Title="Contact"
                content="Peak Boxing Club drives success with bold strategies and creative solutions."
            ></BreadCumb>   
            <Contact></Contact>         
        </div>
    );
};

export default ContactPage;