"use client";

import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Post from "../post/post";
import AppPagination from "../pagination/pagination";

export default function Posts({ data }) {
  const [products, setProducts] = useState(data);

  return (
    <Box sx={{ mt: "70px" }}>
      <Typography variant="h6" sx={{ fontWeight: 500 }}>
        All blog posts
      </Typography>

      <Grid container sx={{ mt: "50px" }} spacing={3}>
        {products.slice(0, 6).map((post) => (
          <Grid item lg={4} key={post.id}>
            <Post body={post.body} title={post.title} />
          </Grid>
        ))}
      </Grid>

      <AppPagination data={data} setProducts={setProducts} />
    </Box>
  );
}
