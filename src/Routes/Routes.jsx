import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage";
import Home from "../Pages/Home";
import Home2 from "../Pages/Home2";
import Home3 from "../Pages/Home3";
import ServicePage from "../Pages/ServicePage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
import PricingPage from "../Pages/PricingPage";
import FaqPage from "../Pages/FaqPage";
import ContactPage from "../Pages/ContactPage";
import ProjectPage from "../Pages/ProjectPage";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import BlogPage from "../Pages/BlogPage";
import BlogSidebarPage from "../Pages/BlogSidebarPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [         
        {
          path: "/",
          element: <Home></Home>,
        },    
        {
          path: "/home2",
          element: <Home2></Home2>,
        },  
        {
          path: "/home3",
          element: <Home3></Home3>,
        },                   
        {
          path: "/about",
          element: <AboutPage></AboutPage>,
        },   
        {
          path: "/service",
          element: <ServicePage></ServicePage>,
        },  
        {
          path: "/service/service-details",
          element: <ServiceDetailsPage></ServiceDetailsPage>,
        },
        {
          path: "/team",
          element: <TeamPage></TeamPage>,
        },   
        {
          path: "/team/team-details",
          element: <TeamDetailsPage></TeamDetailsPage>,
        }, 
        {
          path: "/pricing",
          element: <PricingPage></PricingPage>,
        },
        {
          path: "/faq",
          element: <FaqPage></FaqPage>,
        },   
        {
          path: "/contact",
          element: <ContactPage></ContactPage>,
        },  
        {
          path: "/project",
          element: <ProjectPage></ProjectPage>,
        },  
        {
          path: "/project/project-details",
          element: <ProjectDetailsPage></ProjectDetailsPage>,
        },  
        {
          path: "/blog",
          element: <BlogPage></BlogPage>,
        },  
        {
          path: "/blog-sidebar",
          element: <BlogSidebarPage></BlogSidebarPage>,
        }, 
        {
          path: "/blog/blog-details",
          element: <BlogDetailsPage></BlogDetailsPage>,
        },                                                                                                                                                                  
      ],
    },  
  ]);