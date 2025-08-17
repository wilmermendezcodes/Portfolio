import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SpaIcon from "@mui/icons-material/Spa";
import image from "../wilmermendez.jpg";
import FrontPaper from "./FrontPaper";
import MagmaDivider from "./MagmaDivider";
import SectionDivider from "./SectionDivider";
import { useTheme } from '@mui/material/styles';
import "./App.css"; // Import the CSS for the cursor

const pages = ["About Me", "Experience", "Skills", "Projects"];

const ResponsiveAppBar = ({ onToggleTheme, themeMode }) => {
  const theme = useTheme();
  const [activePage, setActivePage] = useState('About Me');
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showScatter, setShowScatter] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
    const idMap = {
      'About Me': 'about',
      'Experience': 'experience',
      'Skills': 'skills',
      'Projects': 'projects',
    };
    const id = idMap[page];
    const el = id && document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleClick = (e) => {
    setClickPosition({ x: e.clientX, y: e.clientY });
    setShowScatter(true);
    setTimeout(() => setShowScatter(false), 1000); // Hide scatter effect after 1 second
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ width: 260 }} role="presentation" onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ px: 2, py: 2, color: 'text.primary' }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton onClick={() => handlePageChange(page)}>
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="app-container" onClick={handleClick}>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                // use theme font
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WILMER MENDEZ
            </Typography>

            {/* Mobile hamburger */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <IconButton
                size="large"
                aria-label="open navigation"
                aria-controls="mobile-menu"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Brand center on mobile */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                // use theme font
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WILMER MENDEZ
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  sx={{
                    my: 1,
                    mx: 1,
                    color: "primary.contrastText",
                    fontWeight: 600,
                    transition: 'background-color 160ms ease, transform 120ms ease',
                    backgroundColor: activePage === page ? 'rgba(255,255,255,0.12)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                      transform: 'translateY(-1px)'
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 20 }} /> {/* This box pushes the avatar to the right */}
            
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Theme toggle icon removed; use chips only */}
              {/* Visible indicator to show theme is toggleable (desktop) */}
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {themeMode === 'rocket' ? (
                  <Chip
                    size="small"
                    variant="outlined"
                    color="secondary"
                    icon={<SpaIcon sx={{ color: 'inherit' }} />}
                    label="Switch to Cozy"
                    onClick={onToggleTheme}
                    clickable
                    sx={{
                      ml: 0.5,
                      borderColor: 'rgba(255,255,255,0.5)',
                      color: 'primary.contrastText',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' },
                    }}
                  />
                ) : (
                  <Chip
                    size="small"
                    variant="outlined"
                    color="secondary"
                    icon={<RocketLaunchIcon sx={{ color: 'inherit' }} />}
                    label="Switch to Rocket"
                    onClick={onToggleTheme}
                    clickable
                    sx={{
                      ml: 0.5,
                      borderColor: 'rgba(255,255,255,0.3)',
                      color: 'primary.contrastText',
                      backgroundColor: 'rgba(255,255,255,0.12)',
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                    }}
                  />
                )}
              </Box>
              {/* Compact indicator for mobile */}
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                {themeMode === 'rocket' ? (
                  <Chip
                    size="small"
                    variant="outlined"
                    color="secondary"
                    label="Cozy"
                    onClick={onToggleTheme}
                    clickable
                    sx={{
                      ml: 0.5,
                      borderColor: 'rgba(255,255,255,0.4)',
                      color: 'primary.contrastText',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.16)' },
                    }}
                  />
                ) : (
                  <Chip
                    size="small"
                    variant="outlined"
                    color="secondary"
                    label="Rocket"
                    onClick={onToggleTheme}
                    clickable
                    sx={{
                      ml: 0.5,
                      borderColor: 'rgba(255,255,255,0.3)',
                      color: 'primary.contrastText',
                      backgroundColor: 'rgba(255,255,255,0.12)',
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                    }}
                  />
                )}
              </Box>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={image} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {theme.palette.mode === 'dark' ? (
        <Box aria-hidden sx={{ height: 14, background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0))', filter: 'blur(10px)', opacity: 0.35, pointerEvents: 'none' }} />
      ) : (
        <SectionDivider />
      )}
      <Container id="content-top" maxWidth="lg" sx={{ mt: { xs: 2, md: 4 }, mb: { xs: 4, md: 6 } }}>
        <FrontPaper
          onNavigate={(page) => handlePageChange(page)}
          onSectionChange={(page) => setActivePage(page)}
        />
      </Container>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { backgroundColor: 'background.paper' },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default ResponsiveAppBar;
