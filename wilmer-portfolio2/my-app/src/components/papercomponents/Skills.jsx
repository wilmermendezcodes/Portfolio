import React from "react";
import { Typography, Grid, Box, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faJsSquare, faReact, faHtml5, faCss3Alt, faBootstrap, faGithub, faAws, faDocker, faJs, faLaravel, faJq } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const skills = [
    {
      category: "Main Languages",
      items: [
        { name: "PHP", icon: faPhp },
        { name: "JavaScript", icon: faJsSquare },
        { name: "MySQL", icon: faDatabase },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
      ],
    },
    {
      category: "Libraries",
      items: [
        { name: "React", icon: faReact },
        { name: "jQuery", icon: faJs },
        { name: "Bootstrap", icon: faBootstrap },
        // For Material-UI, Font Awesome doesn't have a specific icon, but you can use a generic icon or create a custom one if needed.
        { name: "Material-UI", icon: faReact },
        { name: "Laravel", icon: faLaravel }, // Using React icon as a placeholder
      ],
    },
    {
        category: "Services/Applications",
        items: [
            { name: "Amazon Web Services", icon: faAws },
            { name: "GitHub", icon: faGithub },
            { name: "VSCode", icon: faReact }, // Placeholder
            { name: "Docker", icon: faDocker },
        ],
      },
    
  ];

const Skills = () => {
  return (
    <Box sx={{ marginLeft: -20 }}>
      <Typography
        sx={{
          textAlign: "left",
          fontFamily: "monospace",
          marginTop: -5,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        SKILLS:
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {skills.map((skill, index) => (
          <Grid item xs={4} key={index}>
            <Typography variant="h6" sx={{ fontFamily: "monospace", fontSize: 25, marginBottom: 2 }}>
              {skill.category}:
            </Typography>
            <List>
              {skill.items.map((item, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Box sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FontAwesomeIcon icon={item.icon} size="2x" />
                    </Box>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
