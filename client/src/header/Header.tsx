import React, { useState } from 'react';
import AuthenticationButton from '@components/Buttons/LoginButton';
import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import DrawerComp from './Drawer';

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#092747' }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: 'scale(2)' }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>Sreality.cz</Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: 'auto' }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
              >
                <Tab label="Apartments" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              <AuthenticationButton sx={{ marginLeft: 'auto' }}>Login</AuthenticationButton>
              <AuthenticationButton sx={{ marginLeft: '10px' }}>SignUp</AuthenticationButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
