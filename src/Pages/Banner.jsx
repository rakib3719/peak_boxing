import React from 'react'
import cover from '../assets/images/cover2.jpg'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

export default function Banner() {
  return (
    <div
    id='home'
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      />

      {/* Text Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          padding: "0 16px", 
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(24px, 6vw, 56px)", 
            marginBottom: "12px",
            lineHeight: "1.2",
          }}
        >
          <span>Ultimate Crossfit </span>
          <span>Facility</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(14px, 2.5vw, 20px)", 
            marginBottom: "20px",
          }}
        >
          Transform your body, elevate your fitness, and join the community at
          the premier Crossfit facility in town.
        </p>

        <div>
           <a href="#pricing" className="theme-btn style-one">
                                                                    <span className="text-flip">
                                                                        <span className="text">GET STARTED</span>
                                                                        <span className="text" style={{
                                                                            fontSize:"30px",
                                                                            textAlign:"center",
                                                                            fontWeight:"700"
                                                                        }}> <BsArrowRight/></span>
                                                                    </span>
                                                                </a>
        </div>
      </div>
    </div>
  )}
