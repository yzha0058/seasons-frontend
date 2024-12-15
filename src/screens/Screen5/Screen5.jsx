import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

export const Screen5 = ({ setCapturedImage, setApiResponse }) => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

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
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64Image = canvas.toDataURL("image/png");

      try {
        const response = await fetch("http://localhost:5000/face-analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64Image }),
        });

        const data = await response.json();
        setCapturedImage(base64Image);
        setApiResponse(data);

        // Navigate to /page-27 with state data
        navigate("/face-result", { state: { capturedImage: base64Image, apiResponse: data } });
      } catch (error) {
        console.error("Error sending image to backend:", error);
      }
    }
  };

  return (
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

        {/* Next Step Button with Capture Functionality */}
        <button className="component-2" onClick={captureAndNavigate}>
          {/* <div className="component-2"> */}
            <div className="text-wrapper-15">拍照并分析</div>
          {/* </div> */}
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
  );
};
