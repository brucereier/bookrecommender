import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProfileCard from './ProfileCard';

// Reuse the StyledBox for consistent styling
const StyledBox = styled(Box)({
  backgroundColor: '#f5f5f5',
  border: '1px solid #ddd',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  boxSizing: 'border-box',
  padding: '20px',
  margin: '20px',
  width: 'auto', // Adjust width to fit half the parent minus margin
  '&:first-of-type': {
    marginRight: '20px', // Add space between the boxes
  },
});

function About() {
    return (
      <Box sx={{ display: 'flex', alignItems: 'start', padding: '35px', gap: '30px' }}>
        <Box sx={{ flex: 'none' }}> {/* ProfileCard has its own styling */}
          <ProfileCard />
        </Box>
        <StyledBox>
          <Typography variant="h5" component="h2" gutterBottom style={{ textAlign: 'center' }}>
            About Me
          </Typography>
          <Typography variant="body1">
            Hi! I'm Bruce and I am the sole developer of this project. I'm currently a sophomore studying Computer Science and Statistics at the University of North Carolina at Chapel Hill. I currently work as a Software Engineer with some other students on campus at a startup called <a href="https://www.classmate.lol" target="_blank" rel="noopener noreferrer">
        classmate </a> that aims to make course registration easier for college students. We essentially develop a web application where students can use advanced filters, directly view professor ratings, and connect with their friends. Aside from that, my interests include essentially everything tech-related. I'm especially interested in AI, Machine Learning, and Full-Stack development. Outside of tech, I really enjoy going to the gym and reading(hence this project). Feel free to check out any of my other projects on my GitHub or to reach out just to talk about cool stuff!
          </Typography>
        </StyledBox>
      </Box>
    );
  }
  
  export default About;