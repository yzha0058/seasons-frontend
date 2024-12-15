import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
  } from "@mui/material";

const GeneratePDF = () => {
  const [backendData, setBackendData] = useState({
    title: "Dynamic PDF Generation",
    description: "This is an example of generating a PDF with backend data and online images.",
    imageUrl: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/Girl/Hairstyle/1.jpg",
  });

  const handleGeneratePdf = async () => {
    const doc = new jsPDF();

    // Add Title
    doc.setFontSize(18);
    doc.text(backendData.title, 10, 10);

    // Add Description
    doc.setFontSize(12);
    doc.text(backendData.description, 10, 20);

    // Save PDF
    doc.save("example.pdf");
  };

  return (
    <div>
        <Box
      sx={{
        backgroundColor: "#eef0f0",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#eef0f0",
          overflow: "hidden",
          width: "1920px",
          height: "1080px",
          position: "relative",
        }}
      >
        
        <button onClick={handleGeneratePdf}>Generate PDF</button>
        </Box></Box>
    </div>
  );
};

export default GeneratePDF;
