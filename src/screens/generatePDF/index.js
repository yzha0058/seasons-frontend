import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

const GeneratePDF = () => {
  const [pdfUrl, setPdfUrl] = useState(""); // State to store the PDF URL
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state

  const storedFaceApiResponse = localStorage.getItem("faceResult");
  let sharedApiResponse;

  const season_recommend = localStorage.getItem("season-recommend") || "";

  if (storedFaceApiResponse) {
    sharedApiResponse = JSON.parse(storedFaceApiResponse); // Convert string to object
    console.log(sharedApiResponse);  // 打印接收的apiResponse
  } else {
    console.log("No stored API response found.");
  }

  const storedBodyApiResponse = localStorage.getItem("bodyResult");
  let apiResponse;

  if (storedBodyApiResponse) {
    apiResponse = JSON.parse(storedBodyApiResponse); // Convert string to object
    console.log(apiResponse);  // 打印接收的apiResponse
  } else {
    console.log("No stored API response found.");
  }

  console.log(sharedApiResponse);
  console.log(apiResponse);

  const fetchPdfUrl = async () => {
    setLoading(true);
    setError(false);
    setPdfUrl(""); // Clear previous URL

    try {
      const response = await axios.post("http://localhost:5000/pdf-upload", {
        face_info: sharedApiResponse,
        body_info: apiResponse,
        season_recommend: season_recommend,
      });

      setPdfUrl(response.data.file_url);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching PDF URL:", error);
      setError(true);
      setLoading(false);
    }
  };

  // Fetch PDF on component mount
  useEffect(() => {
    fetchPdfUrl();
  }, []);

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
              <CircularProgress size={60} sx={{ color: "#555" }} />
            ) : error ? (
              <Typography sx={{ color: "red", fontSize: "1.2rem", fontWeight: "bold" }}>
                报告生成失败，请重试
              </Typography>
            ) : (
              <QRCodeSVG value={pdfUrl} size={300} fgColor="#000" bgColor="#fff" />
            )}
          </Box>

          <Box sx={{ marginTop: "20px" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}
            >
              {loading
                ? "正在生成报告，请稍候..."
                : error
                ? "点击下方按钮重新生成"
                : "请扫描上方二维码获取报告"}
            </Typography>
          </Box>

          {/* Resend Request Button */}
          { error && (
            <Button
              variant="contained"
              onClick={fetchPdfUrl}
              sx={{
                marginTop: "10px",
                backgroundColor: "rgb(0,123,255)",
                color: "#fff",
                fontSize: "1.2rem",
                padding: "10px 20px",
                borderRadius: "25px",
                "&:hover": { backgroundColor: "rgb(0,100,230)" },
              }}
            >
              重新生成报告
            </Button>
          )}
        </Box>

        {/* Return Home Button */}
        <Link to="/thank" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              position: "fixed",
              bottom: 60,
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
            继续
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default GeneratePDF;
