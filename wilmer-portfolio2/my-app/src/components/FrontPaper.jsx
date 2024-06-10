import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AboutMe from "./papercomponents/AboutMe";
import Experience from "./papercomponents/Experience";
import Skills from "./papercomponents/Skills";
import { Typography } from "@mui/material";

// Array of characters for the typing effect
const characters = "Write code. Blow minds.";

const FrontPaper = ({ aboutmestatus, experiencestatus, skillsstatus }) => {
  // State to store the currently displayed text
  const [displayText, setDisplayText] = React.useState("");

  // Function to simulate typing effect
  const simulateTyping = (text) => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayText((prevText) => prevText + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed (milliseconds per character)
  };

  // useEffect to simulate typing effect when the component mounts or when the statuses change
  React.useEffect(() => {
    // If none of the components are loaded, display the typing effect
    if (!aboutmestatus && !experiencestatus && !skillsstatus) {
      simulateTyping(characters);
    }
  }, [aboutmestatus, experiencestatus, skillsstatus]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          maxWidth: 2000,
          height: 600,
        },
      }}
      style={{
        backgroundColor: "#F4F7E9",
      }}
    >
      <Paper
        style={{
          backgroundColor: "#EFF3DE",
          width: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          position: "relative", // Make the container relative for absolute positioning of the typing sign
        }}
      >
        {/* Conditionally render AboutMe, Experience, and Skills components */}
        {aboutmestatus === 1 && <AboutMe />}
        {experiencestatus === 1 && <Experience />}
        {skillsstatus === 1 && <Skills />}

        {/* Display the typing effect */}
        {!aboutmestatus && !experiencestatus && !skillsstatus && (
          <Typography variant="h3" color="textPrimary" align="center" sx={{ fontFamily: "monospace" }}>
            {displayText}
            <span className="typing-sign">|</span> {/* Typing sign */}
          </Typography>
        )}

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
