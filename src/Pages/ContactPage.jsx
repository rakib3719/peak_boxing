import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Contact from '../Components/Contact/Contact';

const ContactPage = () => {
    return (
        <div>
            <BreadCumb
                Title="Contact"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>   
            <Contact></Contact>         
        </div>
    );
};

export default ContactPage;