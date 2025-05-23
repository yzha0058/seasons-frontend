import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

export const Screen5 = ({ setCapturedImage, setApiResponse }) => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [countdown, setCountdown] = useState(0); // State for countdown
  const [loading, setLoading] = useState(false); // Loading state

  const selectedAnswers = JSON.parse(localStorage.getItem("selectedAnswers"));

  if (selectedAnswers) {
    console.log("Retrieved Additional answers:", selectedAnswers);
  }


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
    if (videoRef.current && canvasRef.current) {
      setLoading(true); // Start loading

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // // **绘制镜像翻转的图像**
      // context.save();
      // context.scale(-1, 1);  // 左右翻转
      // context.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
      // context.restore();

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64Image = canvas.toDataURL("image/png");

      try {
        const response = await fetch("http://localhost:5000/face-analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64Image, answers: selectedAnswers }),
        });

        const data = await response.json();
        setCapturedImage(base64Image);
        setApiResponse(data);
        localStorage.setItem("faceResult", JSON.stringify(data));

        // Navigate to /page-27 with state data
        navigate("/face-result", { state: { capturedImage: base64Image, apiResponse: data } });
      } catch (error) {
        console.error("Error sending image to backend:", error);
      } finally {
        setLoading(false); // Stop loading
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

        {countdown > 0 && (
          <div className="countdown-overlay">
            <h1>{countdown}</h1>
          </div>
        )}

        

        <button 
          className="component-2" 
          onClick={handleCaptureClick} 
          disabled={countdown > 0} // Disable button during countdown
        >
          <div className="text-wrapper-15">面部分析</div>
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
    <div className="left-middle-container">
      <img className="vector" alt="Joystick Icon" src="/img/bi-joystick.svg" />
      <p className="description-text">请使用操作杆控制摄像头</p>
      <p className="description-text">
          尽量保证<span className="bold-red">面部</span>占据图中的方框
        </p>
      <p className="description-text">点击拍照后将有5秒的倒计时</p>
    </div>
    {/* Loading Overlay */}
    {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>处理中...</p>
        </div>
      )}
    </>
  );
};
