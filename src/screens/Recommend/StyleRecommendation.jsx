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
  const style = "Girl"
  const [outfitDataLoading, setOutfitDataLoading] = useState(true); // State to track loading status
  const [outfitDataExample, setOutfitDataExample] = useState([]); // State for outfit data
  const [shopDataLoading, setShopDataLoading] = useState([]); // State to track loading status
  const [shopDataExample, setShopDataExample] = useState([]); // State for outfit data
  const [hairDataLoading, setHairDataLoading] = useState([]); // State to track loading status
  const [hairDataExample, setHairDataExample] = useState([]); // State for outfit data


  const checkImageExists = async (url) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok; // True if the image exists
    } catch (error) {
      console.error(`Error checking image: ${url}`, error);
      return false;
    }
  };
  
  // Sample data for multiple brand cards
  const brandDataExample = [
    {
      images: [
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image@2x.png', alt: 'Image' },
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image-3@2x.png', alt: 'Image' },
      ],
      brandNames: ['Chanel', 'Shushu Tong'],
    },
    {
      images: [
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image-1@2x.png', alt: 'Image' },
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image-8@2x.png', alt: 'Image' },
      ],
      brandNames: ['Miumiu', 'RUI'],
    },
    {
      images: [
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image-2@2x.png', alt: 'Image' },
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image-9@2x.png', alt: 'Image' },
      ],
      brandNames: ['MSGM', 'Calvin Luo'],
    },
    // Add more items as needed
  ];

  const generateOutfitData = async (style) => {
    const baseURL = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/${style}/StyleBloggers/`;
    const outfitData = [];
    let index = 1;

    while (true) {
      const url = `${baseURL}${index}.jpg`;
      const exists = await checkImageExists(url);

      if (!exists) {
        break; // Exit loop if the image does not exist
      }

      outfitData.push({
        name: `Item ${index}`, // You can customize the name
        url,
      });

      index++;
    }

    return outfitData;
  };
  
  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    const fetchOutfitData = async () => {
      setOutfitDataLoading(true); // Start loading
      const cachedData = localStorage.getItem('outfitData'); // Check if data is cached

      if (cachedData) {
        setOutfitDataExample(JSON.parse(cachedData)); // Set the dynamic shop data
      } else {
        const data = await generateOutfitData(style);
        localStorage.setItem('outfitData', JSON.stringify(data)); // Cache data in localStorage
        setOutfitDataExample(data); // Set the dynamic shop data
      }
      
      setOutfitDataLoading(false); // Stop loading
    };

    fetchOutfitData();
  }, [style]); // Dependency array ensures the effect runs when 'style' changes

  const generateShopData = async (style) => {
    const baseURL = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/${style}/Shop/`;
    const shopData = [];
    let index = 1;

    while (true) {
      const url = `${baseURL}${index}.jpg`;
      const exists = await checkImageExists(url);

      if (!exists) {
        break; // Exit loop if the image does not exist
      }

      shopData.push({
        name: `Item ${index}`, // You can customize the name
        url,
      });

      index++;
    }

    return shopData;
  };

  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    const fetchShopData = async () => {
      setShopDataLoading(true); // Start loading
      const cachedData = localStorage.getItem('shopData'); // Check if data is cached

      if (cachedData) {
        setShopDataExample(JSON.parse(cachedData)); // Set data from cache
      } else {
        const data = await generateShopData(style); // Fetch new data
        localStorage.setItem('shopData', JSON.stringify(data)); // Cache new data
        setShopDataExample(data); // Update state with fetched data
      }

      setShopDataLoading(false); // Stop loading
    };

    fetchShopData();
  }, [style]); // Dependency array ensures the effect runs when 'style' changes

  const generateHairData = async (style) => {
    const baseURL = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/recommendation/${style}/Hairstyle/`;
    const hairData = [];
    let index = 1;

    while (true) {
      const url = `${baseURL}${index}.jpg`;
      const exists = await checkImageExists(url);

      if (!exists) {
        break; // Exit loop if the image does not exist
      }

      hairData.push({
        name: `Item ${index}`, // You can customize the name
        url,
      });

      index++;
    }

    return hairData;
  };

  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    const fetchHairData = async () => {
      setHairDataLoading(true); // Start loading
      const cachedData = localStorage.getItem('hairData'); // Check if data is cached

      if (cachedData) {
        setHairDataExample(JSON.parse(cachedData)); // Set data from cache
      } else {
        const data = await generateHairData(style); // Fetch new data
        localStorage.setItem('hairData', JSON.stringify(data)); // Cache new data
        setHairDataExample(data); // Update state with fetched data
      }

      setHairDataLoading(false); // Stop loading
    };

    fetchHairData();
  }, [style]); // Dependency array ensures the effect runs when 'style' changes

  const elementDataExample = [
    {
      name: '蕾丝',
    },
    {
      name: 'A字短裙',
    },
    {
      name: '蝴蝶结',
    },
    {
      name: '蝴蝶结',
    },
  ];

  const keywordsDataExample = [
    {
      name: "少女感",
      explain: '曲线型，小量感',
      keywords: 'BM / JK / 纯欲风 / 公主萝莉风 / 甜酷偏甜 / 富家千金风 / 芭蕾风',
    },
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
          <Typography
            variant="h6"
            sx={{ position: "absolute", top: "13px", left: "69px" }}
          >
            少女感
          </Typography>
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
