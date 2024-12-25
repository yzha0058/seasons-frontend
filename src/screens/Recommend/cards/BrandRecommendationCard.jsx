// /src/screens/Recommend/BrandRecommendationCard.jsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BrandCard from './BrandCard';

const BrandRecommendationCard = ({
  title,
  brandData,
  visibleCount = 2,
  width = '499px',      // Default width
  height = '306px',      // Default height
  position = 'relative', // Default position
  top ='204px', // Default top pad
  left = '597px', //Default left pad
  borderRadius = '16px 0px 16px 0px', // Default radius
}) => {
  if (!brandData) {
    return null; // Render nothing if data is not available
  }
  
  const [startIndex, setStartIndex] = useState(0);
  const cardWidth = 160;
  const maxTranslateX = (brandData.length - visibleCount) * cardWidth;

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - visibleCount, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + visibleCount, brandData.length - visibleCount)
    );
  };

  return (
    <Card
      sx={{
        width: width, // Use dynamic width
        height: height, // Use dynamic height
        position: position, // Use dynamic position
        top: top, // Use dynamic top pad
        left: left, // Use dynamic left pad
        borderRadius: borderRadius,
        boxShadow: '0px 0px 7px #00000040',
        overflow: 'hidden',
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', fontWeight: 'bold',}}
        >
          {title}
        </Typography>

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            left: '10px',
            zIndex: 1,
          }}
        >
          <IconButton onClick={handlePrev} disabled={startIndex === 0}>
            <ArrowBackIosIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
            left: '50px',
            width: '80%',
            top: '20px', // Adjusts scrollable area position
          }}
        >
          <Box
            sx={{
              display: 'flex',
              transform: `translateX(-${Math.min(startIndex * cardWidth, maxTranslateX)}px)`,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {brandData.map((brand, index) => (
              <BrandCard
                key={index}
                images={brand.images}
                brandNames={""}
                positionStyles={{
                  width: '150px',
                  height: '237px',
                  marginRight: '20px',
                }}
                showIcons={false}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            right: '10px',
            zIndex: 1,
          }}
        >
          <IconButton
            onClick={handleNext}
            disabled={startIndex * cardWidth >= maxTranslateX}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BrandRecommendationCard;
