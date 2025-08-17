import React from 'react';
import { Grid, Box, Typography, Card, CardContent, CardActions, Button, Stack } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const AnimatedCard = animated(Card);

const Projects = () => {
  const [hovered, setHovered] = React.useState(false);
  const spring = useSpring({
    transform: hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0px) scale(1)',
    boxShadow: hovered
      ? '0 10px 24px rgba(58,90,64,0.18), 0 4px 12px rgba(58,90,64,0.12)'
      : '0 10px 24px rgba(58,90,64,0.00), 0 4px 12px rgba(58,90,64,0.00)',
    config: { tension: 260, friction: 20 },
  });

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 3,
          borderBottom: (theme) => `2px solid ${theme.palette.primary.main}`,
          pb: 1,
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <AnimatedCard
            elevation={0}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={spring}
            sx={{ backgroundColor: 'background.paper', borderRadius: 3 }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Browse My Work
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                See all repositories, experiments, and showcases on GitHub.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <Button size="medium" variant="contained" color="primary" href="https://github.com/wilmermendezcodes" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} /> Open GitHub Profile
                </Button>
              </Stack>
            </CardActions>
          </AnimatedCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
