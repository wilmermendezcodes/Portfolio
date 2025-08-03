// experience_flip_book.jsx
import React, { useState } from "react";
import { Typography, Box, Grid, Paper, Button } from "@mui/material";
import { useSpring, animated as a } from "react-spring";

const details = {
  "Member of the Production Team.": [
    "Handled live system issues during high-priority production releases.",
    "Created automated monitoring scripts for faster alerting.",
    "Communicated with cross-functional teams to resolve issues quickly."
  ],
  // Add more list items if needed
};

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 1,
    transform: `perspective(1000px) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsFlipped(true);
  };

  const handleBack = () => {
    setIsFlipped(false);
    setTimeout(() => setSelectedItem(null), 600);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 4, perspective: "1000px" }}>
        <a.div style={{ position: "relative", transform, opacity }}>
          {!isFlipped && (
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  mb: 4,
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  borderBottom: "2px solid #738A0A",
                  pb: 1,
                }}
              >
                Work Experience
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" sx={{ fontFamily: "monospace", fontWeight: "bold", color: "#738A0A", textTransform: "uppercase", borderBottom: "1px solid #738A0A", pb: 1, mb: 2 }}>
                    Application Support Developer
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "monospace", mb: 2 }}>
                    ShoreCloud Corp., Part of Thermofisher (2020-present)
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="body1" sx={{ fontFamily: "monospace", mb: 4 }}>
                    <ul style={{ paddingLeft: "20px" }}>
                      {Object.keys(details).map((item, idx) => (
                        <li key={idx} style={{ cursor: "pointer", color: "#33691e" }} onClick={() => handleItemClick(item)}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}

          {isFlipped && selectedItem && (
            <Box sx={{ minHeight: "300px", position: "absolute", top: 0, left: 0, right: 0, padding: 2 }}>
              <Typography variant="h5" sx={{ fontFamily: "monospace", fontWeight: "bold", color: "#738A0A", mb: 2 }}>
                {selectedItem.replace(".", "")}
              </Typography>
              <ul>
                {details[selectedItem].map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <Button variant="outlined" sx={{ mt: 3 }} onClick={handleBack}>
                Back
              </Button>
            </Box>
          )}
        </a.div>
      </Paper>
    </Box>
  );
};

export default Experience;
