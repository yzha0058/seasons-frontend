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
  Tabs,
  Tab,
} from "@mui/material";
import React, { useState } from 'react';
import OutfitRecommendationCard from './cards/OutfitRecommendationCard';
import { Link } from 'react-router-dom';

const OutfitRecommendation = () => {
  const [activeTab, setActiveTab] = useState('上衣');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Example data for the recommendation cards
  const recommendations = [
    {
      image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png",
      altText: "穿搭1",
      label: "穿搭1",
    },
    {
      image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png",
      altText: "穿搭2",
      label: "穿搭2",
    },
    {
      image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png",
      altText: "穿搭3",
      label: "穿搭3",
    },
    {
      image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png",
      altText: "穿搭4",
      label: "穿搭4",
    },
    {
      image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png",
      altText: "穿搭5",
      label: "穿搭5",
    },
    {
      image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png",
      altText: "穿搭6",
      label: "穿搭6",
    },
    {
      image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png",
      altText: "穿搭7",
      label: "穿搭7",
    },
    {
      image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png",
      altText: "穿搭8",
      label: "穿搭8",
    },
    {
      image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png",
      altText: "穿搭9",
      label: "穿搭9",
    },
    // Add more items as needed
  ];

  const data = {
    上衣: [
      { 
        image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png", 
        altText: "上衣推荐1", 
        label: "上衣1" 
      },
      { 
        image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png", 
        altText: "上衣推荐2", 
        label: "上衣2" 
      },
    ],
    外套: [
      { 
        image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png", 
        altText: "外套推荐1", 
        label: "外套1" 
      },
      { 
        image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png", 
        altText: "外套推荐2", 
        label: "外套2" 
      },
    ],
    裤装: [
      { 
        image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png", 
        altText: "裤装推荐1", 
        label: "裤装1" 
      },
      { 
        image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png", 
        altText: "裤装推荐2", 
        label: "裤装2" 
      },
    ],
    裙装: [
      { 
        image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png", 
        altText: "裙装推荐1", 
        label: "裙装1" 
      },
      { 
        image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png", 
        altText: "裙装推荐2", 
        label: "裙装2" 
      },
    ],
    鞋履: [
      { 
        image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png", 
        altText: "鞋履推荐1", 
        label: "鞋履1" 
      },
      { 
        image: "https://c.animaapp.com/K95331Bc/img/rectangle-65@2x.png", 
        altText: "鞋履推荐2", 
        label: "鞋履2" 
      },
    ],
  };
  

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
          尝试这类风格的鞋子
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: '275px',
            left: '864px',
            maxWidth: '700px',
            width: '100%',
            height: '750px',
            overflowY: 'scroll',
            overflowX: 'hidden',
            margin: '0 auto',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <Grid
            container
            spacing={2} // Adjust spacing as needed
          >
            {data[activeTab].map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <OutfitRecommendationCard
                  image={item.image}
                  altText={item.altText}
                  label={item.label}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Right-side Tabs */}
        <Box
          sx={{
            position: 'absolute',
            top: '648px',
            right: '-80px',
            width: '250px',
            // borderRadius: '8px',
            // boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
          }}
        >
          {Object.keys(data).map((tabName) => {
            const isSelected = activeTab === tabName;

            return (
              <Button
                key={tabName}
                variant="contained"
                onClick={() => setActiveTab(tabName)} // Update the active tab
                sx={{
                  width: "223px",
                  height: "77px",
                  borderRadius: "10px 0px 0px 10px",
                  backgroundColor: isSelected ? "white" : "#eef0f0",
                  color: isSelected ? "black" : "text.primary",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingLeft: "42px",
                  textTransform: "none",
                  boxShadow: isSelected ? "0px 0px 5px rgba(0, 0, 0, 0.2)" : "none",
                  '&:hover': {
                    backgroundColor: isSelected ? "white" : "#dfe2e2",
                  },
                  mb: 0.5, // Space between buttons
                  fontSize: "1.0rem", // Increase font size
                }}
              >
                {tabName}
              </Button>
            );
          })}
        </Box>


        <Typography
          position="absolute"
          width="140px"
          top="186px"
          left="1178px"
          fontFamily="'Inter', Helvetica"
          fontWeight="normal"
          color="#a5a5a5"
          fontSize="1.2rem"
        >
          关键词：少女感
        </Typography>
      </Box>
    </Box>
  );
};

export default OutfitRecommendation;
