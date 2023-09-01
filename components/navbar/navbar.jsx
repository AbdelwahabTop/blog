"use client";

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
import { Grid } from "@mui/material";
import Sun from "../../images/icons/sun";
import Moon from "../../images/icons/moon";

const pages = ["Blog", "Projects", "About", "Newsletter"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
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
    // <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid md={3} lg={4} xl={7} style={{ color: "black" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                mt: 1,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              Abdelwahab
            </Typography>
          </Grid>

          <Grid md={9} lg={8} xl={5} style={{ height: "48px" }}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 1,
                    color: "black",
                    display: "block",
                    height: "24px",
                  }}>
                  {page}
                </Button>
              ))}
              <Button
                variant="text"
                sx={{
                  backgroundColor: "#7F56D9",
                  color: "white",
                  // padding: "8px 16px",
                  ml: "10px",
                  my: 0.7,
                  flexGrow: 1,
                  // width: "105px",
                }}>
                New Blog
              </Button>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignContent: "center",
                  alignItems: "center",
                  // width: "120px",
                  borderRadius: "30px",
                  overflow: "hidden",
                  backgroundColor: "black",
                  padding: "5px 10px",
                  height: "fit-content",
                  marginLeft: "20px",
                  marginTop: 3,
                }}>
                <Sun style={{ width: "10px", height: "10px", flexGrow: 1 }} />
                <Moon style={{ width: "10px", height: "10px", flexGrow: 1 }} />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    // </AppBar>
  );
}
export default ResponsiveAppBar;
