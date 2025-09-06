import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsEye, BsEyeSlash } from 'react-icons/bs';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the sign-in logic
    console.log('Sign in attempt with:', { email, password, rememberMe });
    
    // For demonstration purposes, let's just show an alert
    alert(`Login attempted with:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <section className="signin-section" style={{
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 0",
      overflow: "hidden",
      position: "relative"
    }}>
      {/* Decorative elements */}
      <div className="shape shape-one" style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        opacity: "0.1",
        transform: "rotate(45deg)"
      }}>
        <span>🥊</span>
      </div>
      
      <div className="shape shape-two" style={{
        position: "absolute",
        bottom: "15%",
        right: "5%",
        opacity: "0.1",
        transform: "rotate(-30deg)"
      }}>
        <span>🥊</span>
      </div>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="signin-box pf_fadeup" style={{
              background: "#111",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              border: "1px solid #222",
              position: "relative",
              overflow: "hidden"
            }}>
              {/* Boxing glove decorative element */}
              <div style={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                fontSize: "120px",
                opacity: "0.05",
                transform: "rotate(20deg)"
              }}>
                🥊
              </div>
              
              <div className="section-title text-center mb-30">
                <h2 style={{ 
                  color: "#fff", 
                  marginBottom: "10px",
                  fontSize: "28px"
                }}>
                  Welcome to <span className="pro" style={{color: "#9CFE4F"}}>Peak Boxing Club</span>
                </h2>
                <p style={{ color: "#aaa", marginBottom: "30px" }}>
                  Sign in to access your training dashboard
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-20">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    style={{
                      width: "100%",
                      padding: "15px 20px",
                      borderRadius: "8px",
                      border: "1px solid #333",
                      background: "#0a0a0a",
                      color: "#fff",
                      fontSize: "16px",
                      transition: "all 0.3s ease"
                    }}
                  />
                </div>
                
                <div className="form-group mb-20" style={{position: "relative"}}>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    className="form-control" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    style={{
                      width: "100%",
                      padding: "15px 20px",
                      paddingRight: "50px",
                      borderRadius: "8px",
                      border: "1px solid #333",
                      background: "#0a0a0a",
                      color: "#fff",
                      fontSize: "16px",
                      transition: "all 0.3s ease"
                    }}
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      color: "#666",
                      cursor: "pointer",
                      fontSize: "18px"
                    }}
                  >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                  </button>
                </div>
                
                <div className="form-group mb-25" style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <div className="form-check">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      style={{
                        marginRight: "8px"
                      }}
                    />
                    <label 
                      htmlFor="rememberMe" 
                      style={{
                        color: "#aaa",
                        cursor: "pointer",
                        fontSize: "14px"
                      }}
                    >
                      Remember me
                    </label>
                  </div>
                  
                  <Link 
                    to="#forgot-password" 
                    style={{
                      color: "#9CFE4F",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 0.3s ease"
                    }}
                  >
                    Forgot Password?
                  </Link>
                </div>
                
                <div className="form-group mb-20">
                  <button 
                    type="submit" 
                    className="theme-btn style-one"
                    style={{
                      width: "100%",
                      padding: "15px",
                      background: "#9CFE4F",
                      color: "black",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    SIGN IN <BsArrowRight />
                  </button>
                </div>
              </form>
              
              <div className="signin-divider" style={{
                position: "relative",
                textAlign: "center",
                margin: "25px 0",
                color: "#666"
              }}>
                <span style={{
                  padding: "0 15px",
                  background: "#111",
                  position: "relative",
                  zIndex: "1",
                  fontSize: "14px"
                }}>
                  Or continue with
                </span>
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  right: "0",
                  height: "1px",
                  background: "#333",
                  zIndex: "0"
                }}></div>
              </div>
              
              <div className="social-login" style={{
                display: "flex",
                gap: "15px",
                marginBottom: "25px"
              }}>
                <button style={{
                  flex: "1",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #333",
                  background: "#0a0a0a",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.3s ease"
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>
                
          
              </div>
              
              <div className="" style={{
                textAlign: "center",
                color: "#aaa",
                fontSize: "15px"
              }}>
                Don't have an account?{" "}
                <Link 
                  to="/sign-up" 
                  style={{
                    color: "#9CFE4F",
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "color 0.3s ease"
                  }}
                >
                  Sign up now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;