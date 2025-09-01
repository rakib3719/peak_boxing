import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import ServiceDetails from '../Components/ServiceDetails/ServiceDetails';
import Process3 from '../Components/Process/Process3';
import Pricing1 from '../Components/Pricing/Pricing1';
import Brand4 from '../Components/Brand/Brand4';

const ServiceDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Services Details"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>  
            <ServiceDetails></ServiceDetails> 
            <Process3></Process3> 
            <Pricing1></Pricing1>
              <Brand4></Brand4>     
        </div>
    );
};

export default ServiceDetailsPage;