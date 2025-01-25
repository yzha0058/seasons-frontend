// src/components/cards/ShopRecommendationCard.jsx
import React, { useState } from 'react';
import { Card, Box, Typography, IconButton, CircularProgress } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ShopRecommendationCard = ({
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

  const cardWidth = 200; // Fixed width for each scrollable item
  const cardHeight = 400; // Fixed height for each scrollable item

  return (
    <Card
      sx={{
        width: width, // Fixed width for the entire card
        height: height, // Fixed height for the entire card
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
          width: '100%',
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
              width: `${cardWidth}px`, // Fixed width for each item
              height: `${cardHeight}px`, // Fixed height for each item
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={item.url}
              alt={item.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default ShopRecommendationCard;
