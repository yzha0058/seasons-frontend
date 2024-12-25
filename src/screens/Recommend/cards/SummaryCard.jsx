// src/components/cards/SummaryCard.jsx
import React from 'react';
import { Card, Box, Typography } from '@mui/material';

const SummaryCard = ({
  data,
  width = '400px',   // Default width
  height = '200px',   // Default height
  position = 'relative',
  top = '0px',
  left = '0px',
}) => {
  if (!data) {
    return null; // Render nothing if data is not available
  }
  
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
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '90%', textAlign: 'center', mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          风格解释
        </Typography>
        <Typography variant="body1" sx={{ color: 'gray' }}>
          {data.explain}
        </Typography>
      </Box>

      <Box sx={{ width: '90%', textAlign: 'center' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          关键字
        </Typography>
        <Typography variant="body1" sx={{ color: 'black' }}>
          {data.keywords}
        </Typography>
      </Box>
    </Card>
  );
};

export default SummaryCard;
