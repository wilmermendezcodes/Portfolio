import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AboutMe from "./papercomponents/AboutMe";
import Experience from "./papercomponents/Experience";

const FrontPaper = ({ aboutmestatus, experiencestatus }) => {
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
        }}
      >
        {aboutmestatus == 1 && <AboutMe />}
        {experiencestatus == 1 && <Experience />}
      </Paper>
    </Box>
  );
};

export default FrontPaper;
