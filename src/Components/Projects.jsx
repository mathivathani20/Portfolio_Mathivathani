import React from 'react';
import { Box, Typography } from '@mui/material';
import TrainImage from '../assets/train.png';
import projectbg from '../assets/Union.png';

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: `url(${projectbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'white',
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        boxSizing: 'border-box',
      }}
    >

        <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          px: { xs: 3, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            fontFamily: 'cursive',
            color:'red',
            textAlign: { xs: 'center', md: 'left' },
            width: '100%',
          }}
        >
          Online Train Ticket Booking project
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: 'white',
            fontWeight:600,
            fontFamily:'cursive',
            fontSize: '20px',
            
            lineHeight: 1.6,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          A full-stack web application built using the{''}<Box component='span' sx={{fontWeight: '800',
                color: 'red',
                fontFamily: 'Arial',
                textShadow:
                  '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue',
                display: 'inline-block',
                animation: 'zoomIn 1.2s ease',}}>MERN stack (MongoDB, Express.js, React.js, Node.js)</Box>{''}  to simplify train ticket booking. The React.js frontend offers a user-friendly interface to search trains and book tickets. The backend handles authentication, booking logic, and real-time seat updates using Node.js and Express.js. MongoDB stores user, train, and booking data securely. JWT is used for secure login and access control.
        </Typography>
      </Box>



      {/* Left side - Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={TrainImage}
          alt="Train"
          sx={{
            width: '90%',
            maxWidth: '500px',
            height: 'auto',
            borderRadius: '12px',
           
           
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.7)',
            },
          }}
        />
      </Box>

      {/* Right side - Description */}
  
    </Box>
  );
}
