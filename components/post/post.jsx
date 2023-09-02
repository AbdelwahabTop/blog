"use client";
import img from "../../images/img/img.png";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { styled } from "@mui/material";

export default function Post({ body, title }) {
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

//   console.log(body, title);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "476px",
        width: "384px",
      }}>
      <Image src={img} alt="" style={{ width: "384px", height: "240px" }} />
      <Typography
        sx={{
          //   mt: "12px",
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
          //   mt: "12px",
        }}>
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          {title}
        </Typography>
        <ArrowOutwardIcon />
      </Box>
      <Typography
        sx={{
          color: "#21D188",
          fontSize: "14px",
          fontWeight: "600",
          //   mt: "12px",
        }}>
        J. K. Rowling
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: "12px" }}>
        {body}
      </Typography>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Tap>Design</Tap>
        <Tap>Design</Tap>
        <Tap>Design</Tap>
      </Box>
    </Box>
  );
}
