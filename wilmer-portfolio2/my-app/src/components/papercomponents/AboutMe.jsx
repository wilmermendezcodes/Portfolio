import React from "react";
import { Typography, Grid, Box, Avatar, Paper, Chip, Stack } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLanguage } from "@fortawesome/free-solid-svg-icons";
import image from "../../wilmermendez2.jpg";

const AboutMe = () => {
  const theme = useTheme();
  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Paper elevation={3} sx={{ padding: { xs: 2, md: 4 }, borderRadius: 4, backgroundColor: 'background.paper' }}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              alt="Wilmer Mendez"
              src={image}
              sx={{ width: 150, height: 150, marginBottom: 2, border: theme => `4px solid ${theme.palette.secondary.main}` }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Wilmer Mendez
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                textAlign: "center",
              }}
            >
              Application Support Developer
            </Typography>
            {/* Illustration removed per request; artistic lines handled outside the card */}
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ marginBottom: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  borderBottom: theme => `2px solid ${theme.palette.primary.main}`,
                  pb: 1,
                }}
              >
                About Me
              </Typography>
              <Typography variant="body1">
                Hi, I'm a passionate programmer with over five years of professional experience in building and supporting software solutions. Although I graduated in Mechatronics, I chose programming as my career because creating and improving applications excites me far more than anything else.

                I'm a fast learner and highly adaptable, always eager to explore new technologies and approaches. My core skills include JavaScript, PHP, and MySQL, along with modern frameworks and tools such as React, TypeScript, and Laravel. Recently, I've been expanding into AI-assisted development, integrating tools like OpenAI API, LangChain, and Puter.js into my projects to deliver smarter, more personalized user experiences.

                Outside of programming, I enjoy writing, gaming, and watching movies — hobbies that often inspire creative ideas for my work.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  borderBottom: theme => `2px solid ${theme.palette.primary.main}`,
                  pb: 1,
                }}
              >
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{ marginRight: 8 }}
                />
                Education
              </Typography>
              <Typography variant="body1">
                Bachelor of Technology Major in Mechatronics Technology
                (2013-2019)
                <br />
                Technological University of the Philippines Visayas
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  borderBottom: theme => `2px solid ${theme.palette.primary.main}`,
                  pb: 1,
                }}
              >
                <FontAwesomeIcon icon={faLanguage} style={{ marginRight: 8 }} />
                Languages
              </Typography>
              <Typography variant="body1">
                English, Tagalog
              </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  borderBottom: theme => `2px solid ${theme.palette.primary.main}`,
                  pb: 1,
                }}
              >
                Hobbies
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                <Chip label="📚 Books" color="secondary" variant="outlined" />
                <Chip label="🎬 Movies" color="secondary" variant="outlined" />
                <Chip label="🎮 Games" color="secondary" variant="outlined" />
                <Chip label="🤖 AI/LLM" color="secondary" variant="outlined" />
                <Chip label="🤖🛠️ Robotics" color="secondary" variant="outlined" />
                <Chip label="🚀 Rocketry" color="secondary" variant="outlined" />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AboutMe;
