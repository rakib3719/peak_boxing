import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import logo from '../../assets/images/logo32.jpeg';
import { useAuth } from '../../provider/AuthProvider';
import axios from 'axios';
import { base_url } from '../../utils/utils';

export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user, loading, error, logout } = useAuth();
  
  const location = useLocation();
  const pathname = location.pathname;

  // ড্যাশবোর্ডে হেডার দেখাবে না
  if (pathname.includes('dashboard')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async() => {
    logout();
    const data = axios.post(`${base_url}/user/logOut`)
  };

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
                <img src={logo} alt="" style={{ width: "120px" }} />
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
              <div className="d-flex align-items-center">
                {loading ? (
                  // লোডিং স্টেট
                  <div className="spinner-border text-light" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : user ? (
                  // ব্যবহারকারী লগ ইন থাকলে
                  <div className="d-flex align-items-center gap-3">
                    <Link to="/profile" className="text-white d-flex align-items-center gap-1">
                      <FaUser className="me-1" />
                      <span>{user.fullName}</span>
                    </Link>
                    <button onClick={handleLogout} className="theme-btn style-one">
                      <span className="tep">
                        <span className="text">Logout</span>
                    
                      </span>
                    </button>
                  </div>
                ) : (
                  // ব্যবহারকারী লগ ইন না থাকলে
                  <div className="main-button">
                    <Link to="/sign-in" className="theme-btn style-one">
                      <span className="text-flip">
                        <span className="text">Sign In</span>
                        <span className="text" style={{ marginLeft: '20px' }}>
                          <FaSignInAlt />
                        </span>
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}