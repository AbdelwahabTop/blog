"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/navbar/navbar";
import RecentPosts from "../components/recent-posts/recent-posts";
import Posts from "../components/posts/posts";
import Footer from "../components/footer/footer";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";

export default function HomePage() {
  async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  console.log(data);

  if (isLoading) return <CircularProgress disableShrink />;

  return (
    <Box>
      <Typography
        variant="h1"
        align="center"
        sx={{
          flexGrow: 1,
          fontWeight: "700",
          fontSize: {
            xl: "172px",
            lg: "170px",
            md: "150px",
            sm: "80px",
            xs: "70px",
          },
          fontStyle: "normal",
          lineHeight: "normal",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          mt: "50px",
        }}>
        THE BLOG
      </Typography>

      <RecentPosts />

      <Posts data={data} />
    </Box>
  );
}
