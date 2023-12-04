import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import { LocalImages } from "../Utils/images";
import { AuthContext } from "../Context/AuthContext";

const pages = [
  "LIVE SCHEDULE",
  "IWC MERCH",
  "IWC SOCIAL",
  "ABOUT",
  "EVENTS",
  "CONTACT",
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const { toggleLogin } = React.useContext(AuthContext);

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
    <AppBar className="header-content" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ width: "50%", display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
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
          <Box sx={{ flexGrow: 1, textAlign: { xs: "center", md: "left" } }}>
            <img
              style={{ width: "150px", position: "absolute", top: -10 }}
              src={LocalImages.logo}
              alt="Logo"
            />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ display: "flex" }}>
            <Stack spacing={2} direction="row">
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      className="header-left-menu"
                    >
                      {/* <Typography textAlign="center" className='header-left-menu'><span className='header-left-menu'> */}
                      <li className="header-left-menu">{page}</li>
                      {/* </span></Typography> */}
                    </MenuItem>
                  ))}
                </Menu>
                <IconButton
                  size="medium"
                  sx={{ display: { xs: 'none', md: 'flex' } }}       
                className='header-menu-icon' >
                  <SearchOutlinedIcon />
                </IconButton>
                <IconButton
                  size="medium"
                  className='header-menu-icon'>
                  <PersonIcon />
                </IconButton>
                <Button
                  onClick={toggleLogin}
                  variant="contained"
                  sx={{display: {xs: "none", md:"flex"}, background: "#FFA903", color: "#fff"}}
                  className="header-signup"
                >
                  <span >SIGN UP NOW</span>
                </Button>
              </Stack>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  sx={{background: "#FFA903", marginLeft: 1}}
                  className="icon-style01"
                >
                  <MenuIcon className="icon-style01" />
                </IconButton>
              </Box>

            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
