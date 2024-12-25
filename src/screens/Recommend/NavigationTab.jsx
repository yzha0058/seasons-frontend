// src/screens/Recommend/NavigationTab.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
    Button,
  } from "@mui/material";

const navigationItems = [
  {
    label: '风格推荐',
    path: '/style-recommendation',
  },
  {
    label: '发型推荐',
    path: '/hairstyle-recommendation',
  },
  {
    label: '妆容推荐',
    path: '/makeup-recommendation',
  },
  {
    label: '配饰推荐',
    path: '/accessory-recommendation',
  },
  {
    label: '风格穿搭',
    path: '/style-outfit-recommendation',
  },
  {
    label: '穿搭推荐',
    path: '/outfit-recommendation',
  },
  
];

const NavigationTab = () => {
  const location = useLocation();

  return (
    <Box>
    <Box
      sx={{
        position: "absolute",
        width: "231px",
        height: "1080px",
        top: "144px",
        left: "1697px",
      }}
    >
      {navigationItems.map((item, index) => {
        const isSelected = location.pathname === item.path;

        return (
          <Link
            key={index}
            to={item.path}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              sx={{
                width: "223px",
                height: "97px",
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
                mb: 0.5,
              }}
            >
              <Typography variant="h6">{item.label}</Typography>
            </Button>
          </Link>
        );
      })}
      
        </Box>
        <Link className="component-5" to="/">
            <CardMedia
            component="img"
            sx={{
            width: "163px",
            height: "153px",
            position: "absolute",
            top: 0,
            left: "4px",
            }}
            image="/img/wechatimg257-removebg-1-4.svg"
            alt="Wechatimg"
        />
      </Link>
    </Box>
  );
};

export default NavigationTab;
