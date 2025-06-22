import { Box, TextField, Typography, Button } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';


export default function Contact() {
  return (
    <Box
      id='contact'
      sx={{
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        opacity: 0.9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
     <Box
          sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            width: { xs: '100%', md: '40%' },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'cursive',color:'red' }}>
            Get in Touch
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon />
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>Address</Typography>
              <Typography>123 Main Street, Chennai</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon />
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>Email</Typography>
              <Typography>yourmail@example.com</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon />
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>Phone</Typography>
              <Typography>+91 98765 43210</Typography>
            </Box>
          </Box>
        </Box>
      
      {/* Outer Box with Border and Shadow */}
      <Box
        sx={{
          border: '1px solid black',
          borderRadius: '12px',
          backgroundColor:'white',
          opacity:0.7,
          boxShadow: '0px 8px 20px rgba(255, 255, 255, 0.1)',
          p: 4,
          width: '30%',
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: 'red', mb: 3, textAlign: 'center', fontWeight: 'bold',fontFamily:'cursive' }}
        >
          Contact Me
        </Typography>

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            
            gap: 3,
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: 'black',fontFamily:'cursive' } }}
            InputProps={{ style: { color: 'black' },   sx: {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#00BFFF',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#00BFFF',
      },
    }, }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            InputLabelProps={{ style: { color: 'black',fontFamily:'cursive' } }}
            InputProps={{ style: { color: 'black' },  sx: {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#00BFFF',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#00BFFF',
      },
    }, }}
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            InputLabelProps={{ style: { color: 'black',fontFamily:'cursive' } }}
            InputProps={{ style: { color: 'black' },  sx: {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#00BFFF',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#00BFFF',
      },
    }, }}
          />
          <Box 
          sx={{display:'flex',
              justifyContent:'center',
              alignItems:'center',}}>
                    <Button
            variant="contained"
            sx={{
              width:'40%',
              
              backgroundColor: 'black',
               border:'1px solid blue',
      boxShadow: '0px 5px 15px rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontWeight: 'bold',
              '&: hover':{
       backgroundColor: '#1a1a1a',
      color: '#00BFFF',
      borderColor: '#00BFFF',
      boxShadow: '0px 6px 20px rgba(0, 191, 255, 0.5)',
      },
            }}
          >
            Submit
          </Button>
          </Box>
  
        </Box>
      </Box>
    </Box>
  );
}
