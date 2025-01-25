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
import React, { useState, useEffect } from 'react';
import OutfitRecommendationCard from './cards/OutfitRecommendationCard';
import OutfitCard from './cards/OutfitCard';
import { Link } from 'react-router-dom';

const OutfitRecommendation = () => {
  const style = "X";
  const leg_style = "XO-leg"
  const [activeTab, setActiveTab] = useState('上衣');
  const[coatExample, setCoatExample] =  useState([]);
  const[pantsExample, setPantsExample] =  useState([]);

  useEffect(() => {
      // Fetch the JSON data from the cloud storage
      meta_url = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Body/${style}/meta.json`;
      fetch(meta_url)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
          setCoatExample(data);  // Set the fetched data into state
        })
        .catch(error => {
          console.error('Error fetching recommendations:', error);  // Handle any errors
        });
    }, []); // Empty dependency array to run this effect once when the component mounts
  
    useEffect(() => {
      // Fetch the JSON data from the cloud storage
      meta_url = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Body/${leg_style}/meta.json`;
      fetch(meta_url)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
          setPantsExample(data);  // Set the fetched data into state
        })
        .catch(error => {
          console.error('Error fetching recommendations:', error);  // Handle any errors
        });
    }, []); // Empty dependency array to run this effect once when the component mounts

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const data = {
    上衣: coatExample,
    裤装: pantsExample,
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
          尝试这类风格
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
                <OutfitCard
                  image={item.url}
                  altText={""}
                  label={item.name}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Right-side Tabs */}
        <Box
          sx={{
            position: 'absolute',
            top: '748px',
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

        <Link to="/report" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              width: 301,
              height: 95,
              top: 935,
              left: 1600,
              borderRadius: "75px",
              background:
                "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              color: "black",
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "'Inter', Helvetica",
            }}
          >
            生成报告
          </Button>
        </Link>


        {/* <Typography
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
        </Typography> */}
      </Box>
    </Box>
  );
};

export default OutfitRecommendation;
