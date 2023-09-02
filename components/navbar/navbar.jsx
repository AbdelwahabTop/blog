"use client";

import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";
import Sun from "../../images/icons/sun";
import Moon from "../../images/icons/moon";
import { styled } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material/";

const pages = [
  { Name: "Blog", Link: "/" },
  { Name: "Projects", Link: "#" },
  { Name: "About", Link: "#" },
  { Name: "Newsletter", Link: "#" },
];

function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 20,
    mt: 20,
  });

  const [open, SetOpen] = useState(false);

  return (
    <>
      <StyledToolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            fontSize: { xl: "25px", lg: "25px", md: "25px", sm: "18px" },
          }}>
          Abdelwahab
        </Typography>
        <MenuBox sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
          {pages.map((item) => (
            <Typography
              key={item.Name}
              component="a"
              href="/"
              sx={{
                cursor: "pointer",
                fontSize: { lg: "15px", md: "13px", sm: "10px" },
                display: { xs: "none", sm: "flex", md: "flex" },
                fontWeight: 600,
                mt: { xl: 0.8, lg: 0.8, md: 1, sm: 1.5 },
              }}>
              {item.Name}
            </Typography>
          ))}

          <Button
            component={Link}
            href="/form"
            variant="text"
            sx={{
              backgroundColor: "#7F56D9",
              color: "white",
              fontSize: { md: "12px", sm: "10px" },
              width: "fit-content",
            }}>
            New Blog
          </Button>

          <div
            style={{
              display: "flex",
              gap: "8px",
              alignContent: "center",
              alignItems: "center",
              borderRadius: "30px",
              overflow: "hidden",
              backgroundColor: "black",
              padding: "5px 10px",
              height: "fit-content",
            }}>
            <Sun style={{ width: "5px", height: "5px" }} />
            <Moon style={{ width: "5px", height: "5px" }} />
          </div>
        </MenuBox>

        <MenuIcon
          sx={{
            color: "black",
            display: { xs: "block", sm: "none", md: "none" },
          }}
          onClick={() => SetOpen(!open)}
        />
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => SetOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}>
        <Box sx={{ width: 350, height: "25vh", scrollBehavior: "none" }}>
          {pages.map((item) => (
            <MenuItem
              key={item.Name}
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}>
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </>
  );
}
export default Navbar;
