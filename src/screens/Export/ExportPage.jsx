// src/components/ExportPage.jsx
import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Box, Grid, Typography, Button } from '@mui/material';

const ExportPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const style = 'Natural';
  const title = '穿搭风格推荐';
  const image_width = 400;
  const image_height = 1000;
  const save_name = 'outfitstyle';

  // Fetch image recommendations from your JSON meta data
  useEffect(() => {
    const meta_url = `https://yzha-seasons.oss-cn-beijing.aliyuncs.com/Body/Style/${style}/meta.json`;
    fetch(meta_url)
      .then((response) => response.json())
      .then((data) => {
        setRecommendations(data);
      })
      .catch((error) => {
        console.error('Error fetching recommendations:', error);
      });
  }, []);

  // Helper function to wait for all <img> elements in the container to load
  const waitForImagesToLoad = () => {
    const container = document.getElementById('page-content');
    if (!container) return Promise.resolve();
    const images = container.querySelectorAll('img');
    const promises = Array.from(images).map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    });
    return Promise.all(promises);
  };

  const handleDownload = async (format = 'jpg') => {
    const element = document.getElementById('page-content');
    await waitForImagesToLoad();
  
    // Capture the entire content as a canvas.
    const canvas = await html2canvas(element, { useCORS: true });
    const imgData = canvas.toDataURL('image/jpeg');
  
    if (format === 'jpg') {
      const link = document.createElement('a');
      link.href = imgData;
      link.download = `${save_name}-${style}.jpg`;
      link.click();
    } else if (format === 'pdf') {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
  
      // Get image properties and calculate its dimensions in the PDF.
      const imgProps = pdf.getImageProperties(imgData);
      const pdfImgWidth = pageWidth;
      const pdfImgHeight = (imgProps.height * pdfImgWidth) / imgProps.width;
  
      // This variable tracks the remaining height of the image that hasn't been added.
      let heightLeft = pdfImgHeight;
      let position = 0;
  
      // Add the first page.
      pdf.addImage(imgData, 'JPEG', 0, position, pdfImgWidth, pdfImgHeight);
      heightLeft -= pageHeight;
  
      // Add more pages if the image is taller than one page.
      while (heightLeft > 0) {
        position = pdfImgHeight - heightLeft;
        pdf.addPage();
        // Use a negative y offset to shift the image up so that the correct portion is visible.
        pdf.addImage(imgData, 'JPEG', 0, -position, pdfImgWidth, pdfImgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`${save_name}-${style}.pdf`);
    }
  };
  

  return (
    <div>
      {/* Container to be captured */}
      <div id="page-content" style={{ padding: '20px', background: 'white' }}>
        <Box
          sx={{
            backgroundColor: '#eef0f0',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          
          {/* Increased container size with adjusted padding */}
          <Box
            sx={{
              backgroundColor: '#eef0f0',
              overflow: 'visible',
              width: '3000px',
              minHeight: '2100px',
              position: 'relative',
              padding: '40px',
            }}
          >
             
            {/* Optional static background image */}
            <img
              className="wechatimg-5"
              alt="Wechatimg"
              src="/img/wechatimg257-removebg-1-4.svg"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '15%',  // 15% of its original size or container width
                height: 'auto',
              }}
            />
            {/* Top center title */}
            <Box sx={{ mt: 2, mb: 4 }}>
              <Typography 
                variant="h3" 
                component="div" 
                sx={{ 
                  fontWeight: 'bold', 
                  // marginTop: '230px',
                  marginLeft: '230px', }}>
                {title}
              </Typography>
            </Box>

            {/* Grid container with increased spacing to prevent overlap */}
            <Grid
              container
              spacing={3} // increased spacing between grid items
              sx={{
                marginTop: '200px',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '1400px',
              }}
            >
              {recommendations.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* Increased image box dimensions */}
                  <Box
                    sx={{
                      width: image_width,
                      height: image_height,
                      position: 'relative',
                      mb: 2,
                    }}
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      crossOrigin="anonymous"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        borderRadius: '8px',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: 100,
                        background:
                          'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(234,248,250,1) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomLeftRadius: '8px',
                        borderBottomRightRadius: '8px',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Inter', Helvetica",
                          fontWeight: 'normal',
                          color: 'black',
                          fontSize: '1.5rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </div>

      {/* Export Buttons */}
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        <Button variant="contained" color="primary" onClick={() => handleDownload('jpg')}>
          Save as JPG
        </Button>
        <Button variant="contained" color="secondary" onClick={() => handleDownload('pdf')}>
          Save as PDF
        </Button>
      </Box>
    </div>
  );
};

export default ExportPage;
