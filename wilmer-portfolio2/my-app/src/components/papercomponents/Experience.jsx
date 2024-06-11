import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import { useSpring, animated } from "react-spring";

const AnimatedTypography = animated(Typography); // Wrap Typography with animated from react-spring

const Experience = () => {
  // Define spring animations for the "Work Experience" heading
  const textSpring = useSpring({
    from: { opacity: 0, transform: "rotateX(-180deg) scale(0)" }, // Initial style
    to: { opacity: 1, transform: "rotateX(0deg) scale(1)" }, // Final style
    delay: 500, // Delay the animation
  });

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 16 }}>
        <AnimatedTypography
          variant="h4"
          sx={{
            fontFamily: "monospace",
            fontWeight: "bold",
            marginBottom: 4,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            borderBottom: "2px solid #738A0A",
            paddingBottom: "8px",
          }}
          style={textSpring} // Apply spring animation style
        >
          Work Experience
        </AnimatedTypography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "monospace",
                fontWeight: "bold",
                marginBottom: 2,
                color: "#738A0A",
                textTransform: "uppercase",
                borderBottom: "1px solid #738A0A",
                paddingBottom: "4px",
              }}
            >
              Junior Developer
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "monospace", marginBottom: 2 }}>
              ShoreCloud Corp., Part of Thermofisher (2020-present)
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ fontFamily: "monospace", marginBottom: 4 }}>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Member of the Production Team.</li>
                <li>Doing database updates, table creation and deletion.</li>
                <li>JQuery script maintenance and creation.</li>
                <li>Troubleshooting front-end and back-end issues.</li>
                <li>Doing Development for new projects using React.js and Laravel.</li>
                <li>Have worked also using Python for data transformations.</li>
                <li>Worked in AWS services for the current project (data quality).</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Experience;
