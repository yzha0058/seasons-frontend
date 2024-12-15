import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

export const BodyResult = () => {
  const location = useLocation();
  const { capturedImage, apiResponse } = location.state || {};

  return (
    <div className="screen-5">
      <div className="page-5">
        <img className="vector" alt="Vector" src="/img/vector-2-1.svg" />
        <img className="vector-2" alt="Vector" src="/img/vector-3-1.svg" />
        <img className="wechatimg-5" alt="Wechatimg" src="/img/wechatimg257-removebg-1-4.svg" />

        {/* Left Sidebar for API Response */}
        <div className="left-sidebar">
          {apiResponse && (
            <div className="api-response-container">
              <h2>Body Shape Info</h2>
              <div className="api-section">
                <p>
                  <strong>上下半身比例:</strong> {apiResponse.body_shape_info?.上下半身比例}
                </p>
                <p>
                  <strong>头肩比:</strong> {apiResponse.body_shape_info?.头肩比}
                </p>
                <p>
                  <strong>头肩比判断:</strong> {apiResponse.body_shape_info?.头肩比判断}
                </p>
                <p>
                  <strong>比例判断:</strong> {apiResponse.body_shape_info?.比例判断}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Centered Overlay Content */}
        <div className="centered-overlay">
          {capturedImage && (
            <div className="captured-image-section">
              <div className="camera-wrapper">
                <img src={capturedImage} alt="Captured" className="centered-image" />
              </div>
            </div>
          )}
        </div>

        <Link className="component-5" to="/style-recommendation">
          <div className="component-2">
            <div className="text-wrapper-15">下一步</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
