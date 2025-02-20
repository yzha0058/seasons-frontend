import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useNavigate  } from "react-router-dom";

export const BodyInput = ({ height, setHeight, chest, setChest, waist, setWaist, hips, setHips }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setHeight(localStorage.getItem("height") || "");
    setChest(localStorage.getItem("chest") || "");
    setWaist(localStorage.getItem("waist") || "");
    setHips(localStorage.getItem("hips") || "");
  }, []);

  // Save values when they change
  useEffect(() => {
    localStorage.setItem("height", height);
    localStorage.setItem("chest", chest);
    localStorage.setItem("waist", waist);
    localStorage.setItem("hips", hips);
  }, [height, chest, waist, hips]);

  // Function to navigate to BodyDet with selected values
  const handleNext = () => {
    navigate("/body-det");
  };

  return (
    <div className="screen-5">
      <div className="page-5">
        {/* Left Image taking 1/3 of the screen width */}
        <img className="left-image" alt="Left Image" src="/img/subtract-4.png" />

         {/* Middle Section (Dropdowns) */}
        <div className="dropdown-container">
          <label className="dropdown-label">
            请输入您的身高(单位：厘米,Ex:160)
            <select className="dropdown" value={height} onChange={(e) => setHeight(e.target.value)}>
              <option value="">选择身高</option>
              {[...Array(31)].map((_, i) => (
                <option key={i} value={140 + i * 2}>{140 + i * 2} cm</option>
              ))}
            </select>
          </label>

          <label className="dropdown-label">
            请输入您的胸围(单位：厘米,ex-80)
            <select className="dropdown" value={chest} onChange={(e) => setChest(e.target.value)}>
              <option value="">选择胸围</option>
              {[...Array(15)].map((_, i) => (
                <option key={i} value={70 + i * 5}>{70 + i * 5} cm</option>
              ))}
            </select>
          </label>

          <label className="dropdown-label">
            请输入您的腰围(单位：厘米,ex-60)
            <select className="dropdown" value={waist} onChange={(e) => setWaist(e.target.value)}>
              <option value="">选择腰围</option>
              {[...Array(17)].map((_, i) => (
                <option key={i} value={50 + i * 5}>{50 + i * 5} cm</option>
              ))}
            </select>
          </label>

          <label className="dropdown-label">
            请输入您的臀围(单位：厘米,ex-90)
            <select className="dropdown" value={hips} onChange={(e) => setHips(e.target.value)}>
              <option value="">选择臀围</option>
              {[...Array(17)].map((_, i) => (
                <option key={i} value={70 + i * 5}>{70 + i * 5} cm</option>
              ))}
            </select>
          </label>
        </div>


        {/* Main Content */}
        <div className="content">
          <img className="vector" alt="Vector" src="/img/vector-2-1.svg" />
          <img className="vector-2" alt="Vector" src="/img/vector-3-1.svg" />

          <Link className="component-5" to="/">
            <img
              className="wechatimg-5"
              alt="Wechatimg"
              src="/img/wechatimg257-removebg-1-4.svg"
            />
          </Link>

          {/* Next Button */}
            <button className="component-2" onClick={handleNext}>
            <div className="text-wrapper-15">下一步</div>
            </button>
        </div>
      </div>
    </div>
  );
};
