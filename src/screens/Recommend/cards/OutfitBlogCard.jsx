import React from 'react';
import { Card, Box, Typography, CircularProgress } from '@mui/material';

const OutfitBlogCard = ({
  title,
  brandData,
  loading = false, // Default loading state
  width = '500px',
  height = '823px',
  position = 'relative',
  top = '204px',
  left = '1132px',
}) => {
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
      <Typography variant="h6" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
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
            overflowX: 'scroll',
            gap: 14,
            paddingBottom: 2,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {brandData.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: '0 0 auto',
                width: '150px',
                textAlign: 'center',
              }}
            >
              <Box
                component="img"
                src={item.url}
                alt={item.name}
                sx={{
                  width: '250px',
                  height: '500px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            {/* <Box
              sx={{
                marginTop: 1, // Adds spacing below the image
                borderRadius: '65px',
                background: 'conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%', // Matches the width of the image
                padding: '5px 0', // Adds some padding to the label
              }}
            >
              <Typography variant="subtitle1" sx={{ color: 'black', fontSize: '0.9rem' }}>
                {item.name}
              </Typography>
            </Box> */}
          </Box>
        ))}
      </Box>
    )}
    </Card>
  );
};

export default OutfitBlogCard;
