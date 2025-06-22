import { Box } from '@mui/material';
import React from 'react';
import skillsbg from '../assets/skillsbg.png';
import htmlIcon from '../assets/html.webp';
import cssIcon from '../assets/css.webp';
import jsIcon from '../assets/js.webp';
import reactIcon from '../assets/react.webp';
import uiIcon from '../assets/ui.png';
import monggodb from '../assets/monggodb.png';

export default function Skills() {
  return (
    <Box
      id='skills'
      sx={{
        backgroundImage: `url(${skillsbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        pt: 10, // padding from top to separate from navbar
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 8,
          width: '90%',
          maxWidth: '900px',
          mt: 20,
          mr:55
        }}
      >
        {[htmlIcon, cssIcon, jsIcon, reactIcon, uiIcon, monggodb].map((img, index) => (
          <Box
            key={index}
            sx={{
              width: 100,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              boxShadow: '0px 5px 15px black',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
              mx: 'auto',
            }}
          >
            <Box
              component="img"
              src={img}
              alt={`Skill ${index}`}
              sx={{
                width: '80%',
                height: '80%',
                objectFit: 'contain',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
