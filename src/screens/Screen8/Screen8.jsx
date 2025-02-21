import React, { useState } from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

export const Screen8 = () => {
  // Load stored answers from localStorage (if any)
  const [selectedAnswers, setSelectedAnswers] = useState(() => {
    const storedAnswers = localStorage.getItem("selectedAnswers");
    return storedAnswers ? JSON.parse(storedAnswers) : { eyesight: null, collarbone: null, kneecap: null };
  });

  // Function to handle selection for multiple questions
  const handleSelect = (question, answer) => {
    const updatedAnswers = {
      ...selectedAnswers,
      [question]: answer,
    };
    setSelectedAnswers(updatedAnswers);
    localStorage.setItem("selectedAnswers", JSON.stringify(updatedAnswers)); // Save to localStorage
  };

  // Check if all questions are answered
  const allAnswered = Object.values(selectedAnswers).every((answer) => answer !== null);

  return (
    <div className="screen-8">
      <div className="page-8">
        <div className="rectangle-51" />

        <div className="frame-2">
        <div className="group-17">
          <div className="text-wrapper-96">A.</div>
          <div className="text-wrapper-97">B.</div>
          <div className="text-wrapper-98">C.</div>

          <div className="text-wrapper-99">你认为或者朋友评价你的眼神是偏：</div>

          {/* Option A */}
          <div onClick={() => handleSelect("eyesight", "A")}>
            <div className="text-wrapper-100">温柔｜可爱｜元气</div>
            <img
              className={`image-24 ${selectedAnswers.eyesight === "A" ? "selected-image" : ""}`}
              alt="Option A"
              src="/img/image-3-1.png"
            />
          </div>

          {/* Option B */}
          <div onClick={() => handleSelect("eyesight", "B")}>
            <div className="text-wrapper-101">酷飒｜高冷｜凌厉</div>
            <img
              className={`image-23 ${selectedAnswers.eyesight === "B" ? "selected-image" : ""}`}
              alt="Option B"
              src="/img/image-2.png"
            />
          </div>

          {/* Option C */}
          <div onClick={() => handleSelect("eyesight", "C")}>
            <div className="text-wrapper-102">知性｜温柔｜沉稳</div>
            <img
              className={`image-22 ${selectedAnswers.eyesight === "C" ? "selected-image" : ""}`}
              alt="Option C"
              src="/img/rectangle-22.png"
            />
          </div>

        </div>

        <div className="group-18">
          <div className="text-wrapper-96">A.</div>
          <div className="text-wrapper-97">B.</div>
          <div className="text-wrapper-98">C.</div>

          <div className="text-wrapper-104">你的锁骨是属于：</div>

          {/* Option A: 不明显 */}
          <div onClick={() => handleSelect("collarbone", "A")}>
            <div className="text-wrapper-100">不明显</div>
            <img
              className={`image-54 ${selectedAnswers.collarbone === "A" ? "selected-image" : ""}`}
              alt="Option A"
              src="/img/rectangle-23.png"
            />
          </div>

          {/* Option B: 偏细长 */}
          <div onClick={() => handleSelect("collarbone", "B")}>
            <div className="text-wrapper-101">偏细长</div>
            <img
              className={`image-53 ${selectedAnswers.collarbone === "B" ? "selected-image" : ""}`}
              alt="Option B"
              src="/img/rectangle-24.png"
            />
          </div>

          {/* Option C: 较粗 */}
          <div onClick={() => handleSelect("collarbone", "C")}>
            <div className="text-wrapper-102">较粗</div>
            <img
              className={`image-52 ${selectedAnswers.collarbone === "C" ? "selected-image" : ""}`}
              alt="Option C"
              src="/img/rectangle-25.png"
            />
          </div>
        </div>

        <div className="group-19">
          <div className="text-wrapper-96">A.</div>
          <div className="text-wrapper-97">B.</div>
          <div className="text-wrapper-98">C.</div>

          <div className="text-wrapper-104">你的膝盖骨是属于：</div>

          {/* Option A: 不明显 */}
          <div onClick={() => handleSelect("kneecap", "A")}>
            <div className="text-wrapper-100">不明显</div>
            <img
              className={`image-55 ${selectedAnswers.kneecap === "A" ? "selected-image" : ""}`}
              alt="Option A"
              src="/img/knee.jpg"
            />
          </div>

          {/* Option B: 偏细长 */}
          <div onClick={() => handleSelect("kneecap", "B")}>
            <div className="text-wrapper-101">偏细长</div>
            <img
              className={`image-56 ${selectedAnswers.kneecap === "B" ? "selected-image" : ""}`}
              alt="Option B"
              src="/img/knee.jpg"
            />
          </div>

          {/* Option C: 较粗 */}
          <div onClick={() => handleSelect("kneecap", "C")}>
            <div className="text-wrapper-102">较粗</div>
            <img
              className={`image-57 ${selectedAnswers.kneecap === "C" ? "selected-image" : ""}`}
              alt="Option C"
              src="/img/knee.jpg"
            />
          </div>

        </div>
        </div>

        <img
          className="mask-group-5"
          alt="Mask group"
          src="/img/ai-human2.png"
        />

        <Link className="component-5" to="/">
          <img
            className="wechatimg-5"
            alt="Wechatimg"
            src="/img/wechatimg257-removebg-1-4.svg"
          />
        </Link>

        {/* Show button only if all questions are answered */}
        {allAnswered && (
          <Link to="/face-det" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                width: 301,
                height: 95,
                top: 125,
                left: 1518,
                borderRadius: "75px",
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
                color: "black",
                fontSize: "2rem",
                fontWeight: "bold",
                fontFamily: "'Inter', Helvetica",
              }}
            >
              下一步
            </Button>
          </Link>
        )}

        <div className="text-wrapper-107">补充回答</div>

        <div className="text-wrapper-108">帮助我们更好了解您的特点</div>

        <div className="text-wrapper-107">补充回答</div>

        <div className="text-wrapper-108">帮助我们更好了解您的特点</div>
      </div>
    </div>
  );
};
