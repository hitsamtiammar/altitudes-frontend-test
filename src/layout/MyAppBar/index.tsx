import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

export default function MyAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News Letter
        </Typography>
        <Button color="inherit">Profile</Button>
      </Toolbar>
    </AppBar>
  );
}
