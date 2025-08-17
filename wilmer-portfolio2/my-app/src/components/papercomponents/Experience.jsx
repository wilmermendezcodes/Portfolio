import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useSpring, animated } from "react-spring";

const AnimatedTypography = animated(Typography); // Wrap Typography with animated from react-spring

const Experience = () => {
  // Define spring animations for the "Work Experience" heading
  const textSpring = useSpring({
    from: { opacity: 0, transform: "rotateX(-180deg) scale(0)" }, // Initial style
    to: { opacity: 1, transform: "rotateX(0deg) scale(1)" }, // Final style
    delay: 500, // Delay the animation
  });

  const theme = useTheme();
  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Paper elevation={3} sx={{ padding: { xs: 2, md: 4 }, borderRadius: 4, backgroundColor: 'background.paper' }}>
        <AnimatedTypography
          variant="h4"
          sx={{
            fontFamily: 'inherit',
            fontWeight: 'bold',
            marginBottom: 4,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            borderBottom: theme => `2px solid ${theme.palette.primary.main}`,
            paddingBottom: "8px",
          }}
          style={textSpring} // Apply spring animation style
        >
          Work Experience
        </AnimatedTypography>
        {/* Illustration removed per request; artistic lines handled outside the card */}

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'inherit',
                fontWeight: 'bold',
                marginBottom: 2,
                color: 'primary.main',
                textTransform: "uppercase",
                borderBottom: theme => `1px solid ${theme.palette.primary.main}`,
                paddingBottom: "4px",
              }}
            >
              Application Support & Development
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              ShoreCloud Corp., Part of Thermofisher (2020-present)
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ marginBottom: 4 }}>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Designed, developed, and optimized internal tools and back-office applications using React.js, Laravel, MySQL, and AWS services, streamlining workflows and improving operational efficiency..</li>
                <li>Built Quality Control Automation systems leveraging AWS Glue, ECS, S3, PHP, Python, and React.js, reducing manual QA processes and increasing accuracy.</li>
                <li>Enhanced the front-end survey tool with new features and performance optimizations, improving user experience and reliability.</li>
                <li>Implemented automation scripts and data pipeline improvements to ensure timely, accurate Tableau reporting.</li>
                <li>Doing Development for new projects using React.js and Laravel.</li>
                <li>Provided real-time technical support to field teams, integrating modern debugging tools for rapid issue resolution and maintaining operational continuity.</li>
                <li>Partnered with cross-functional teams to prepare existing systems for AI-driven enhancements, ensuring scalability and modernization readiness.</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Experience;
