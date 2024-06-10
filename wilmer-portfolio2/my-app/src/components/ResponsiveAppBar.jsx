import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import image from "../wilmermendez.jpg";
import FrontPaper from "./FrontPaper";

const pages = ["About Me", "Experience", "Skills"];

const ResponsiveAppBar = () => {
  const [activePage, setActivePage] = React.useState(null);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#738A0A" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WILMER MENDEZ
            </Typography>

            {pages.map((page) => (
              <Box
                key={page}
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  "&:not(:last-child)": { mr: 2 },
                }}
              >
                <Button
                  onClick={() => handlePageChange(page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Box>
            ))}

            <Box sx={{ flexGrow: 20 }} /> {/* This box pushes the avatar to the right */}
            
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={image} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <FrontPaper aboutmestatus={activePage === "About Me" ? 1 : 0} experiencestatus={activePage === "Experience" ? 1 : 0} skillsstatus={activePage === "Skills" ? 1 : 0} />
    </div>
  );
};

export default ResponsiveAppBar;
