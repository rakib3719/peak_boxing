import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsEye, BsEyeSlash, BsX } from 'react-icons/bs';
import axios from 'axios';
import { base_url } from '../utils/utils';
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [sendingOtp, setSendingOtp] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await axios.post(`${base_url}/user/login`, {email, password}, {withCredentials:true});
      if(data.status === 200 ){
        toast.success("Login Success");
          window.location.href = '/';
          setLoading(false);
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = async () => {
    if (!forgotPasswordEmail) {
      toast.error("Please enter your email address");
      return;
    }
    
    setSendingOtp(true);
    try {
      const response = await axios.post(`${base_url}/otp/send/${forgotPasswordEmail}`);
      if (response.status === 200) {
        toast.success("OTP sent successfully!");
        // Redirect to forget password page with the email
        window.location.href = `/forgetpassword/${forgotPasswordEmail}`;
      }
    } catch (error) {
      console.log(error)
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message || "Failed to send OTP");
    } finally {
      setSendingOtp(false);
    }
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
      <Toaster/>
      
      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px"
        }}>
          <div style={{
            background: "#111",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            border: "1px solid #222",
            width: "100%",
            maxWidth: "450px",
            position: "relative"
          }}>
            <button 
              onClick={() => setShowForgotPasswordModal(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                color: "#aaa",
                fontSize: "24px",
                cursor: "pointer"
              }}
            >
              <BsX />
            </button>
            
            <h2 style={{ 
              color: "#fff", 
              marginBottom: "15px",
              textAlign: "center"
            }}>
              Reset Password
            </h2>
            
            <p style={{ 
              color: "#aaa", 
              marginBottom: "20px",
              textAlign: "center",
              fontSize: "14px"
            }}>
              Enter your email address and we'll send you an OTP to reset your password.
            </p>
            
            <div className="form-group mb-20">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email Address" 
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPasswordEmail(e.target.value)}
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
            
            <button 
              onClick={handleSendOtp}
              disabled={sendingOtp}
              style={{
                width: "100%",
                padding: "15px",
                background: sendingOtp ? "#666" : "#9CFE4F",
                color: "black",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: sendingOtp ? "not-allowed" : "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease"
              }}
            >
              {sendingOtp ? "Sending OTP..." : "Send OTP"}
            </button>
          </div>
        </div>
      )}
      
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
                  Sign in 
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
                  <Link 
                    to="#"
                    onClick={() => setShowForgotPasswordModal(true)}
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
                    {loading ? "Loading..." : <span>SIGN IN <BsArrowRight /></span>}
                  </button>
                </div>
              </form>
              
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