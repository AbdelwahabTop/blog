import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

export default function Footer() {
  const Text = styled(Typography)({
    color: "#1A1A1A",
    textAlign: "center",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        mt: "30px",
        gap: "10px",
      }}>
      <Text>@ 2023</Text>
      <Text>Twitter</Text>
      <Text>LinkedIn</Text>
      <Text>Email</Text>
      <Text>RSS feed</Text>
      <Text>Add to Feedly</Text>
    </Box>
  );
}
