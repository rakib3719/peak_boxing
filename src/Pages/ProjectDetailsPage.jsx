import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import ProjectDetails from '../Components/ProjectDetails/ProjectDetails';

const ProjectDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Project Details"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>   
            <ProjectDetails></ProjectDetails>         
        </div>
    );
};

export default ProjectDetailsPage;