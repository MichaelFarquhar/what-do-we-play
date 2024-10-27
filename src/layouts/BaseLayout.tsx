import { Box } from "@mui/material";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
