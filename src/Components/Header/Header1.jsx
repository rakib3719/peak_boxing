import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';
import { FaSignInAlt } from 'react-icons/fa';
import logo from '../../assets/images/logo32.jpeg'

export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);


  const location = useLocation();
  console.log(location, "This is your acclador lcoaiton");
  const pathname = location.pathname;

  if(pathname.includes('dashboard')){
    return null;
  }

  console.log(pathname)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true); // scrolling korle sticky hobe
      } else {
        setIsSticky(false); // top e thakle normal
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`cs_site_header header_style_2 cs_style_1 cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? 'sticky-active' : ''}`}
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            {/* Logo / Branding */}
            <div className="cs_main_header_center">
              <Link className="cs_site_branding" to="/">
                <h4 className="text-white">

                  <img src={logo} alt="" style={{
                    width:"120px"
                  }}/>
                </h4>
              </Link>
            </div>

            {/* Nav */}
            <div className="">
              <div className="cs_nav cs_primary_font fw-medium">
                <span
                  className={
                    mobileToggle
                      ? 'cs-munu_toggle cs_teggle_active'
                      : 'cs-munu_toggle'
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
                <Nav setMobileToggle={setMobileToggle} />
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="cs_main_header_right">
              <div className=" d-flex align-items-center">
                <div className="main-button">
                  <Link to="/sign-in" className="theme-btn style-one">
                    <span className="text-flip">
                      <span className="text">Sign In</span>
                      <span
                        className="text"
                        style={{ marginLeft: '20px' }}
                      >
                        <FaSignInAlt />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
