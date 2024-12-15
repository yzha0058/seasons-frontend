import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="overlap-group-3">
            <div className="rectangle-4" />

            <div className="text-wrapper-16">请输入您的身高 (单位：厘米)</div>

            <div className="text-wrapper-17">请输入您的胸围 (单位：厘米)</div>

            <div className="text-wrapper-18">请输入您的腰围 (单位：厘米)</div>

            <div className="text-wrapper-19">请输入您的臀围 (单位：厘米)</div>

            <div className="rectangle-5" />

            <div className="rectangle-6" />

            <div className="rectangle-7" />

            <div className="rectangle-8" />

            <img
              className="subtract"
              alt="Subtract"
              src="/img/subtract-4.png"
            />
          </div>

          <div className="text-wrapper-20">02</div>

          <div className="group-3">
            <img className="line-9" alt="Line" src="/img/line-12-1.svg" />

            <img className="line-10" alt="Line" src="/img/line-12-1.svg" />

            <img className="line-11" alt="Line" src="/img/line-12-1.svg" />

            <img className="line-12" alt="Line" src="/img/line-13.svg" />
          </div>

          <Link className="component-3" to="/page-34">
            <div className="text-wrapper-21">下一步</div>
          </Link>

          <img
            className="wechatimg-3"
            alt="Wechatimg"
            src="/img/wechatimg257-removebg-1-3.svg"
          />
        </div>
      </div>
    </div>
  );
};
