import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react"; // Correct import
import { useNavigate } from "react-router-dom";

const GeneratePDF = () => {
  const pdfUrl = "https://your-cloud-storage.com/your-file.pdf";

  const clearCacheAndNavigate = () => {
    // Clear localStorage and sessionStorage
    localStorage.clear();
    sessionStorage.clear();
  
    // Optional: Trigger a page reload to ensure no cached data is used
    // window.location.reload();
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
          position: "relative", // Keep relative for nested elements
        }}
      >
        <Box
          sx={{
            backgroundColor: "#eef0f0",
            textAlign: "center",
          }}
        >
          {/* Grouping Image and QR Code */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px", // Adjust the space between elements
            }}
          >
            <img
              className="wechatimg-2"
              alt="Wechatimg"
              src="/img/wechatimg257-removebg-1-2.svg"
              style={{
                width: "350px", // Adjust size of the image
                height: "auto", // Maintain aspect ratio
              }}
            />
            {/* QR Code */}
            <QRCodeSVG
              value={pdfUrl} // The URL for the QR code
              size={300} // Adjust size as needed
              fgColor="#000" // Foreground color of the QR code
              bgColor="#fff" // Background color of the QR code
            />
          </Box>

          {/* Instruction Text */}
          <Box sx={{ marginTop: "20px" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}
            >
              请扫描上方二维码获取报告
            </Typography>
          </Box>
        </Box>

        <Link to="/" style={{ textDecoration: "none" }} onClick={clearCacheAndNavigate}>
          <Button
            variant="contained"
            sx={{
              position: "fixed", // Stick to the bottom of the page
              bottom: 80, // Adjust space from the bottom
              left: "50%", // Center horizontally
              transform: "translateX(-50%)", // Adjust for horizontal centering
              width: 301,
              height: 95,
              borderRadius: "75px",
              background:
                "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              color: "black",
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "'Inter', Helvetica",
              zIndex: 1000, // Ensure it's above other elements
            }}
          >
            返回首页
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default GeneratePDF;
