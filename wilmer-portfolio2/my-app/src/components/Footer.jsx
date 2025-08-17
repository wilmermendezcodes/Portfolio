import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
// removed newsletter controls
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import SectionDivider from "./SectionDivider";
import { useTheme } from '@mui/material/styles';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import React from "react";

const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footerClass" style={{ paddingTop: 0 }}>
      {theme.palette.mode === 'dark' ? null : (
        <SectionDivider flip color={'#E2ECD4'} />
      )}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #E53935 0%, #FF6F60 45%, #2979FF 100%)'
            : "linear-gradient(180deg, #6B8F71 0%, #628766 100%)",
          color: 'primary.contrastText',
          pt: { xs: 3, md: 4 },
          pb: { xs: 3, md: 4 },
        }}
      >
        {theme.palette.mode === 'dark' && (
          <>
            {/* Smooth glowy top edge */}
            <Box aria-hidden sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 24, background: 'linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0))', filter: 'blur(12px)', opacity: 0.4, pointerEvents: 'none' }} />
            {/* Smooth glowy bottom edge */}
            <Box aria-hidden sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 24, background: 'linear-gradient(0deg, rgba(255,255,255,0.35), rgba(255,255,255,0))', filter: 'blur(12px)', opacity: 0.35, pointerEvents: 'none' }} />
          </>
        )}
        {/* Subtle noise overlay */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute', inset: 0,
            pointerEvents: 'none',
            opacity: theme.palette.mode === 'dark' ? 0.15 : 0.07,
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0.35'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                Engineering is applied imagination—turn constraints into elegant systems.
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.92, mb: 2 }}>
                Thoughtful UI, solid engineering, and dependable operations.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Link href="mailto:WilmerMendez500@outlook.com" underline="none">
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 2.5,
                      py: 1.25,
                      borderRadius: 2,
                      bgcolor: 'secondary.light',
                      color: 'text.primary',
                      transition: 'transform 120ms ease, background-color 160ms ease',
                      '&:hover': { transform: 'translateY(-1px)', bgcolor: 'secondary.main' },
                    }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} /> Email Me
                  </Box>
                </Link>
                <Link href="tel:+639613311845" underline="none">
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 2.5,
                      py: 1.25,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'secondary.light',
                      color: 'primary.contrastText',
                      transition: 'transform 120ms ease, background-color 160ms ease, border-color 160ms ease',
                      '&:hover': { transform: 'translateY(-1px)', backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'secondary.main' },
                    }}
                  >
                    <FontAwesomeIcon icon={faPhone} /> Call Me
                  </Box>
                </Link>
              </Stack>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography variant="overline" sx={{ opacity: 0.9 }}>
                Contact
              </Typography>
              <Stack spacing={1.2} sx={{ mt: 1 }}>
                <Link color="inherit" href="mailto:WilmerMendez500@outlook.com">WilmerMendez500@outlook.com</Link>
                <Link color="inherit" href="tel:+639613311845">+63 961 331 1845</Link>
              </Stack>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography variant="overline" sx={{ opacity: 0.9 }}>
                Social
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                <Tooltip title="GitHub">
                  <IconButton
                    component="a"
                    href="https://github.com/wilmermendezcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'primary.contrastText', '&:hover': { color: 'secondary.light', transform: 'translateY(-1px)' }, transition: 'all 120ms ease' }}
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/wilmer-mendez-1977a2234"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'primary.contrastText', '&:hover': { color: 'secondary.light', transform: 'translateY(-1px)' }, transition: 'all 120ms ease' }}
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Facebook">
                  <IconButton
                    component="a"
                    href="https://www.facebook.com/profile.php?id=61579118549064&sk=about"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'primary.contrastText', '&:hover': { color: 'secondary.light', transform: 'translateY(-1px)' }, transition: 'all 120ms ease' }}
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </IconButton>
                </Tooltip>
              </Stack>
              {/* Newsletter removed per request */}
            </Grid>
          </Grid>

          <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.15)' }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
            <Typography variant="body2" sx={{ color: 'primary.contrastText', opacity: 0.9 }}>
              © {year} Wilmer Mendez. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link color="inherit" href="https://github.com/wilmermendezcodes" target="_blank" rel="noopener noreferrer">GitHub</Link>
              <Link color="inherit" href="https://www.linkedin.com/in/wilmer-mendez-1977a2234" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
              <Link color="inherit" href="https://www.facebook.com/profile.php?id=61579118549064&sk=about" target="_blank" rel="noopener noreferrer">Facebook</Link>
              <Link color="inherit" href="mailto:WilmerMendez500@outlook.com">Email</Link>
            </Stack>
            <Tooltip title="Back to top">
              <IconButton onClick={handleBackToTop} sx={{ color: 'primary.contrastText', ml: 'auto' }} aria-label="Back to top">
                <KeyboardArrowUpIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
