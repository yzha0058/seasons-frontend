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
import React, { useState, useEffect } from 'react';
import AccessoryRecommendCard from './cards/AccessoryRecommendCard';
import { Link } from 'react-router-dom';

const AccessoryRecommendation = () => {
  // const style = "Round";
  const storedApiResponse = localStorage.getItem("faceResult");
  let apiResponse;

  if (storedApiResponse) {
    apiResponse = JSON.parse(storedApiResponse); // Convert string to object
  } else {
    console.log("No stored API response found.");
  }
  const style = apiResponse.Face_shape_type;
  const[recommendations, setRecommendations] =  useState([]);
  const [keywordsDataExample, setKeywordsDataExample] = useState([{ name: '', explain: '' }]);

  useEffect(() => {
        // Fetch the JSON data from the cloud storage
        meta_url = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Glass/${style}/keywords.json`;
        fetch(meta_url)
          .then(response => response.json())  // Parse the response as JSON
          .then(data => {
            setKeywordsDataExample(data);  // Set the fetched data into state
          })
          .catch(error => {
            console.error('Error fetching recommendations:', error);  // Handle any errors
          });
      }, []); // Empty dependency array to run this effect once when the component mounts

  useEffect(() => {
        // Fetch the JSON data from the cloud storage
        meta_url = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Glass/${style}/meta.json`;
        fetch(meta_url)
          .then(response => response.json())  // Parse the response as JSON
          .then(data => {
            setRecommendations(data);  // Set the fetched data into state
          })
          .catch(error => {
            console.error('Error fetching recommendations:', error);  // Handle any errors
          });
      }, []); // Empty dependency array to run this effect once when the component mounts

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
            src="/img/ai-human2.png"
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
          {keywordsDataExample[0].name}
        </Typography>
        <Typography
          position="absolute"
          width="750px"
          top="278px"
          left="874px"
          fontFamily="'Inter', Helvetica"
          fontWeight="normal"
          color="black"
          fontSize="1.5rem"
        >
          {keywordsDataExample[0].explain}
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
                image={item.url}
                altText={""}
                label={item.name}
              />
            </Grid>
          ))}
        </Grid>
      <Link to="/style-outfit-recommendation" style={{ textDecoration: 'none' }}>
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
