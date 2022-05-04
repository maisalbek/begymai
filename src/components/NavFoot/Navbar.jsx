import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LogoutIcon from "@mui/icons-material/Logout";

import "./Navbar.css";
import { useAuth } from "../AuthContextProvider";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { currentUser, logOutUser } = useAuth();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CloseIcon onClick={handleMenuClose} sx={{ marginRight: "5px" }} />
      </div>
      {currentUser?.isLogged && (
        <MenuItem
          className="logout"
          onClick={() => {
            handleMenuClose();
            logOutUser();
          }}
        >
          Log out
        </MenuItem>
      )}
      {currentUser?.isLogged && (
        <MenuItem className="menuitem" onClick={handleMenuClose}>
          <NavLink to="/register" className="mobile-link">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                color: "black",
              }}
            >
              <AccountCircle sx={{ marginRight: "10px" }} />
              {currentUser.user}
            </div>
          </NavLink>
        </MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem className="menuitem" onClick={handleMenuClose}>
          <NavLink to="/register" className="mobile-link">
            Register
          </NavLink>
        </MenuItem>
      )}
      {!currentUser?.isLogged && (
        <MenuItem className="menuitem" onClick={handleMenuClose}>
          <NavLink to="/login" className="mobile-link">
            Login
          </NavLink>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      sx={{ backgroundColor: "black" }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CloseIcon
          onClick={handleMobileMenuClose}
          sx={{ marginRight: "5px" }}
        />
      </div>
      {/*===> here is my items */}
      <MenuItem className="menuitem">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <HomeIcon />
        </IconButton>
        <NavLink to="/" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Главная</p>
        </NavLink>
      </MenuItem>
      <MenuItem className="menuitem">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <SettingsIcon />
        </IconButton>
        <NavLink to="/instructions" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Инструкция</p>
        </NavLink>
      </MenuItem>
      <MenuItem className="menuitem">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <ContactPhoneIcon />
        </IconButton>
        <NavLink to="/contacts" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Контакты</p>
        </NavLink>
      </MenuItem>
      <MenuItem className="menuitem">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <LocalHospitalIcon />
        </IconButton>
        <NavLink to="/doctors" className="mobile-link">
          <p onClick={handleMobileMenuClose}>Врачи</p>
        </NavLink>
      </MenuItem>
      {currentUser?.isAdmin && (
        <MenuItem className="menuitem">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <AdminPanelSettingsIcon />
          </IconButton>
          <NavLink to="/admin" className="mobile-link">
            <p onClick={handleMobileMenuClose}>Admin</p>
          </NavLink>
        </MenuItem>
      )}
      {currentUser.isLogged && (
        <MenuItem className="menuitem">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <LogoutIcon />
          </IconButton>
          <NavLink to="" className="mobile-link">
            <p
              onClick={() => {
                handleMobileMenuClose();
                logOutUser();
              }}
            >
              Log out
            </p>
          </NavLink>
        </MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem className="menuitem">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <HowToRegIcon />
          </IconButton>
          <NavLink to="/register" className="mobile-link">
            <p
              onClick={() => {
                handleMobileMenuClose();
              }}
            >
              Register
            </p>
          </NavLink>
        </MenuItem>
      )}

      {currentUser?.isLogged && (
        <MenuItem className="menuitem" onClick={handleMenuClose}>
          <NavLink to="/register" className="mobile-link">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                color: "black",
              }}
            >
              <AccountCircle sx={{ marginRight: "10px" }} />
              {currentUser.user}
            </div>
          </NavLink>
        </MenuItem>
      )}
      {!currentUser?.isLogged && (
        <MenuItem className="menuitem">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <LoginIcon />
          </IconButton>
          <NavLink to="/login" className="mobile-link">
            <p
              onClick={() => {
                handleMobileMenuClose();
              }}
            >
              Login
            </p>
          </NavLink>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AppBar position="static" className="navbar-container">
        <Toolbar>
          <Box sx={{ width: "40px" }} />
          <img
            width="40px"
            src="https://www.pngkey.com/png/full/33-337638_medicine-logo-png-1-medical-logo.png"
            alt=""
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              className="btn"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/"
            >
              ГЛАВНАЯ
            </Button>
            <Button
              className="btn"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/instructions"
            >
              ИНСТРУКЦИЯ
            </Button>
            <Button
              className="btn"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/contacts"
            >
              КОНТАКТЫ
            </Button>
            <Button
              className="btn"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/doctors"
            >
              ВРАЧИ
            </Button>
            {currentUser?.isAdmin && (
              <Button
                className="btn"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "16px",
                  color: "#e1bee7",
                }}
                component={NavLink}
                to="/admin  "
              >
                ADMIN
              </Button>
            )}
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {currentUser.isAdmin ? (
                <AdminPanelSettingsIcon style={{ color: "yellow" }} />
              ) : !currentUser.isLogged ? (
                <NoAccountsIcon style={{ color: "yellow" }} />
              ) : (
                <AccountCircle style={{ color: "yellow" }} />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu};
    </Box>
  );
}
