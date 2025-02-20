import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";


export const BodyDet = ({ setCapturedBodyImage, setBodyApiResponse, sharedApiResponse}) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get passed data
  // const { customerHeight, customerChest, customerWaist, customerHips } = location.state || {}; // Extract data safely

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [countdown, setCountdown] = useState(0); // State for countdown

  const height = localStorage.getItem("height");
  const chest = localStorage.getItem("chest");
  const waist = localStorage.getItem("waist");
  const hips = localStorage.getItem("hips");

  useEffect(() => {
    const getCameraFeed = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera: ", error);
      }
    };

    getCameraFeed();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const captureAndNavigate = async () => {
    // console.log(height, chest, waist, hips);
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64Image = canvas.toDataURL("image/png");

      try {
        // Ensure dropdown values are valid
        console.log("🔹 Sending Data:", {
          image: "base64Image",
          height,
          chest,
          waist,
          hips,
        });

        const response = await fetch("http://localhost:5000/body-analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            image: base64Image, 
            height: height, 
            chest: chest, 
            waist: waist, 
            hips: hips,
            face_result: sharedApiResponse
           }),
        });

        const data = await response.json();
        setCapturedBodyImage(base64Image);
        setBodyApiResponse(data);

        // Navigate to /body-result with state data
        navigate("/body-result", { state: { capturedImage: base64Image, apiResponse: data } });
      } catch (error) {
        console.error("Error sending image to backend:", error);
      }
    }
  };

  const handleCaptureClick = () => {
    const duration = 5; // Countdown duration in seconds
    setCountdown(duration);

    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          captureAndNavigate(); // Trigger capture when countdown ends
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <>
      <div className="screen-5">
        <div className="page-5">
          <img className="vector" alt="Vector" src="/img/vector-2-1.svg" />
          <img className="vector-2" alt="Vector" src="/img/vector-3-1.svg" />

          <div className="page2-container">
            <div className="camera-section">
              <div className="camera-wrapper">
                <video ref={videoRef} autoPlay className="video" />
              </div>
            </div>

            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>

          {/* Countdown Overlay */}
          {countdown > 0 && (
            <div className="countdown-overlay">
              <h1>{countdown}</h1>
            </div>
          )}

          {/* Next Step Button with Capture Functionality */}
          <button 
            className="component-2" 
            onClick={handleCaptureClick} 
            disabled={countdown > 0} // Disable button during countdown
          >
            <div className="text-wrapper-15">体态分析</div>
          </button>

          <div className="group-6">
            <div className="rectangle-14" />
            <img className="line-18" alt="Line" src="/img/line-22-2.svg" />
            <img className="line-19" alt="Line" src="/img/line-25.svg" />
            <img className="line-20" alt="Line" src="/img/line-26.svg" />
            <img className="line-21" alt="Line" src="/img/line-25.svg" />
            <img className="line-22" alt="Line" src="/img/line-25.svg" />
            <img className="line-23" alt="Line" src="/img/line-22-2.svg" />
            <img className="line-24" alt="Line" src="/img/line-22-2.svg" />
            <img className="subtract-2" alt="Subtract" src="/img/subtract.svg" />
          </div>

          <Link className="component-5" to="/">
            <img
              className="wechatimg-5"
              alt="Wechatimg"
              src="/img/wechatimg257-removebg-1-4.svg"
            />
          </Link>
        </div>
      </div>

      {/* Joystick Image and Description */}
      <div className="left-middle-container">
        <img className="vector" alt="Joystick Icon" src="/img/bi-joystick.svg" />
        <p className="description-text">请使用操作杆控制摄像头</p>
        <p className="description-text">
          尽量保证<span className="bold-red">身体</span>占据图中的方框
        </p>
        <p className="description-text">点击拍照后将有5秒的倒计时</p>
      </div>
    </>
  );
};

