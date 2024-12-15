// src/screens/Recommend/StyleRecommendation.jsx
import NavigationTab from './NavigationTab';
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
import React, { useState } from 'react';
import HairRecommendationCard from './cards/HairRecommendationCard';
import { Link } from 'react-router-dom';

const HairRecommendation = () => {
    // Example data for the recommendation cards
    const recommendations = [
      // {
      //   image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png",
      //   altText: "小卷发",
      //   label: "小卷发",
      // },
      {
        image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/Girl/Hairstyle/1.jpg",
        altText: "小卷发",
        label: "小卷发",
      },
      {
        image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/Girl/Hairstyle/2.jpg",
        altText: "大卷发",
        label: "大卷发",
      },
      {
        image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/Girl/Hairstyle/3.jpg",
        altText: "直发",
        label: "直发",
      },
      {
        image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/Girl/Hairstyle/4.jpg",
        altText: "小卷发",
        label: "小卷发",
      },
      {
        image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/Girl/Hairstyle/5.jpg",
        altText: "大卷发",
        label: "大卷发",
      },
      {
        image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/Girl/Hairstyle/6.jpg",
        altText: "直发",
        label: "直发",
      },
      {
        image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/Girl/Hairstyle/7.jpg",
        altText: "直发",
        label: "直发",
      },
      {
        image: "https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/Girl/Hairstyle/8.jpg",
        altText: "直发",
        label: "直发",
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
          尝试这类风格的不同发型
        </Typography>
        <Grid
          container
          spacing={2}
          position="absolute"
          top="275px"
          left="864px"
          sx={{
            maxWidth: '700px', // Set the maximum width for the entire grid
            width: '100%',      // Ensures grid doesn’t exceed maxWidth
            margin: '0 auto',   // Center-aligns the grid within its container
            maxHeight: '600px', // Limit the maximum height of the grid
            overflowY: 'auto',  // Enable vertical scrolling when content exceeds maxHeight
            pr: '16px',         // Prevent overlap of content with hidden scrollbar (if applicable)
            scrollbarWidth: 'none', // Hide scrollbar in Firefox
            '&::-webkit-scrollbar': {
              display: 'none',   // Hide scrollbar in Chrome, Edge, Safari
            },
          }}
        >
          {recommendations.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <HairRecommendationCard
                image={item.image}
                altText={item.altText}
                label={item.label}
              />
            </Grid>
          ))}
        </Grid>
        <Link to="/makeup-recommendation" style={{ textDecoration: 'none' }}>
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
            下一步：妆容
          </Button>
        </Link>
        <Typography
          position="absolute"
          width="140px"
          top="186px"
          left="1278px"
          fontFamily="'Inter', Helvetica"
          fontWeight="normal"
          color="#a5a5a5"
          fontSize="1.2rem"
        >
          关键词：少女感
        </Typography>
    </Box></Box>
 
  );
};

export default HairRecommendation;
