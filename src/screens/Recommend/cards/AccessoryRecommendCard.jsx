// src/components/MakeupRecommendationCard.jsx
import React from 'react';
import { Card, Box, Typography } from '@mui/material';

const AccessoryRecommendCard = ({ image, altText, label }) => {
  if (!image) {
    return null; // Render nothing if data is not available
  }
  return (
    <Box>
      <Card sx={{ width: 230, height: 188, position: 'relative' }}>
        <Box
          sx={{
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-label={altText}
        />
      </Card>
      <Box
        sx={{
          width: '100%',
          height: '100%', // Reduced height to fit the label more compactly
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eef0f0', // Optional background color
        }}
      >
        <Typography
          variant="h6"
          fontFamily="Inter"
          fontWeight="normal"
          color="black"
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default AccessoryRecommendCard;
