import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      <Stack direction="row" spacing={2}>
      <Avatar   sx={{ width:30, height: 30, mr:1}} resize={"cover"} alt="Remy Sharp" src={require("../img/covid-19_logo.jpg")} />
    </Stack>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Covid-19
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
