import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
import { useState } from 'react';

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = ['Motorcycles', 'Shop', 'Services', 'Rides', 'Our World', 'Support', 'Locate Us', 'Login'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              display: { xs: 'none', md: 'flex' },
              height: 40, // Reduced height by 20%
              width: 'auto', // Maintain aspect ratio
              mr: 2,
            }}
            alt="Royal Enfield Logo"
            src="https://www.royalenfield.com/content/dam/royal-enfield/india/logos/logo.svg"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* LOGO */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            sx={{
              display: { xs: 'flex', md: 'none' },
              height: 20, // Reduced height by 20%
              width: 10, // Maintain aspect ratio
              mr: 1,
            }}
            alt="Royal Enfield Logo"
            src="https://www.royalenfield.com/content/dam/royal-enfield/india/logos/logo.svg"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* LOGO */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {['Motorcycles', 'Shop', 'Services', 'Rides', 'Our World', 'Support'].map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', mx: 1 }}
            >
              Locate Us
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', mx: 1 }}
            >
              Login
            </Button>
             {/* <Menu
              anchorEl={anchorElLogin}
              open={Boolean(anchorElLogin)}
              onClose={() => handleCloseMenu(setAnchorElLogin)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseMenu(setAnchorElLogin)}>
                  {setting}
                </MenuItem> 
              ))}
            </Menu> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Search">
              <IconButton sx={{ p: 0, color: 'white' }}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Visit our global website">
              <IconButton sx={{ p: 0, color: 'white' }}>
                <FlagIcon />
              </IconButton>
            </Tooltip>
            <IconButton
              size="large"
              aria-label="user account"
              aria-controls="menu-user"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
              sx={{ p: 0 }}
            >
              <Avatar
                alt="User Avatar"
                src="https://www.royalenfield.com/content/dam/royal-enfield/india/owners/published/generic-profile.jpg"
              />
            </IconButton>
            <Menu
              id="menu-user"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;