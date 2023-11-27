import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import { LocalImages } from '../Utils/images';

const pages = ['LIVE SCHEDULE', 'IWC MERCH', 'IWC SOCIAL', 'ABOUT', 'EVENTS', 'CONTACT'];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='header-content' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>          
          <Box sx={{width: "50%", display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{flexGrow: 1, textAlign:  { xs: 'center', md: 'left' } }}><img style={{width: "150px", position: "absolute", top: -10}} src={LocalImages.logo} alt="Logo" /></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{display:"flex"}}>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>            
          </Box>
            <Stack spacing={2} direction="row">
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
                <MenuItem key={page} onClick={handleCloseNavMenu} className='header-left-menu'>
                  {/* <Typography textAlign="center" className='header-left-menu'><span className='header-left-menu'> */}
                    <li className='header-left-menu'>{page}</li>
                    {/* </span></Typography> */}
                </MenuItem>
              ))}
            </Menu>
                <IconButton
                size="medium"           
                style={{ borderRadius: "50%", backgroundColor: "orange", color: "#fff"}} >
                <SearchOutlinedIcon />
                </IconButton>
                <IconButton
                size="medium"                  
                style={{ borderRadius: "50%", backgroundColor: "orange", color: "#fff"}} >
                <PersonIcon />
                </IconButton>
                <Button variant="contained" sx={{background: "#FFA903", color: "#fff"}}>SIGN UP NOW</Button>               
            </Stack>
            </Box>           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;