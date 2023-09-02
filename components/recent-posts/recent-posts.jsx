"use client";
import Grid from "@mui/material/Grid";
import Post from "../post/post";
import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { styled } from "@mui/material";

import Imgage from "../../images/img/Image.png";
import Image1 from "../../images/img/Image1.png";
import Image2 from "../../images/img/Image2.png";
import Image3 from "../../images/img/Image3.png";
import Image from "next/image";

export default function RecentPosts() {
  const Tap = styled(Typography)({
    display: "flex",
    padding: "2px 10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    background: "#F9F5FF",
    color: "#6941C6",
    textAlign: "center",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    width: "70px",
  });

  return (
    <Box sx={{ mt: "50px" }}>
      <Typography variant="h6" sx={{ fontWeight: 500 }}>
        Recent blog posts
      </Typography>

      <Grid container sx={{ mt: "50px" }}>
        <Grid item xl={6}>
          <Box maxWidth="592px">
            <Image src={Imgage} alt="" />
            <Typography
              sx={{
                mt: "12px",
                color: "#6941C6",
                fontSize: "14px",
                fontWeight: "600",
              }}>
              Olivia Rhye • 1 Jan 2023
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "12px",
              }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                UX review presentations
              </Typography>
              <ArrowOutwardIcon />
            </Box>
            <Typography
              sx={{
                color: "#21D188",
                fontSize: "14px",
                fontWeight: "600",
                mt: "12px",
              }}>
              J. K. Rowling
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: "12px" }}>
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", mt: "28px" }}>
              <Tap>Design</Tap>
              <Tap>Design</Tap>
              <Tap>Design</Tap>
            </Box>
          </Box>
        </Grid>

        <Grid container item xl={6}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xl={6}>
              <Image src={Image1} alt="" />
            </Grid>
            <Grid xl={6}>
              <Typography
                sx={{
                  color: "#6941C6",
                  fontSize: "14px",
                  fontWeight: "600",
                }}>
                Olivia Rhye • 1 Jan 2023
              </Typography>

              <Typography
                sx={{ fontSize: "24px", fontWeight: "600", mt: "10px" }}>
                UX review presentations
              </Typography>
              <Typography
                sx={{
                  color: "#21D188",
                  fontSize: "14px",
                  fontWeight: "600",
                  mt: "10px",
                }}>
                J. K. Rowling
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: "10px" }}>
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </Typography>
              <Box sx={{ display: "flex", gap: "10px", mt: "25px" }}>
                <Tap>Design</Tap>
                <Tap>Design</Tap>
                <Tap>Design</Tap>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ mt: "60px" }}>
            <Grid xl={6}>
              <Image src={Image1} alt="" />
            </Grid>
            <Grid xl={6}>
              <Typography
                sx={{
                  color: "#6941C6",
                  fontSize: "14px",
                  fontWeight: "600",
                }}>
                Olivia Rhye • 1 Jan 2023
              </Typography>

              <Typography
                sx={{ fontSize: "24px", fontWeight: "600", mt: "10px" }}>
                UX review presentations
              </Typography>
              <Typography
                sx={{
                  color: "#21D188",
                  fontSize: "14px",
                  fontWeight: "600",
                  mt: "10px",
                }}>
                J. K. Rowling
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: "10px" }}>
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </Typography>
              <Box sx={{ display: "flex", gap: "10px", mt: "25px" }}>
                <Tap>Design</Tap>
                <Tap>Design</Tap>
                <Tap>Design</Tap>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xl={12} sx={{ mt: "50px" }}>
          <Grid
            container
            sx={{ mt: "30px" }}>
            <Grid xl={6}>
              <Image src={Image3} alt="" />
            </Grid>
            <Grid xl={6}>
              <Typography
                sx={{
                  color: "#6941C6",
                  fontSize: "14px",
                  fontWeight: "600",
                }}>
                Olivia Rhye • 1 Jan 2023
              </Typography>

              <Typography
                sx={{ fontSize: "24px", fontWeight: "600", mt: "10px" }}>
                UX review presentations
              </Typography>
              <Typography
                sx={{
                  color: "#21D188",
                  fontSize: "14px",
                  fontWeight: "600",
                  mt: "10px",
                }}>
                J. K. Rowling
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: "10px" }}>
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </Typography>
              <Box sx={{ display: "flex", gap: "10px", mt: "25px" }}>
                <Tap>Design</Tap>
                <Tap>Design</Tap>
                <Tap>Design</Tap>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
