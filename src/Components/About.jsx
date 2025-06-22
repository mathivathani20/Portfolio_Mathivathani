
// import { Box, Typography } from '@mui/material';
// import Aboutbg from '../assets/Aboutbg.png';
// import mathiimage from '../assets/Mathiimage.png';

// export default function About() {
//   return (
//     <Box
//       id="about"
//       sx={{
//         backgroundImage: `url(${Aboutbg})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'scroll',
//         position:'absolute',
//         left:'-20px',
//         height: '100vh',
//         width: '100vw',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Box
//         sx={{
//           width: '90%', // control inner box size
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//         {/* Left Side: Text */}
//         <Box>
//           <Typography variant='h5' sx={{color:'white',lineHeight:1.6,maxWidth:'700px',fontFamily: 'cursive',fontWeight: 500}} >
//             Aspiring{''} <Box component='span' sx={{fontWeight:'bold',color:'red',fontFamily:'aerial',textShadow:'1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue', }}>Mern Stack </Box>{''} /{''} <Box component='span' sx={{fontWeight:'bold',fontWeight:'800',color:'red',fontFamily:'aerial',textShadow:'1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue'}}>Web developer</Box>{''} who completed Electronics and Communication Engineering, completed internship and certificate on Mern Stack . I’m open to freelance projects, internships, and collaborative opportunities where I can grow and contribute as a developer.
//           </Typography>
//         </Box>

//         {/* Right Side: Image */}
//        <Box
//   component="img"
//   src={mathiimage}
//   alt="Mathi"
//   sx={{
//     width: 450,
//     height: 500,
//     objectFit: 'cover',
//     background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(0,0,0,0.1))',

//     borderRadius: '50%', // circle look (optional, use 10px for card style)
//     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)', // soft dark shadow
//     border: '5px solid white', // optional: highlights the image
  
//     transition: 'transform 0.3s ease',
//     '&:hover': {
//       transform: 'scale(1.03)', // subtle zoom on hover
      
//     },
//   }}
// />

//       </Box>
//     </Box>
//   );
// }
import { Box, Typography, Container, Button, IconButton } from '@mui/material';
import Aboutbg from '../assets/Aboutbg.png';
import mathiimage from '../assets/Mathiimage.png';
import Mathivathani_Resume from '../assets/Mathivathani_Resume.pdf'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function About() {
  return (
    <>
    <Box
      id="about"
      sx={{
        backgroundImage: `url(${Aboutbg})`,
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
      
      
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        
        {/* Left Side: Text */}
        <Box>
          
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              lineHeight: 1.6,
              maxWidth: '630px',
              fontFamily: 'cursive',
              fontWeight: 500,
            }}
          >
            Aspiring{' '}
            <Box
              component="span"
              sx={{
                fontWeight: '800',
                color: 'red',
                fontFamily: 'Arial',
                textShadow:
                  '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue',
                display: 'inline-block',
                animation: 'zoomIn 1.2s ease',
              }}
            >
              Mern Stack
            </Box>{' '}
            /{' '}
            <Box
              component="span"
              sx={{
                fontWeight: 800,
                color: 'red',
                fontFamily: 'Arial',
                textShadow:
                  '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue',
                display: 'inline-block',
                animation: 'zoomIn 1.2s ease',
              }}
            >
              Web developer
            </Box>{' '}
            who completed Electronics and Communication Engineering,
            completed internship and certificate on Mern Stack. I’m open to
            freelance projects, internships, and collaborative opportunities
            where I can grow and contribute as a developer.
          </Typography>
          <a href={Mathivathani_Resume} download style={{ textDecoration: 'none' }}>
           <Button variant='contained'  
            sx={{mt:10,backgroundColor: 'black',
      fontWeight: 'bold',
      
      border:'1px solid blue',
      boxShadow: '0px 5px 15px rgba(255, 255, 255, 0.2)',
      '&: hover':{
       backgroundColor: '#1a1a1a',
      color: '#00BFFF',
      borderColor: '#00BFFF',
      boxShadow: '0px 6px 20px rgba(0, 191, 255, 0.5)',
      },
      '&:hover .MuiSvgIcon-root': {
        color: '#00BFFF', // icon color change when button is hovered
      },
      }}> resume <FileDownloadIcon/></Button></a>
        </Box>

        {/* Right Side: Image */}
        <Box
          component="img"
          src={mathiimage}
          alt="Mathi"
          sx={{
            width: 450,
            height: 500,
            objectFit: 'cover',
            borderRadius: '50%',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            border: '5px solid white',
            animation: 'zoomInImage 1.4s ease',
          }}
        />
      </Container>
     
    </Box>
    
    
    </>
  );
}
