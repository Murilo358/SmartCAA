import { useTheme } from "@emotion/react";
import React from "react";
import { tokens } from "../styles/Themes";
import { Box } from "@mui/material";

const DataGridBox = ({ children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        "& .css-1mx81p6-MuiDataGrid-root .MuiDataGrid-row--editing .MuiDataGrid-cell":
          {
            backgroundColor: colors.background[300],
          },
        "& .css-1mx81p6-MuiDataGrid-root .MuiDataGrid-cell.MuiDataGrid-cell--editing":
          {
            backgroundColor: colors.background[400],
          },

        "& .MuiDataGrid-root": {
          border: "none",
          fontSize: "17px",
        },
        "& .MuiDataGrid-columnHeaderTitleContainer": {},

        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.background[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.background[800],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.greenAccent[300],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.background[800],
        },
        "& .total-row": {
          borderTop: "none",
          backgroundColor: colors.greenAccent[900],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.background[200]} !important`,
        },
      }}
      style={{ width: "100%" }}
      className=" flex items-center flex-col justify-center "
    >
      {children}
    </Box>
  );
};

export default DataGridBox;
