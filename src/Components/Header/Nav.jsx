import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import cover from '../../../public/assets/images/cover/cover.jpg'

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="">
        <Link to="/">Home</Link>
     
      </li>




      
    

      <li className="">
        <Link to="/service" >
          Services
        </Link>
     
      </li>

      <li className="">
        <Link to="/about" >
  About Us
        </Link>
     
      </li> 
      
      {/* <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>                         
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
