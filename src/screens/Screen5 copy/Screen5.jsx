import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const Screen5 = () => {
  return (
    <div className="screen-5">
      <div className="page-5">
        <img className="vector" alt="Vector" src="/img/vector-2-1.svg" />

        <img className="vector-2" alt="Vector" src="/img/vector-3-1.svg" />

        <img className="image-6" alt="Image" src="/img/image-1.png" />

        <div className="group-5">
          <div className="rectangle-13" />

          <div className="text-wrapper-30">
            请上下调整摇杆，将摄像头对准头部。
          </div>

          <img
            className="bi-joystick"
            alt="Bi joystick"
            src="/img/bi-joystick.svg"
          />

          <div className="text-wrapper-31">
            请面朝机器，目视前方，我们现在需要扫描您的身体数据。
          </div>

          <div className="text-wrapper-31">
            请面朝机器，目视前方，我们现在需要扫描您的身体数据。
          </div>
        </div>

        <Link className="component-5" to="/page-27">
          <div className="component-2">
            <div className="text-wrapper-15">下一步</div>
          </div>
        </Link>

        <img
          className="wechatimg-5"
          alt="Wechatimg"
          src="/img/wechatimg257-removebg-1-4.svg"
        />

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

        <img
          className="uiw-loading"
          alt="Uiw loading"
          src="/img/uiw-loading.svg"
        />

        <div className="text-wrapper-32">扫描中...</div>

        <div className="text-wrapper-32">扫描中...</div>

        <div className="text-wrapper-33">
          识别面部五官属性，包括三庭五眼分析及面部各部位包括眉毛、眼睛、鼻子、嘴巴、下巴等属性分类。
        </div>

        
      </div>
    </div>
  );
};
