// src/components/cards/HairRecommendationCardSmall.jsx
import React, { useState } from 'react';
import { Card, Box, Typography, IconButton, CircularProgress } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HairRecommendationCardSmall = ({
  title,
  brandData,
  loading = false,
  width = '500px',
  height = '823px',
  position = 'relative',
  top = '204px',
  left = '1132px',
}) => {
  if (!brandData) {
    return null; // Render nothing if data is not available
  }

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 2.5; // Number of items visible at a time
  const cardWidth = 180; // Fixed width for each scrollable item
  const cardHeight = 230; // Fixed height for each scrollable item
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
        width: width,
        height: height,
        position: position,
        top: top,
        left: left,
        borderRadius: '16px 0px 16px 0px',
        boxShadow: '0px 0px 7px #00000040',
        overflow: 'hidden',
        padding: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}
      >
        {title}
      </Typography>
      {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          width: `${visibleCount * cardWidth}px`, // Fixed width for scroll container
          margin: '0 auto',
          mt: '-30px', // Move the container upwards
        }}
      >
        <Box
          sx={{
            display: 'flex',
            transform: `translateX(-${Math.min(
              startIndex * cardWidth,
              maxTranslateX
            )}px)`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {brandData.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: `${cardWidth}px`,
                textAlign: 'center',
                position: 'relative',
                marginRight: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
              }}
            >
              <Box
                component="img"
                src={item.url}
                alt={item.name}
                sx={{
                  width: '100%',
                  height: `${cardHeight}px`,
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              {/* <Typography variant="subtitle1" sx={{ color: 'black', mt: 1 }}>
                {item.name}
              </Typography> */}
            </Box>
          ))}
        </Box>
      </Box>
      )}
      {/* Navigation Buttons - Centered Vertically */}
      <IconButton
        onClick={handlePrev}
        disabled={startIndex === 0}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        disabled={startIndex * cardWidth >= maxTranslateX}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Card>
  );
};

export default HairRecommendationCardSmall;
