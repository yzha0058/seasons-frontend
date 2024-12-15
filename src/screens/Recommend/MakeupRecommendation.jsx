// src/screens/Recommend/StyleRecommendation.jsx
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
  // Example data for the recommendation cards
  const recommendations = [
    {
      image: "https://c.animaapp.com/c0NRfluT/img/image-8@2x.png",
      label: "韩妆",
    },
    {
      image: "https://c.animaapp.com/c0NRfluT/img/image-8@2x.png",
      label: "韩妆",
    },
    {
      image: "https://c.animaapp.com/c0NRfluT/img/image-8@2x.png",
      label: "韩妆",
    },
    {
      image: "https://c.animaapp.com/c0NRfluT/img/image-8@2x.png",
      label: "韩妆",
    },
    {
      image: "https://c.animaapp.com/c0NRfluT/img/image-8@2x.png",
      label: "韩妆",
    },
    {
      image: "https://c.animaapp.com/c0NRfluT/img/image-8@2x.png",
      label: "韩妆",
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
        尝试这类风格的不同妆容
      </Typography>
      <Grid
        container
        spacing={2} // Adjust spacing as needed
        position="absolute"
        top="255px"
        left="864px"
        sx={{
          maxWidth: '700px', // Set the maximum width for the entire grid
          width: '100%',      // Ensures grid doesn’t exceed maxWidth
          margin: '0 auto',   // Center-aligns the grid within its container
        }}
      >
        {recommendations.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <MakeupRecommendationCard
              image={item.image}
              altText={item.altText}
              label={item.label}
            />
          </Grid>
        ))}
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
      {/* <Typography
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
      </Typography> */}
  </Box></Box>

);
};

export default MakeupRecommendation;
