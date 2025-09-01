import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import BlogSidebar from '../Components/BlogSidebar/BlogSidebar';

const BlogSidebarPage = () => {
    return (
        <div>
               <BreadCumb
                Title="Blog Standard"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>  
            <BlogSidebar></BlogSidebar>          
        </div>
    );
};

export default BlogSidebarPage;