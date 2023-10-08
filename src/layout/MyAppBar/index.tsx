import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function MyAppBar() {
  return (
    <AppBar color="primary" position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button component={NavLink} to="/" color="inherit">
          <Typography variant="h6" component="div">
            News Letter
          </Typography>
        </Button>
        <Button component={NavLink} to="/profile" color="inherit">
          <Typography component="div">Profile</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
