import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import image from '../wilmermendez.jpg';
import FronPaper from './FrontPaper';
import FrontPaper from './FrontPaper';

const pages = ['About Me', 'Experience', 'Skills', 'Writings'];
//const settings = ['About Me', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [aboutMeClicked, setAboutMeClicked] = React.useState(0);
  const [experienceClicked, setExperienceClicked] = React.useState(0);

 const handleOpenAboutMe = () => {
  setExperienceClicked(0);
    setAboutMeClicked(1);
 }

 const handleOpenExperience= () => {
  setAboutMeClicked(0);
  setExperienceClicked(1);

}

  return (
    <div>
    <AppBar position="static" style={{backgroundColor: '#738A0A'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WILMER MENDEZ
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key='AboutMe'
                onClick={handleOpenAboutMe}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About Me
              </Button>

          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key='Experience'
                onClick={handleOpenExperience}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{marginLeft:-530}}
              >
                Experience
              </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>

              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={image}/>
              </IconButton>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <FrontPaper  
    aboutmestatus={aboutMeClicked}
    experiencestatus={experienceClicked}
    />
    </div>
  );
}
export default ResponsiveAppBar;
