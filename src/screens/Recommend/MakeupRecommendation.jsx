import NavigationTab from './NavigationTab';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import React, { useState } from 'react';
import MakeupRecommendationCard from './cards/MakeupRecommendationCard';
import { Link } from 'react-router-dom';

const MakeupRecommendation = () => {
  const [showQuestionPage, setShowQuestionPage] = useState(true);
  const [selectedLabel, setSelectedLabel] = useState("");

  const questionData = [
    {
      label: "亮春",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/spring/LiangChun/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/spring/LiangChun/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/spring/LiangChun/3.jpg",
      ],
    },
    {
      label: "柔春",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/spring/RouChun/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/spring/RouChun/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/spring/RouChun/3.jpg",
      ],
    },
    {
      label: "浅春",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/spring/QianChun/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/spring/QianChun/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/spring/QianChun/3.jpg",
      ],
    },
    {
      label: "亮夏",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/summer/LiangXia/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/summer/LiangXia/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/summer/LiangXia/3.jpg",
      ],
    },
    {
      label: "柔夏",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/summer/RouXia/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/summer/RouXia/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/summer/RouXia/3.jpg",
      ],
    },
    {
      label: "浅夏",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/summer/QianXia/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/summer/QianXia/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/summer/QianXia/3.jpg",
      ],
    },
    {
      label: "亮秋",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/autumn/LiangQiu/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/autumn/LiangQiu/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/autumn/LiangQiu/3.jpg",
      ],
    },
    {
      label: "柔秋",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/autumn/RouQiu/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/autumn/RouQiu/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/autumn/RouQiu/3.jpg",
      ],
    },
    {
      label: "深秋",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/autumn/ShenQiu/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/autumn/ShenQiu/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/autumn/ShenQiu/3.jpg",
      ],
    },
    {
      label: "亮冬",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/winter/LiangDong/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/winter/LiangDong/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/winter/LiangDong/3.jpg",
      ],
    },
    {
      label: "浅冬",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/winter/QianDong/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/winter/QianDong/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/winter/QianDong/3.jpg",
      ],
    },
    {
      label: "深冬",
      images: [
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/winter/ShenDong/1.jpg", // Replace with actual URL
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/winter/ShenDong/2.jpg",
        "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/winter/ShenDong/3.jpg",
      ],
    },
  ];
  

  // Example data for the recommendation cards
  const recommendations = [
    {
      image: "https://c.animaapp.com/c0NRfluT/img/image-8@2x.png",
      label: "韩妆",
    },
    // Add more items as needed
  ];

  const handleLabelClick = (label) => {
    setSelectedLabel(label);
    setShowQuestionPage(false); // Transition to the main content
  };

  // Map labels to their corresponding image URLs
  const imageUrls = {
    "亮春": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/LiangChun.jpg",
    "柔春": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/RouChun.jpg",
    "浅春": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/QianChun.jpg",
    "亮夏": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/LiangXia.jpg",
    "柔夏": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/RouXia.jpg",
    "浅夏": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/QianXia.jpg",
    "亮秋": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/LiangQiu.jpg",
    "柔秋": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/RouQiu.jpg",
    "深秋": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/ShenQiu.jpg",
    "亮冬": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/LiangDong.jpg",
    "浅冬": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/QianDong.jpg",
    "深冬": "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/MakeUp/12-Season-Makeup/ShenDong.jpg",
  };

  if (showQuestionPage) {
    return (
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
        <NavigationTab />
        <Box
            // User picture image
            component="img"
            position="absolute"
            width="795px"
            height="956px"
            top="124px"
            left={0}
            alt="Mask group"
            src="https://c.animaapp.com/K95331Bc/img/mask-group.png"
          />
        <Typography
          position="absolute"
          width="387px"
          top="178px"
          left="874px"
          fontFamily="'Inter', Helvetica"
          fontWeight="normal"
          color="black"
          fontSize="2rem"
        >
          你的色彩测试结果是
        </Typography>
        <Grid
          container
          spacing={2} // Adjust spacing as needed
          position="absolute"
          top="255px"
          left="864px"
          sx={{
            maxWidth: '750px', // Set the maximum width for the entire grid
            width: '100%',      // Ensures grid doesn’t exceed maxWidth
            margin: '0 auto',   // Center-aligns the grid within its container
            maxHeight: '650px', // Limit the height of the grid
            overflowY: 'scroll', // Enable scrolling
            backgroundColor: '#eef0f0', // Optional: Add background color for better contrast
            padding: '1rem',    // Optional: Add padding inside the scrollable area
            borderRadius: '8px', // Optional: Add rounded corners for aesthetics
            // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow effect
            '&::-webkit-scrollbar': {
              display: 'none', // Hide scrollbar in WebKit browsers
            },
            '-ms-overflow-style': 'none', // Hide scrollbar in IE and Edge
            'scrollbar-width': 'none', // Hide scrollbar in Firefox
          }}
        >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {questionData.map((item, index) => (
            <Box
              key={index}
              onClick={() => handleLabelClick(item.label)}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                padding: "1rem",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                '&:hover': {
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Typography
                sx={{
                  flex: "1",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  fontFamily: "'Inter', Helvetica",
                  textAlign: "left",
                  marginRight: "1rem",
                }}
              >
                {item.label}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                {item.images.map((url, imgIndex) => (
                  <Box
                    key={imgIndex}
                    component="img"
                    src={url}
                    alt={`${item.label} Image ${imgIndex + 1}`}
                    sx={{
                      width: "180px", // Define the maximum width for the image
                      height: "180px", // Define the maximum height for the image
                      borderRadius: "4px", // Optional: Add rounded corners
                      objectFit: "contain", // Ensure the image is scaled proportionally
                      overflow: "hidden", // Prevent overflow
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        </Grid>
        <Link to="/accessory-recommendation" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              width: 301,
              height: 95,
              top: 915,
              left: 1318,
              borderRadius: "75px",
              background:
                "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              color: "black",
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "'Inter', Helvetica",
            }}
          >
            跳过
          </Button>
        </Link>
        </Box>
      </Box>
    );
  }

  return (
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
        <NavigationTab />
        
        <Box
            // User picture image
            component="img"
            position="absolute"
            width="795px"
            height="956px"
            top="124px"
            left={0}
            alt="Mask group"
            src="https://c.animaapp.com/K95331Bc/img/mask-group.png"
          />
        <Typography
          position="absolute"
          width="387px"
          top="178px"
          left="874px"
          fontFamily="'Inter', Helvetica"
          fontWeight="normal"
          color="black"
          fontSize="2rem"
        >
          尝试这类风格的不同妆容
        </Typography>
        <Grid
          container
          position="absolute"
          top="255px"
          left="864px"
          sx={{
            maxWidth: '700px', // Set the maximum width for the grid
            width: '100%',      // Ensures grid doesn’t exceed maxWidth
            height: '600px',    // Set a fixed height for the grid
            margin: '0 auto',   // Center-aligns the grid within its container
            overflow: 'hidden', // Prevent content overflow
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start', // Align the image to the top of the grid
              alignItems: 'flex-start',    // Align the image to the top of the grid
              height: '100%',
              overflowY: 'scroll', // Enable vertical scrolling
              scrollbarWidth: 'none', // Hide scrollbar for Firefox
              '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar for WebKit browsers
            }}
          >
            <img
              src={imageUrls[selectedLabel]} // Dynamically update the URL based on selectedLabel
              alt={selectedLabel || "Recommendation"} // Provide meaningful alt text
              style={{
                width: '100%', // Make the image fill the grid width
                height: 'auto', // Maintain aspect ratio
                borderRadius: '8px', // Optional: Add some styling like rounded corners
                objectFit: 'contain', // Ensures the image fits within its container proportionally
              }}
            />
          </Grid>
        </Grid>

        <Link to="/accessory-recommendation" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              width: 301,
              height: 95,
              top: 915,
              left: 1318,
              borderRadius: "75px",
              background:
                "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              color: "black",
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "'Inter', Helvetica",
            }}
          >
            下一步：配饰
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default MakeupRecommendation;
