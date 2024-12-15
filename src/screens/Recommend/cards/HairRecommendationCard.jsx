// src/components/RecommendationCard.jsx
import React from 'react';
import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Modal  } from '@mui/material';

const HairRecommendationCard = ({ image, altText, label }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {/* Card with Clickable Image */}
      <Card sx={{ width: 225, height: 268, position: 'relative' }}>
        <Box
          sx={{
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            cursor: 'pointer', // Add pointer cursor
          }}
          aria-label={altText}
          onClick={handleOpen} // Open modal on click
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 86,
            background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(234,248,250,1) 100%)",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Inter', Helvetica",
              fontWeight: 'normal',
              color: 'black',
              fontSize: '1rem',
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </Typography>
        </Box>
      </Card>

      {/* Modal for Enlarged Image */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: 600,
            height: 'auto',
            background: 'white',
            boxShadow: 24,
            p: 2,
            borderRadius: '8px',
            outline: 'none',
          }}
        >
          <Box
            component="img"
            src={image}
            alt={altText}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default HairRecommendationCard;
