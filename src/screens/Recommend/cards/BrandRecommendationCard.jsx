import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import BrandCard from './BrandCard';

const BrandRecommendationCard = ({
  title,
  brandData,
  width = '499px',      // Default width
  height = '306px',      // Default height
  position = 'relative', // Default position
  top ='204px', // Default top pad
  left = '597px', // Default left pad
  borderRadius = '16px 0px 16px 0px', // Default radius
}) => {
  if (!brandData) {
    return null; // Render nothing if data is not available
  }

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
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '10px',  // Add spacing below title
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            overflowX: 'auto',  // Enable horizontal scrolling
            scrollBehavior: 'smooth',
            whiteSpace: 'nowrap',  // Prevent wrapping
            padding: '10px 50px',
            '&::-webkit-scrollbar': {
              display: 'none',  // Hide the scrollbar for Webkit browsers
            },
            msOverflowStyle: 'none',  // Hide scrollbar for IE/Edge
            scrollbarWidth: 'none',  // Hide scrollbar for Firefox
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              minWidth: `${brandData.length * 280}px`,  // Adjust based on new card size
            }}
          >
            {brandData.map((brand, index) => (
              <BrandCard
                key={index}
                images={brand.images}
                brandNames={""}
                positionStyles={{
                  width: '250px',  // Reduced card width
                  height: '200px', // Reduced card height
                  flexShrink: 0,   // Prevent shrinking
                }}
                showIcons={false}
              />
            ))}
          </Box>
        </Box>
      </CardContent>

    </Card>
  );
};

export default BrandRecommendationCard;
