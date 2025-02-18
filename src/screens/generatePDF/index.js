import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react"; // Correct import
import { useNavigate } from "react-router-dom";

const GeneratePDF = ({ sharedApiResponse, apiResponse}) => {
  const [pdfUrl, setPdfUrl] = useState(""); // State to store the PDF URL
  const [loading, setLoading] = useState(true); // Loading state

  console.log(sharedApiResponse);
  console.log(apiResponse);

  useEffect(() => {
    const fetchPdfUrl = async () => {
      try {
        const response = await axios.post("http://localhost:5000/pdf-upload", {
          // user_id: "12345", // Example request payload
          face_info: sharedApiResponse,
          body_info: apiResponse,
        });
        setPdfUrl(response.data.file_url);
        // console.log(response);
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        console.error("Error fetching PDF URL:", error);
        setLoading(false); // Stop loading when data is fetched
      }
    };

    fetchPdfUrl(); // Fetch URL on component mount
  }, []);

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
          position: "relative",
        }}
      >
        <Box sx={{ backgroundColor: "#eef0f0", textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              className="wechatimg-2"
              alt="Wechatimg"
              src="/img/wechatimg257-removebg-1-2.svg"
              style={{ width: "350px", height: "auto" }}
            />
            
            {/* Show Spinner While Loading */}
            {loading ? (
              <CircularProgress size={60} sx={{ color: "#555" }} /> // Loading Spinner
            ) : (
              <QRCodeSVG value={pdfUrl} size={300} fgColor="#000" bgColor="#fff" />
            )}
          </Box>

          <Box sx={{ marginTop: "20px" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}
            >
              {loading ? "正在生成报告，请稍候..." : "请扫描上方二维码获取报告"}
            </Typography>
          </Box>
        </Box>

        <Link to="/" style={{ textDecoration: "none" }} onClick={clearCacheAndNavigate}>
          <Button
            variant="contained"
            sx={{
              position: "fixed",
              bottom: 80,
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

export default GeneratePDF;
