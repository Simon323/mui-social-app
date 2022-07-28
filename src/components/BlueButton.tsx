import { Button, styled } from "@mui/material";

const BlueButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#aa92FF",
  margin: 5,
  "&:hover": {
    backgroundColor: "yellow",
  },
}));

export default BlueButton;
