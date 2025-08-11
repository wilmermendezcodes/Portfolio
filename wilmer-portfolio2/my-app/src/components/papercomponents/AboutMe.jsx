import React from "react";
import { Typography, Grid, Box, Avatar, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLanguage } from "@fortawesome/free-solid-svg-icons";
import image from "../../wilmermendez2.jpg";

const AboutMe = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 16 }}>
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
              sx={{ width: 150, height: 150, marginBottom: 2 }}
            />
            <Typography
              variant="h4"
              sx={{
                fontFamily: "monospace",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Wilmer Mendez
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                color: "gray",
                textAlign: "center",
              }}
            >
              Application Support Developer
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ marginBottom: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                About Me
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
                Hi, I'm a passionate programmer with over five years of professional experience in building and supporting software solutions. Although I graduated in Mechatronics, I chose programming as my career because creating and improving applications excites me far more than anything else.

                I'm a fast learner and highly adaptable, always eager to explore new technologies and approaches. My core skills include JavaScript, PHP, and MySQL, along with modern frameworks and tools such as React, TypeScript, and Laravel. Recently, I've been expanding into AI-assisted development, integrating tools like OpenAI API, LangChain, and Puter.js into my projects to deliver smarter, more personalized user experiences.

                Outside of programming, I enjoy writing, gaming, and watching movies — hobbies that often inspire creative ideas for my work.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{ marginRight: 8 }}
                />
                Education
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
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
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
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
      </Paper>
    </Box>
  );
};

export default AboutMe;
