import React from 'react';
import {
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Box
  } from '@mui/material';
  import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    Email as EmailIcon,
  } from '@mui/icons-material';

import { styled } from '@mui/material/styles';


const StyledBox = styled(Box)({
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    boxSizing: 'border-box',
    padding: '20px',
    margin: '20px auto', // Adjusted for centering
    maxWidth: '345px', // Max width for the card
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items for the card layout
    position: 'relative', // For absolute positioning of the CardMedia
});

function ProfileCard() {
  // Replace with your actual image URL and links
  const imageUrl = '/bruce.jpeg';
  const linkedInUrl = 'https://www.linkedin.com/in/brucereier/';
  const gitHubUrl = 'https://github.com/brucereier';
  const emailUrl = 'mailto:bpreier@ad.unc.edu';

  return (
    <StyledBox>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="Bruce"
        sx={{ width: '250px', height: '250px', borderRadius: '50%', margin: 'auto', border: '3px solid white' }}
      />
      <CardContent sx={{ textAlign: 'center', marginTop: '40px' }}>
        <Typography gutterBottom variant="h5" component="div">
          Bruce Reier
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dev
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <IconButton aria-label="LinkedIn" onClick={() => window.open(linkedInUrl, '_blank')}>
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="Email" onClick={() => window.open(emailUrl, '_blank')}>
            <EmailIcon />
          </IconButton>
          <IconButton aria-label="GitHub" onClick={() => window.open(gitHubUrl, '_blank')}>
            <GitHubIcon />
          </IconButton>
        </Box>
      </CardContent>
    </StyledBox>
  );
}

export default ProfileCard;
