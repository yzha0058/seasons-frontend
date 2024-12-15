import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

export const Screen5result = () => {
  const location = useLocation();
  const { capturedImage, apiResponse } = location.state || {};

  console.log(apiResponse)

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
              <h2>分析细节</h2>
              <div className="api-section">
                <h3>脸型分析</h3>
                <p>三庭比例: {apiResponse.Face_shape_info?.三庭比例}</p>
                <p>三线比例: {apiResponse.Face_shape_info?.["三线比例 "]}</p>
                <p>下巴形状: {apiResponse.Face_shape_info?.["下巴形状 "]}</p>
                <p>五眼比例: {apiResponse.Face_shape_info?.五眼比例}</p>
                <p>气质类型: {apiResponse.Face_shape_info?.["气质类型 "] || "N/A"}</p>
                <p>脸型判断结果: {apiResponse.Face_shape_info?.["脸型判断结果 "]}</p>
                <p>脸长和脸宽的比例: {apiResponse.Face_shape_info?.["脸长和脸宽的比例 "]}</p>
              </div>
              <div className="api-section">
                <h3>嘴唇分析</h3>
                <p>厚薄: {apiResponse.Lips_detailed_info?.厚薄}</p>
                <p>右嘴角: {apiResponse.Lips_detailed_info?.右嘴角}</p>
                <p>左嘴角: {apiResponse.Lips_detailed_info?.左嘴角}</p>
                <p>唇形: {apiResponse.Lips_detailed_info?.唇形}</p>
              </div>
              <div className="api-section">
                <h3>眼睛分析</h3>
                <p>右眼内眼角角度: {apiResponse.eye_detailed_info?.右眼内眼角角度}</p>
                <p>右眼形状: {apiResponse.eye_detailed_info?.右眼形状}</p>
                <p>右眼眼长和眼高的比例: {apiResponse.eye_detailed_info?.右眼眼长和眼高的比例}</p>
                <p>左眼内眼角角度: {apiResponse.eye_detailed_info?.左眼内眼角角度}</p>
                <p>左眼形状: {apiResponse.eye_detailed_info?.左眼形状}</p>
                <p>左眼眼长和眼高的比例: {apiResponse.eye_detailed_info?.左眼眼长和眼高的比例}</p>
              </div>
              <div className="api-section">
                <h3>鼻子分析</h3>
                <p>右脸: {apiResponse.nose_detailed_info?.山根位置?.右脸}</p>
                <p>左脸: {apiResponse.nose_detailed_info?.山根位置?.左脸}</p>
                <p>鼻翼宽窄判断: {apiResponse.nose_detailed_info?.鼻翼宽窄判断}</p>
                <p>右鼻翼曲率: {apiResponse.nose_detailed_info?.鼻翼曲直判断?.右鼻翼曲率}</p>
                <p>左鼻翼曲率: {apiResponse.nose_detailed_info?.鼻翼曲直判断?.左鼻翼曲率}</p>
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

        <Link className="component-5" to="/body-det">
          <div className="component-2">
            <div className="text-wrapper-15">下一步</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
