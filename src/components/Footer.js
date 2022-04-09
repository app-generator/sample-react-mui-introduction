import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from '../styles/styles';

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerText}>
        Powered by{' '}
        <Link href="#" underline="none">
          Swift Inc.
        </Link>
      </Typography>
      <Typography className={classes.footerDate}>Copyright {date}</Typography>
    </Box>
  );
};

export default Footer;