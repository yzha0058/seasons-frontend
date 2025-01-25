// src/components/cards/HairRecommendationCardSmall.jsx
import React, { useState } from 'react';
import { Card, Box, Typography, IconButton, CircularProgress } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HairRecommendationCardSmall = ({
  title,
  brandData,
  width = '500px',
  height = '823px',
  position = 'relative',
  top = '204px',
  left = '1132px',
}) => {
  if (!brandData) {
    return null; // Render nothing if data is not available
  }

  const cardWidth = 180; // Fixed width for each scrollable item
  const cardHeight = 230; // Fixed height for each scrollable item

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

      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          scrollBehavior: 'smooth',
          gap: '20px',
          paddingBottom: '10px',
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar for Webkit browsers
          },
          msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
          scrollbarWidth: 'none', // Hide scrollbar for Firefox
        }}
      >
        {brandData.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 auto',
              width: `${cardWidth}px`,
              textAlign: 'center',
              position: 'relative',
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
    </Card>
  );
};

export default HairRecommendationCardSmall;
