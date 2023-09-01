import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/navbar/navbar";
import RecentPosts from "../components/recent-posts/recent-posts";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <Grid container>
      <Grid item xs={12} md={12} xl={12}>
        <Navbar />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        style={{
          color: "#1A1A1A",
          fontSize: "72px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          alignItems: "center",
          margin: "0 auto",
          placeItems: "center",
          textAlign: "center",
          marginTop: "20px",
          borderTop: "1px solid #1A1A1A",
          borderBottom: "1px solid #1A1A1A",
          flexGrow: 1,
        }}>
        THE BLOG
      </Grid>
      <Grid item xs={12} md={12} xl={12}>
        <RecentPosts />  
      </Grid>
    </Grid>
  );
}
