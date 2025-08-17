import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSpring, animated } from "react-spring";
import { useTheme } from '@mui/material/styles';
import MagmaDivider from "./MagmaDivider";
import SectionDivider from "./SectionDivider";
import AboutMe from "./papercomponents/AboutMe";
import Experience from "./papercomponents/Experience";
import Skills from "./papercomponents/Skills";
import Projects from "./papercomponents/Projects";
import { Typography } from "@mui/material";
import SideOrnaments from "./SideOrnaments";
import ParallaxLayer from "./ParallaxLayer";

// Array of characters for the typing effect
const characters = "Write code. Blow minds.";

const AnimatedTypography = animated(Typography);

const FrontPaper = ({ onNavigate, onSectionChange }) => {
  const theme = useTheme();
  // State to store the currently displayed text
  const [displayText, setDisplayText] = React.useState("");

  // Function to simulate typing effect
  const simulateTyping = (text, index = 0) => {
    if (index < text.length) {
      setTimeout(() => {
        setDisplayText((prevText) => prevText + text.charAt(index));
        simulateTyping(text, index + 1);
      }, 100); // Typing speed: 100 milliseconds per character
    }
  };

  // Start typing effect on mount
  React.useEffect(() => {
    simulateTyping(characters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hero reveal animation
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(12px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 120,
  });

  // ScrollSpy: observe sections and notify parent
  React.useEffect(() => {
    if (!onSectionChange) return;
    const sections = [
      { id: 'about', page: 'About Me' },
      { id: 'experience', page: 'Experience' },
      { id: 'skills', page: 'Skills' },
      { id: 'projects', page: 'Projects' },
    ];
    const observers = [];
    const handler = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const found = sections.find((s) => s.id === entry.target.id);
          if (found) onSectionChange(found.page);
        }
      });
    };
    const io = new IntersectionObserver(handler, { threshold: [0.5] });
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    observers.push(io);
    return () => observers.forEach((o) => o.disconnect());
  }, [onSectionChange]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'background.default',
        position: 'relative',
      }}
    >
      <ParallaxLayer speed={0.12}>
        <SideOrnaments />
      </ParallaxLayer>
      <Paper
        sx={{
          backgroundColor: 'background.paper',
          width: '100%',
          p: { xs: 2, md: 4 },
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        {/* Ornaments rendered outside the card */}
        {/* Hero */}
        <ParallaxLayer speed={0.06}>
          <Box id="home" sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
              <AnimatedTypography
                variant="h2"
                align="center"
                style={heroSpring}
                sx={{
                  fontWeight: 800,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(90deg, #FF6F60 0%, #E53935 50%, #6AB7FF 100%)'
                    : 'linear-gradient(90deg, #4F7059 0%, #6B8F71 50%, #A9C5A0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '.02em',
                }}
              >
                {displayText}
                <span className="typing-sign">|</span>
              </AnimatedTypography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography align="center" sx={{ color: 'text.secondary', mb: 2 }}>
                Application Support Developer delivering React + Laravel systems,
                automation pipelines, and AI‑assisted solutions.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" color="primary" onClick={() => onNavigate && onNavigate('Experience')}>View Experience</Button>
                <Button variant="outlined" color="primary" onClick={() => onNavigate && onNavigate('Skills')}>Explore Skills</Button>
                <Button variant="text" color="primary" onClick={() => onNavigate && onNavigate('Projects')}>See Projects</Button>
              </Box>
            </Grid>
          </Grid>
          </Box>
        </ParallaxLayer>

        {theme.palette.mode === 'dark' ? (
          <MagmaDivider colors={[ '#FF6F60', '#E53935', '#2979FF' ]} />
        ) : (
          <SectionDivider />
        )}

        {/* Sections stacked for scroll + scrollspy */}
        <Box id="about" sx={{ py: { xs: 4, md: 6 } }}>
          <AboutMe />
        </Box>
        {theme.palette.mode === 'dark' ? (
          <MagmaDivider colors={[ '#2979FF', '#6AB7FF', '#FF6F60' ]} />
        ) : (
          <SectionDivider />
        )}
        <Box id="experience" sx={{ py: { xs: 4, md: 6 } }}>
          <Experience />
        </Box>
        {theme.palette.mode === 'dark' ? (
          <MagmaDivider colors={[ '#E53935', '#FF6F60', '#6AB7FF' ]} />
        ) : (
          <SectionDivider />
        )}
        <Box id="skills" sx={{ py: { xs: 4, md: 6 } }}>
          <Skills />
        </Box>
        {theme.palette.mode === 'dark' ? (
          <MagmaDivider colors={[ '#6AB7FF', '#2979FF', '#FF6F60' ]} />
        ) : (
          <SectionDivider />
        )}
        <Box id="projects" sx={{ py: { xs: 4, md: 6 } }}>
          <Projects />
        </Box>
        {/* CSS animations for 3D effects */}
        <style>
          {`
            @keyframes rotateX {
              0% {
                transform: rotateX(0deg);
              }
              100% {
                transform: rotateX(360deg);
              }
            }

            @keyframes rotateY {
              0% {
                transform: rotateY(0deg);
              }
              100% {
                transform: rotateY(360deg);
              }
            }

            .rotateX {
              animation: rotateX 5s infinite linear;
            }

            .rotateY {
              animation: rotateY 5s infinite linear;
            }

            .typing-sign {
              animation: typing-sign 0.5s infinite alternate; /* Blinking animation for the typing sign */
            }

            @keyframes typing-sign {
              0% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }
          `}
        </style>
      </Paper>
    </Box>
  );
};

export default FrontPaper;
