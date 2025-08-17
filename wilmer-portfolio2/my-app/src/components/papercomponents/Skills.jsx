import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  LinearProgress,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from '@mui/material/styles';
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
      {
        name: "Replit",
        icon: faGithub,
        proficiency: 3,
        description:
          "Replit is an online IDE and platform for quickly prototyping and hosting applications.",
      },
      {
        name: "VS Code + Xdebug",
        icon: faGithub,
        proficiency: 4,
        description:
          "VS Code with Xdebug for PHP enables step debugging, breakpoints, and variable inspection.",
      },
      {
        name: "Chrome DevTools",
        icon: faGithub,
        proficiency: 4,
        description:
          "Chrome DevTools for performance profiling, network analysis, and frontend debugging.",
      },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      {
        name: "OpenAI API",
        icon: faGithub,
        proficiency: 3.5,
        description:
          "Building AI-assisted features and copilots using OpenAI APIs.",
      },
      {
        name: "OpenRouter",
        icon: faGithub,
        proficiency: 3,
        description:
          "Routing across multiple LLM providers for cost and capability optimization.",
      },
      {
        name: "LLM Models",
        icon: faGithub,
        proficiency: 3.5,
        description:
          "Prompting, function-calling, and evaluation patterns for modern LLMs.",
      },
      {
        name: "Agentic AI Automation",
        icon: faGithub,
        proficiency: 3,
        description:
          "Designing tool-using AI agents to automate workflows and tasks.",
      },
      {
        name: "AI Software Development",
        icon: faGithub,
        proficiency: 3,
        description:
          "Integrating AI into apps—retrieval, summarization, and task automation.",
      },
      {
        name: "Codex CLI",
        icon: faGithub,
        proficiency: 3.5,
        description:
          "Agentic coding flows for faster iteration and structured changes.",
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

  const theme = useTheme();
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 2, md: 3 } }}>
      <Typography
        sx={{
          textAlign: "left",
          fontSize: 28,
          fontWeight: "bold",
          borderBottom: (theme) => `2px solid ${theme.palette.primary.main}`,
          pb: 1,
        }}
      >
        Skills
      </Typography>
      {/* Illustration removed per request; artistic lines handled outside the card */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {skills.map((skill, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Typography
              variant="h6"
              sx={{ fontSize: 22, mb: 1, color: 'text.secondary' }}
            >
              {skill.category}
            </Typography>
            <List>
              {skill.items.map((item, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemButton
                    onClick={() => handleTechnologyClick(item)}
                    sx={{
                      borderRadius: 2,
                      transition: 'background-color 150ms ease, transform 120ms ease',
                      '&:hover': {
                        backgroundColor: 'secondary.light',
                        transform: 'translateY(-1px)'
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: 'primary.main',
                        }}
                      >
                        <FontAwesomeIcon icon={item.icon} size="lg" />
                      </Box>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
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
          sx: {
            backgroundColor: 'background.paper',
            borderRadius: 3,
            border: (theme) => `2px solid ${theme.palette.secondary.main}`,
            p: 2,
          },
        }}
      >
        <DialogTitle sx={{ color: 'text.primary', fontWeight: 'bold' }}>
          {selectedTechnology.name}
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ color: 'text.primary', mb: 1 }}>
            {selectedTechnology.description}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1 }}>
            Proficiency Level: {selectedTechnology.proficiency}
          </Typography>
          <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                value={(selectedTechnology.proficiency / 5) * 100}
                sx={{
                  backgroundColor: 'secondary.light',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 'primary.main',
                  },
                  height: 10,
                  borderRadius: 5,
                }}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Skills;
