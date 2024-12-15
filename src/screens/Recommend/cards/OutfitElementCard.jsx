// src/components/cards/OutfitElementCard.jsx
import React, { useState } from 'react';
import { Card, Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const OutfitElementCard = ({
  title,
  brandData = [],
  width = '500px',
  height = '139px',
  position = 'relative',
  top = '0px',
  left = '0px',
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const tagWidth = 180;
  const maxTranslateX = (brandData.length - visibleCount) * tagWidth;

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - visibleCount, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + visibleCount, brandData.length - visibleCount));
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
        {title}
      </Typography>

      {/* Scrollable Name Tags */}
      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          width: `${visibleCount * tagWidth}px`,
          justifyContent: 'center',
          position: 'relative',
          paddingLeft: '250px', // Add padding to prevent clipping
        }}
      >
        <Box
          sx={{
            display: 'flex',
            transform: `translateX(-${Math.max(0, Math.min(startIndex * tagWidth, maxTranslateX))}px)`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {brandData.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: `${tagWidth}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '146px',
                  height: '44px',
                  borderRadius: '65px',
                  background: 'conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="subtitle1" sx={{ color: 'black' }}>
                  {item.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Navigation Buttons */}
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
        disabled={startIndex * tagWidth >= maxTranslateX}
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

export default OutfitElementCard;
