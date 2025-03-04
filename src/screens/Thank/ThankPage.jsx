import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ThankPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100); // Small delay to ensure animation triggers
  }, []);

  const clearCacheAndNavigate = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#eef0f0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        {/* Animated Image */}
        <img
        className="wechatimg-2"
        alt="Wechatimg"
        src="/img/wechatimg257-removebg-1-2.svg"
        style={{
            width: "650px",
            height: "auto",
            position: "absolute",
            transition: "transform 1.5s ease-in-out, opacity 1.5s ease-in-out",
            transform: animate ? "translate(0, 50px) scale(1)" : "translate(-50vw, -50vh) scale(0.2)",
            opacity: animate ? 1 : 0, // Fade in effect
        }}
        />

        {/* Animated Text */}
        <Typography
        sx={{
            color: "black",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "500px",
            opacity: animate ? 1 : 0, // Fade-in effect
            transition: "opacity 1.5s ease-in-out",
        }}
        >
        感谢使用SEASONS COLOR自测机{"\uD83D\uDE0A"}！
        </Typography>


        {/* Return Home Button */}
        <Link to="/" style={{ textDecoration: "none" }} onClick={clearCacheAndNavigate}>
          <Button
            variant="contained"
            sx={{
              position: "fixed",
              bottom: 160,
              left: "50%",
              transform: "translateX(-50%)",
              width: 301,
              height: 95,
              borderRadius: "75px",
              background:
                "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              color: "black",
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "'Inter', Helvetica",
              zIndex: 1000,
            }}
          >
            返回首页
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default ThankPage;
