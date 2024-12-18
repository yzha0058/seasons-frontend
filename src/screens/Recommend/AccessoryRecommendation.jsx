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
import AccessoryRecommendCard from './cards/AccessoryRecommendCard';
import { Link } from 'react-router-dom';

const AccessoryRecommendation = () => {
  // Example data for the recommendation cards
  const recommendations = [
    {
      image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Glass/Egg/1.jpg",
      label: "",
    },
    {
      image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Glass/Egg/2.jpg",
      label: "",
    },
    {
      image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Glass/Egg/3.jpg",
      label: "",
    },
    {
      image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Glass/Egg/4.jpg",
      label: "",
    },
    {
      image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Glass/Egg/5.jpg",
      label: "",
    },
    {
      image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Glass/Egg/6.jpg",
      label: "",
    },
    // Add more items as needed
  ];

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
          配饰推荐
        </Typography>
        <Typography
          position="absolute"
          width="3100%"
          top="278px"
          left="874px"
          fontFamily="'Inter', Helvetica"
          fontWeight="normal"
          color="black"
          fontSize="1.5rem"
        >
          属于标准脸型，一般来说可以佩戴任何款式的眼镜。
        </Typography>
        <Grid
                  container
                  spacing={2} // Adjust spacing as needed
                  position="absolute"
                  top="355px"
                  left="864px"
                  sx={{
                    maxWidth: '750px', // Set the maximum width for the entire grid
                    width: '100%',      // Ensures grid doesn’t exceed maxWidth
                    margin: '0 auto',   // Center-aligns the grid within its container
                    maxHeight: '550px', // Limit the height of the grid
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
          {recommendations.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <AccessoryRecommendCard
                image={item.image}
                altText={item.altText}
                label={item.label}
              />
            </Grid>
          ))}
        </Grid>
      <Link to="/outfit-recommendation" style={{ textDecoration: 'none' }}>
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
          下一步：穿搭
        </Button>
      </Link>
  </Box></Box>

);
};

export default AccessoryRecommendation;
