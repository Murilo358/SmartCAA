import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { colorModeContext, tokens } from "../styles/Themes";

import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Logo from "/logo.svg";
import { useContext } from "react";
import { useState } from "react";
import { Image } from "@mui/icons-material";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colorModeContext);

  const [openedMenu, setOpenedMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenedMenu(!openedMenu);
  };

  return (
    <Box className="flex justify-between p-2 shadow-md w-full">
      <Box>
        <img width="50px" height="30px" alt="Valeo-Logo" src="Valeo-logo.svg" />
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode == "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>

        <>
          <IconButton onClick={() => handleMenuClick()}>
            <PersonOutlinedIcon />
          </IconButton>
          {openedMenu && (
            <Box
              backgroundColor={colors.greenAccent[700]}
              className="absolute z-20 top-14 right-1  w-[150px] shadow-md flex flex-col justify-center items-center rounded-lg"
            >
              <Button
                className="w-full h-full"
                onClick={() => console.log("Hello world")}
                variant="outlined"
              >
                <Typography color={colors.whiteAccent[100]}>Logout</Typography>
              </Button>
            </Box>
          )}
        </>
      </Box>
    </Box>
  );
};

export default Topbar;
