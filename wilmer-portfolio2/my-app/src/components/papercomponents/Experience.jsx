import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const Experience = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontFamily: "monospace", fontWeight: "bold", marginBottom: 4 }}
      >
        WORK EXPERIENCE
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "monospace", fontWeight: "bold", marginBottom: 2 }}
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
    </Box>
  );
};

export default Experience;
