import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

export const BodyDet = ({ setCapturedBodyImage, setBodyApiResponse }) => {
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

      // 设置画布尺寸与视频流一致
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // 将视频帧绘制到画布上并转换为 Base64 图像数据
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64Image = canvas.toDataURL("image/png");

    // === 添加图片大小检查 ===
    // Base64 字符串长度会大约比原始图像大33%，需要反推原始大小：
    const base64Length = base64Image.length * (3 / 4) - 814; // 减去 header 的长度
    const maxSize = 16 * 1024 * 1024; // 设置最大大小为16MB

    if (base64Length > maxSize) {
      alert("图片大小超过限制，请选择较小的图片或调整摄像头分辨率！");
      return; // 如果图片过大，阻止继续处理
    }
    // === 检查结束 ===


      try {
        const response = await fetch("http://localhost:5000/body-analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64Image }),
        });

        // 检查响应状态
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setCapturedBodyImage(base64Image);
        setBodyApiResponse(data);

        // Navigate to /page-27 with state data
        // 导航到结果页面
        navigate("/body-result", { state: { capturedImage: base64Image, apiResponse: data } });
      } catch (error) {
        console.error("Error sending image to backend:", error);
        alert("上传图片失败，请稍后再试！");
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
            <div className="text-wrapper-15">下一步</div>
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
