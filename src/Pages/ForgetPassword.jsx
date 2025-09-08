import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash, BsArrowLeft } from 'react-icons/bs';
import axios from 'axios';
import { base_url } from '../utils/utils';
import toast, { Toaster } from 'react-hot-toast';

export default function ForgetPassword() {
  const { email } = useParams();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [canResend, setCanResend] = useState(true);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResendOtp = async () => {
    if (!canResend) return;
    
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/otp/send/${email}`);
      if (response.status === 200) {
        toast.success("OTP sent successfully!");
        setCountdown(60); // 60 seconds countdown
        setCanResend(false);
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    
    setLoading(true);
    try {
      const response = await axios.put(`${base_url}/user/forgetPassword`, {
        email,
        otp,
        newPassword
      });
      
      if (response.status === 200) {
        toast.success("Password reset successfully!");
        setTimeout(() => {
          navigate('/sign-in');
        }, 2000);
      }
    } catch (error) {
        console.log(error)
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      overflow: "hidden",
      position: "relative"
    }}>
      <Toaster />
      
      {/* Decorative elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        opacity: "0.1",
        transform: "rotate(45deg)",
        fontSize: "40px"
      }}>
        🥊
      </div>
      
      <div style={{
        position: "absolute",
        bottom: "15%",
        right: "5%",
        opacity: "0.1",
        transform: "rotate(-30deg)",
        fontSize: "40px"
      }}>
        🥊
      </div>
      
      <div style={{
        background: "#111",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        border: "1px solid #222",
        width: "100%",
        maxWidth: "450px",
        position: "relative"
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
        
        <button 
          onClick={() => navigate('/sign-in')}
          style={{
            background: "none",
            border: "none",
            color: "#9CFE4F",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "20px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          <BsArrowLeft /> Back to Sign In
        </button>
        
        <div className="section-title text-center mb-30">
          <h2 style={{ 
            color: "#fff", 
            marginBottom: "10px",
            fontSize: "28px"
          }}>
            Reset Your Password
          </h2>
          <p style={{ color: "#aaa", marginBottom: "30px" }}>
            Enter the OTP sent to {email} and your new password
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-20">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter OTP" 
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
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
          
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px"
          }}>
            <button 
              type="button"
              onClick={handleResendOtp}
              disabled={!canResend || loading}
              style={{
                background: "none",
                border: "none",
                color: canResend ? "#9CFE4F" : "#666",
                cursor: canResend ? "pointer" : "not-allowed",
                fontSize: "14px",
                textDecoration: "underline"
              }}
            >
              {countdown > 0 ? `Resend OTP in ${countdown}s` : "Resend OTP"}
            </button>
          </div>
          
          <div className="form-group mb-20" style={{position: "relative"}}>
            <input 
              type={showPassword ? "text" : "password"} 
              className="form-control" 
              placeholder="New Password" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
          
          <div className="form-group mb-20" style={{position: "relative"}}>
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              className="form-control" 
              placeholder="Confirm New Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          
          <div className="form-group mb-20">
            <button 
              type="submit" 
              className="theme-btn style-one"
              disabled={loading}
              style={{
                width: "100%",
                padding: "15px",
                background: loading ? "#666" : "#9CFE4F",
                color: "black",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease"
              }}
            >
              {loading ? "Processing..." : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}