// /src/screens/Recommend/BrandCard.jsx
import React from 'react';
import { Box, CardMedia, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BrandCard = ({ images, brandNames, positionStyles, showIcons }) => {
  return (
    <Box
      sx={{
        ...positionStyles,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        borderRadius: '8px',
        // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative',
      }}
    >
      {images.map((img, index) => (
        <CardMedia
          key={index}
          component="img"
          sx={{
            width: '100%',
            height: '105px',
            marginBottom: index === images.length - 1 ? '10px' : '0px',
          }}
          image={img.url}
          alt={img.alt}
        />
      ))}
      {showIcons && (
        <IconButton sx={{ position: 'absolute', bottom: '10px', left: '10px' }}>
          <ArrowBackIosIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default BrandCard;
