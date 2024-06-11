import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  LinearProgress,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhp,
  faJsSquare,
  faReact,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faGithub,
  faAws,
  faDocker,
  faJs,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    category: "Main Languages",
    items: [
      {
        name: "PHP",
        icon: faPhp,
        proficiency: 3.5,
        description:
          "PHP is a server-side scripting language primarily used for web development, but also used as a general-purpose programming language.",
      },
      {
        name: "JavaScript",
        icon: faJsSquare,
        proficiency: 4,
        description:
          "JavaScript is a high-level programming language that is interpreted by browsers to provide interactive effects and functionalities to websites.",
      },
      {
        name: "MySQL",
        icon: faDatabase,
        proficiency: 4,
        description:
          "MySQL is an open-source relational database management system (RDBMS) that uses SQL (Structured Query Language).",
      },
      {
        name: "HTML",
        icon: faHtml5,
        proficiency: 4,
        description:
          "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.",
      },
      {
        name: "CSS",
        icon: faCss3Alt,
        proficiency: 3,
        description:
          "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.",
      },
    ],
  },
  {
    category: "Libraries",
    items: [
      {
        name: "React",
        icon: faReact,
        proficiency: 3.5,
        description:
          "React is a JavaScript library for building user interfaces, developed by Facebook. It is used for building single-page applications and handling view layers for web and mobile apps.",
      },
      {
        name: "jQuery",
        icon: faJs,
        proficiency: 4.5,
        description:
          "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler with an easy-to-use API that works across a multitude of browsers.",
      },
      {
        name: "Bootstrap",
        icon: faBootstrap,
        proficiency: 5,
        description:
          "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
      },
      {
        name: "Material-UI",
        icon: faReact,
        proficiency: 4,
        description:
          "Material-UI is a popular React UI framework that provides ready-to-use components following Google's Material Design principles. It helps developers to build beautiful and accessible web applications quickly.",
      },
      {
        name: "Laravel",
        icon: faLaravel,
        proficiency: 3,
        description:
          "Laravel is a free, open-source PHP web framework, intended for the development of web applications following the model-view-controller (MVC) architectural pattern and based on Symfony.",
      },
    ],
  },
  {
    category: "Services/Applications",
    items: [
      {
        name: "Amazon Web Services",
        icon: faAws,
        proficiency: 3,
        description:
          "Amazon Web Services (AWS) is a secure cloud services platform that offers computing power, database storage, content delivery, and other functionality to help businesses scale and grow.",
      },
      {
        name: "GitHub",
        icon: faGithub,
        proficiency: 4,
        description:
          "GitHub is a web-based platform used for version control and collaboration on software development projects. It allows developers to work together on projects from anywhere and easily track changes to code.",
      },
      {
        name: "Docker",
        icon: faDocker,
        proficiency: 2.5,
        description:
          "Docker is a platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.",
      },
    ],
  },
];

const Skills = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTechnology, setSelectedTechnology] = useState({});

  const handleTechnologyClick = (technology) => {
    setSelectedTechnology(technology);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

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
            <Typography
              variant="h6"
              sx={{ fontFamily: "monospace", fontSize: 25, marginBottom: 2 }}
            >
              {skill.category}:
            </Typography>
            <List>
              {skill.items.map((item, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => handleTechnologyClick(item)}
                >
                  <ListItemAvatar>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
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
      {/* Dialog for displaying technology details */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            background:
              'url("https://www.transparenttextures.com/patterns/old-paper.png"), #f5f5dc',
            backgroundBlendMode: "multiply",
            borderRadius: 15,
            border: "2px solid #d2b48c",
            padding: "20px",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "'Papyrus', 'Fantasy', cursive",
            color: "#556b2f",
            fontSize: "1.5rem",
          }}
        >
          {selectedTechnology.name}
        </DialogTitle>
        <DialogContent>
          <Typography
            sx={{
              fontFamily: "'Papyrus', 'Fantasy', cursive",
              color: "#556b2f",
            }}
          >
            {selectedTechnology.description}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Papyrus', 'Fantasy', cursive",
              color: "#556b2f",
            }}
          >
            Proficiency Level: {selectedTechnology.proficiency}
          </Typography>
          <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                value={(selectedTechnology.proficiency / 5) * 100}
                sx={{
                  backgroundColor: "#8BC34A", // Light green background
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#388E3C", // Darker green for the bar
                  },
                  height: 10,
                  borderRadius: 5,
                }}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            sx={{
              fontFamily: "'Papyrus', 'Fantasy', cursive",
              color: "#556b2f",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Skills;
