import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import BlogDetails from '../Components/BlogDetails/BlogDetails';

const BlogDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                Title="Blog Details"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb> 
            <BlogDetails></BlogDetails>            
        </div>
    );
};

export default BlogDetailsPage;