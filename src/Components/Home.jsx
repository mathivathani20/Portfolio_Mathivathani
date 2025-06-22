import React from 'react'
import Union from '../assets/Union.png';
import { Box, IconButton, Typography } from '@mui/material';
import mail from '../assets/mail.png'
import linkedinImg from '../assets/linkedinimage.png';
import github from '../assets/github.png'

export default function Home() {
  return (
    <Box
      id='home'
      sx={{
        backgroundImage: `url(${Union})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mr: 100 }}>
        <Typography variant="h3" sx={{
          color: 'transparent',
          WebkitTextStroke: '1px white',
          fontWeight: '800',
        }}>
          Mathivathani S
        </Typography>
        <Typography variant="h6" sx={{ color: 'white', mt: 3, fontFamily: 'cursive' }}>
          Mern Stack Developer + Web Developer
        </Typography>
        <Box>
          <a href="https://www.linkedin.com/in/mathivathani-s/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinImg} alt="LinkedIn" style={{ width: 30, height: 30, marginTop:'20px' }} />
          </a>
          <a href='https://github.com/mathivathani20' target="_blank" rel="noopener noreferrer"><img src={github} alt='Github' style={{ width: 30, height: 30, marginTop:'20px',marginLeft:'20px' }} /></a>
          <a   href="https://mail.google.com/mail/?view=cm&fs=1&to=mathivathanisridhar01@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} alt='mail' style={{ width: 30, height: 30, marginTop:'20px',marginLeft:'20px',borderRadius:'50px',backgroundColor:'#928A97' }} /></a>
        </Box>
      </Box>

    </Box>
  )
}
