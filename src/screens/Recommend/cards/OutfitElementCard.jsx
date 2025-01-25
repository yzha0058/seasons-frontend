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
  if (!brandData.length) {
    return null; // Render nothing if data is not available
  }

  const tagWidth = 180; // Fixed width for each scrollable tag

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
    </Card>
  );
};

export default OutfitElementCard;
