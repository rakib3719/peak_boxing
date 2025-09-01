import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard3 = ({img,title,content}) => {
    return (
        <div className="agenko-project-item style-four mb-30 pf_fadeup">
        <div className="thumbnail">
            <img src={img} alt="Project Image" />
            <div className="hover-content">
                <div className="content">
                    <a className="category-btn" href="#">{title}</a>
                    <h4><Link to="/project/project-details">{content}</Link></h4>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProjectCard3;