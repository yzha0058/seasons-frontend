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
} from "@mui/material";
import React, { useState, useEffect  } from 'react';
import BrandRecommendationCard from './cards/BrandRecommendationCard';
import OutfitBlogCard from './cards/OutfitBlogCard'
import ShopRecommendationCard from './cards/ShopRecommendationCard';
import HairRecommendationCardSmall from './cards/HairRecommendationCardSmall';
import OutfitElementCard from './cards/OutfitElementCard';
import SummaryCard from './cards/SummaryCard';
import { Link } from 'react-router-dom';

const StyleRecommendation = () => {

  const storedApiResponse = localStorage.getItem("bodyResult");
  let apiResponse;

  if (storedApiResponse) {
    apiResponse = JSON.parse(storedApiResponse); // Convert string to object
    console.log(apiResponse);  // 打印接收的apiResponse
  } else {
    console.log("No stored API response found.");
  }

  // const style = "Girl"
  const style = apiResponse.Face_style;

  const [outfitDataLoading, setOutfitDataLoading] = useState(true); // State to track loading status
  const [outfitDataExample, setOutfitDataExample] = useState([]); // State for outfit data
  const [shopDataLoading, setShopDataLoading] = useState([]); // State to track loading status
  const [shopDataExample, setShopDataExample] = useState([]); // State for outfit data
  const [hairDataLoading, setHairDataLoading] = useState([]); // State to track loading status
  const [hairDataExample, setHairDataExample] = useState([]); // State for outfit data

  const[brandDataExample, setBrandDataExample] =  useState([]);
  const[elementDataExample, setElementDataExample] =  useState([]);
  const[keywordsDataExample, setKeywordsDataExample] =  useState([]);

  useEffect(() => {
    // Fetch the JSON data from the cloud storage
    meta_url = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Brand/${style}/meta.json`;
    fetch(meta_url)
      .then(response => response.json())  // Parse the response as JSON
      .then(data => {
        setBrandDataExample(data);  // Set the fetched data into state
      })
      .catch(error => {
        console.error('Error fetching recommendations:', error);  // Handle any errors
      });
  }, []); // Empty dependency array to run this effect once when the component mounts
  

  useEffect(() => {
      // Fetch the JSON data from the cloud storage
      meta_url = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/${style}/StyleBloggers/meta.json`;
      fetch(meta_url)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
          setOutfitDataExample(data);  // Set the fetched data into state
          setOutfitDataLoading(false);
        })
        .catch(error => {
          console.error('Error fetching recommendations:', error);  // Handle any errors
        });
    }, []); // Empty dependency array to run this effect once when the component mounts

    useEffect(() => {
      // Fetch the JSON data from the cloud storage
      meta_url = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/${style}/Shop/meta.json`;
      fetch(meta_url)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
          setShopDataExample(data);  // Set the fetched data into state
          setShopDataLoading(false);
        })
        .catch(error => {
          console.error('Error fetching recommendations:', error);  // Handle any errors
        });
    }, []); // Empty dependency array to run this effect once when the component mounts

    useEffect(() => {
      // Fetch the JSON data from the cloud storage
      meta_url = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/${style}/Hairstyle/meta.json`;
      fetch(meta_url)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
          setHairDataExample(data);  // Set the fetched data into state
          setHairDataLoading(false);
        })
        .catch(error => {
          console.error('Error fetching recommendations:', error);  // Handle any errors
        });
    }, []); // Empty dependency array to run this effect once when the component mounts

    useEffect(() => {
      // Fetch the JSON data from the cloud storage
      meta_url = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Element/${style}/meta.json`;
      fetch(meta_url)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
          setElementDataExample(data);  // Set the fetched data into state
        })
        .catch(error => {
          console.error('Error fetching recommendations:', error);  // Handle any errors
        });
    }, []); // Empty dependency array to run this effect once when the component mounts

    useEffect(() => {
      // Fetch the JSON data from the cloud storage
      meta_url = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Keyword/${style}/meta.json`;
      fetch(meta_url)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
          setKeywordsDataExample(data);  // Set the fetched data into state
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
        <BrandRecommendationCard
          title="品牌推荐"
          brandData={brandDataExample}
          width="500px"   // Example custom width
          height="320px"  // Example custom height
          position="absolute"
          top="204px"
          left="597px"
        />
        <OutfitBlogCard
          title="风格穿搭博主推荐：小红书"
          brandData={outfitDataExample}
          loading={outfitDataLoading} // Pass loading state
          width="500px"   // Example custom width
          height="623px"  // Example custom height
          position="absolute"
          top="204px"
          left="1132px"
        />
        <ShopRecommendationCard
          title="店铺推荐"
          brandData={shopDataExample}
          loading={shopDataLoading} // Pass loading state
          width="500px"   // Example custom width
          height="492px"  // Example custom height
          position="absolute"
          top="535px"
          left="597px"
        />
        <HairRecommendationCardSmall
          title="发型推荐"
          brandData={hairDataExample}
          loading={hairDataLoading} // Pass loading state
          width="500px"   // Example custom width
          height="328px"  // Example custom height
          position="absolute"
          top="535px"
          left="62px"
        />
        <OutfitElementCard
          title="穿搭元素"
          brandData={elementDataExample}
          width="500px"   // Example custom width
          height="139px"  // Example custom height
          position="absolute"
          top="888px"
          left="62px"
        />
        <SummaryCard
        data={keywordsDataExample[0]}
        width="513px"
        height="320px"
        position="absolute"
        top="204px"
        left="55px"
      />
        <Box
          sx={{
            position: "absolute",
            width: "203px",
            height: "60px",
            top: "165px",
            left: "50px",
            borderRadius: "37px",
            boxShadow: "0px 0px 0px 9px #eef0f0, 0px 0px 7px #00000040", // Thicker outer border
            background:
              "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
          }}
        >
          {keywordsDataExample && keywordsDataExample.length > 0 && (
            <Typography
              variant="h6"
              sx={{ position: "absolute", top: "13px", left: "69px" }}
            >
              {keywordsDataExample[0].name}
            </Typography>
          )}
        </Box>



        <Link to="/hairstyle-recommendation" style={{ textDecoration: 'none' }}>
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
            下一步：发型
          </Button>
        </Link>
    </Box>
  </Box>
 
  );
};

export default StyleRecommendation;
