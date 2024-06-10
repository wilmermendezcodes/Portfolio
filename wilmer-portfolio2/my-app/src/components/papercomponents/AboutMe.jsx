import React from "react";
import { Typography, Grid, Box, Avatar } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faLanguage, faCode } from '@fortawesome/free-solid-svg-icons';
import image from '../../wilmermendez2.jpg'

const AboutMe = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Avatar
            alt="Wilmer Mendez"
            src={image}
            sx={{ width: 150, height: 150, marginBottom: 2, marginLeft: 10 }}
          />
          <Typography
            variant="h4"
            sx={{ fontFamily: "monospace", fontWeight: "bold", marginLeft: 2 }}
          >
            Wilmer Mendez
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontFamily: "monospace", color: "gray", marginLeft: 2 }}
          >
            Developer
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box sx={{ marginBottom: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontFamily: "monospace", fontWeight: "bold", marginBottom: 2 }}
            >
              About Me
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
              Hi, I am a passionate programmer with four years of experience in the
              industry. I graduated in Mechatronics but chose programming as my career because I love coding.
              My strengths include being a fast learner and highly adaptable to new technologies.
              My main programming languages are JavaScript, PHP, and MySQL.
              In addition to programming, my hobbies include writing, gaming, and watching movies.
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontFamily: "monospace", fontWeight: "bold", marginBottom: 2 }}
            >
              <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: 8 }} />
              Education
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
              Bachelor of Technology Major in Mechatronics Technology (2013-2019)
              <br />
              Technological University of the Philippines Visayas
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{ fontFamily: "monospace", fontWeight: "bold", marginBottom: 2 }}
            >
              <FontAwesomeIcon icon={faLanguage} style={{ marginRight: 8 }} />
              Languages
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
              English, Tagalog
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
