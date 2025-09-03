import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsEye, BsEyeSlash, BsPerson, BsTelephone } from 'react-icons/bs';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    experience: '',
    goals: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    
    // Here you would typically handle the registration logic
    console.log('Registration attempt with:', formData);
    
    // For demonstration purposes, let's just show an alert
    alert(`Registration submitted!\nWe'll contact you at ${formData.email} soon.`);
  };

  return (
    <section className="register-section" style={{
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
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="register-box pf_fadeup" style={{
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
                  Join <span className="pro" style={{color: "#9CFE4F"}}>Peak Boxing Club</span>
                </h2>
                <p style={{ color: "#aaa", marginBottom: "30px" }}>
                  Create your account and start your boxing journey
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <div style={{ position: 'relative' }}>
                        <BsPerson style={{
                          position: "absolute",
                          left: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#666",
                          fontSize: "18px"
                        }} />
                        <input 
                          type="text" 
                          name="fullName"
                          className="form-control" 
                          placeholder="Full Name" 
                          value={formData.fullName}
                          onChange={handleChange}
                          required 
                          style={{
                            width: "100%",
                            padding: "15px 20px 15px 45px",
                            borderRadius: "8px",
                            border: "1px solid #333",
                            background: "#0a0a0a",
                            color: "#fff",
                            fontSize: "16px",
                            transition: "all 0.3s ease"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        placeholder="Email Address" 
                        value={formData.email}
                        onChange={handleChange}
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
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <div style={{ position: 'relative' }}>
                        <BsTelephone style={{
                          position: "absolute",
                          left: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#666",
                          fontSize: "18px"
                        }} />
                        <input 
                          type="tel" 
                          name="contact"
                          className="form-control" 
                          placeholder="Contact Number" 
                          value={formData.contact}
                          onChange={handleChange}
                          required 
                          style={{
                            width: "100%",
                            padding: "15px 20px 15px 45px",
                            borderRadius: "8px",
                            border: "1px solid #333",
                            background: "#0a0a0a",
                            color: "#fff",
                            fontSize: "16px",
                            transition: "all 0.3s ease"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <input 
                        type="date" 
                        name="dob"
                        className="form-control" 
                        placeholder="Date of Birth" 
                        value={formData.dob}
                        onChange={handleChange}
                        required 
                        style={{
                          width: "100%",
                          padding: "15px 20px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#0a0a0a",
                          color: formData.dob ? "#fff" : "#666",
                          fontSize: "16px",
                          transition: "all 0.3s ease"
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-20" style={{position: "relative"}}>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        name="password"
                        className="form-control" 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleChange}
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
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group mb-20" style={{position: "relative"}}>
                      <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        name="confirmPassword"
                        className="form-control" 
                        placeholder="Confirm Password" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
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
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                        {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <select 
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required 
                        style={{
                          width: "100%",
                          padding: "15px 20px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#0a0a0a",
                          color: "#fff",
                          fontSize: "16px",
                          transition: "all 0.3s ease",
                          appearance: "none"
                        }}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <select 
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required 
                        style={{
                          width: "100%",
                          padding: "15px 20px",
                          borderRadius: "8px",
                          border: "1px solid #333",
                          background: "#0a0a0a",
                          color: "#fff",
                          fontSize: "16px",
                          transition: "all 0.3s ease",
                          appearance: "none"
                        }}
                      >
                        <option value="">Boxing Experience</option>
                        <option value="beginner">Beginner (No experience)</option>
                        <option value="intermediate">Intermediate (1-2 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                        <option value="competitive">Competitive (Amateur fights)</option>
                        <option value="professional">Professional</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="form-group mb-20">
                  <select 
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required 
                    style={{
                      width: "100%",
                      padding: "15px 20px",
                      borderRadius: "8px",
                      border: "1px solid #333",
                      background: "#0a0a0a",
                      color: "#fff",
                      fontSize: "16px",
                      transition: "all 0.3s ease",
                      appearance: "none"
                    }}
                  >
                    <option value="">Primary Goal</option>
                    <option value="fitness">General Fitness</option>
                    <option value="weightloss">Weight Loss</option>
                    <option value="self-defense">Self Defense</option>
                    <option value="competition">Competition</option>
                    <option value="stress-relief">Stress Relief</option>
                    <option value="skill-development">Skill Development</option>
                  </select>
                </div>
                
                <div className="form-group mb-25" style={{
                  display: "flex",
                  alignItems: "flex-start"
                }}>
                  <input 
                    type="checkbox" 
                    id="agreeToTerms"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    style={{
                      marginRight: "10px",
                      marginTop: "5px"
                    }}
                  />
                  <label 
                    htmlFor="agreeToTerms" 
                    style={{
                      color: "#aaa",
                      cursor: "pointer",
                      fontSize: "14px",
                      lineHeight: "1.4"
                    }}
                  >
                    I agree to the <Link to="/terms" style={{color: "#9CFE4F"}}>Terms and Conditions</Link> and <Link to="/privacy" style={{color: "#9CFE4F"}}>Privacy Policy</Link> of Peak Boxing Club
                  </label>
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
                    CREATE ACCOUNT <BsArrowRight />
                  </button>
                </div>
              </form>
              
              <div className="login-link" style={{
                textAlign: "center",
                color: "#aaa",
                fontSize: "15px"
              }}>
                Already have an account?{" "}
                <Link 
                  to="/sign-in" 
                  style={{
                    color: "#9CFE4F",
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "color 0.3s ease"
                  }}
                >
                  Sign in here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;