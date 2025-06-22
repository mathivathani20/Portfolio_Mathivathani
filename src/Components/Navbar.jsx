// Navbar.jsx
import { AppBar, Toolbar, Button } from '@mui/material';
import paintsplash from '../assets/paintsplash.png';

const Navbar = ({ whiteBg }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ gap: 5, p: 10, ml: 20 }}>
        {['home', 'about', 'skills', 'projects', 'contact'].map((sec) => (
          <Button
            key={sec}
            onClick={() => scrollToSection(sec)}
            sx={{
              position: 'relative',
              color: whiteBg ? 'black' : 'white',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '18px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-36px',
                left: '-28px',
                width: '600px',
                height: '130px',
                backgroundImage: `url(${paintsplash})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundColor: 'transparent',
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out',
                zIndex: -1,
                filter: whiteBg ? 'invert(1)' : 'none',
              },
              
              '&:hover::before': {
                opacity: 1,
              },
              '&:hover': {
                color: whiteBg ? '#F44336' : 'red',
              },
            }}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
