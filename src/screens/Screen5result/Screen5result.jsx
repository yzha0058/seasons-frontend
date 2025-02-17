import React, {useEffect} from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

export const Screen5result = ({setSharedApiResponse }) => {
  const location = useLocation();
  const { capturedImage, apiResponse } = location.state || {};

  console.log(apiResponse)  // 打印接收的apiResponse

  useEffect(() => {
    if (apiResponse) {
      console.log("Setting sharedApiResponse:");
      setSharedApiResponse(apiResponse);
    }
  }, [apiResponse, setSharedApiResponse]);

  return (
    <div className="screen-5">
      <div className="page-5">
        <img className="vector" alt="Vector" src="/img/vector-2-1.svg" />
        <img className="vector-2" alt="Vector" src="/img/vector-3-1.svg" />
        <Link className="component-5" to="/">
            <img
                className="wechatimg-5"
                alt="Wechatimg"
                src="/img/wechatimg257-removebg-1-4.svg"
            />
        </Link>

        {/* Left Sidebar for API Response */}
        
        <div className="left-sidebar">
          {apiResponse && (
            <div className="api-response-container">
              <h2>分析细节</h2>
              <div className="api-section">
                <h3>脸型分析</h3>
                <p>三庭比例: {apiResponse.Face_shape_info?.["三庭比例"]}</p>
                <p>三线比例: {apiResponse.Face_shape_info?.["三线比例"]}</p>
                <p>下巴形状: {apiResponse.Face_shape_info?.["下巴形状"]}</p>
                <p>五眼比例: {apiResponse.Face_shape_info?.["五眼比例"]}</p>
                <p>气质类型: {apiResponse.Face_shape_info?.["脸部风格"] || "N/A"}</p>
                <p>脸型判断结果: {apiResponse.Face_shape_info?.["脸型判断结果"]}</p>
                <p>脸长和脸宽的比例: {apiResponse.Face_shape_info?.["脸长和脸宽的比例"]}</p>
                <p>脸型曲直: {apiResponse.Face_shape_info?.["脸型曲直"]}</p>
              </div>
              <div className="api-section">
                <h3>嘴唇分析</h3>
                <p>唇形: {apiResponse.Lips_detailed_info?.["唇形"]}</p>
                <p>唇部数据: {apiResponse.Lips_detailed_info?.["唇部数据"]}</p>
                <p>上唇: {apiResponse.Lips_detailed_info?.["上唇"]}</p>
                <p>下唇: {apiResponse.Lips_detailed_info?.["下唇"]}</p>
                <p>上下唇比例: {apiResponse.Lips_detailed_info?.["上下唇比例"]}</p>
                <p>嘴唇曲直: {apiResponse.Lips_detailed_info?.["曲直结果"]}</p>
              </div>
              <div className="api-section">
                <h3>眼睛分析</h3> 
                <p>右眼类型: {apiResponse.eye_detailed_info?.["右眼类型"]}</p>
                <p>右眼曲直: {apiResponse.eye_detailed_info?.["右眼曲直"]}</p>
                <p>右眼眼长和眼高的比例: {apiResponse.eye_detailed_info?.["右眼眼长和眼高的比例"]}</p>
                <p>左眼类型: {apiResponse.eye_detailed_info?.["左眼类型"]}</p>
                <p>左眼曲直: {apiResponse.eye_detailed_info?.["左眼曲直"]}</p>
                <p>左眼眼长和眼高的比例: {apiResponse.eye_detailed_info?.["左眼眼长和眼高的比例"]}</p>
                <p>眼型综合曲直: {apiResponse.eye_detailed_info?.["眼型综合曲直"]}</p>
              </div>
              <div className="api-section">
                <h3>鼻子分析</h3>
                <p>右脸山根: {apiResponse.nose_detailed_info?.["右脸山根"]}</p>
                <p>左脸山根: {apiResponse.nose_detailed_info?.["左脸山根"]}</p>
                <p>山根曲直: {apiResponse.nose_detailed_info?.["山根曲直"]}</p>
                <p>鼻翼宽窄判断: {apiResponse.nose_detailed_info?.["鼻翼宽窄判断"]}</p>
                <p>鼻翼曲直判断: {apiResponse.nose_detailed_info?.["鼻翼曲直判断"]}</p>
                <p>鼻孔比例: {apiResponse.nose_detailed_info?.["鼻孔比例"]}</p>
                <p>综合曲直结果: {apiResponse.nose_detailed_info?.["鼻型综合曲直"]}</p>
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

        <Link className="component-5" to="/body-input">
          <div className="component-2">
            <div className="text-wrapper-15">下一步</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
