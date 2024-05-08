import { Card, Paper, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import { tokens } from "../styles/Themes";
import Header from "./Header/Header";
import FolderIcon from "@mui/icons-material/Folder";

const PaperSquare = ({ title, subtitle }) => {
  PaperSquare.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    paperWidth: PropTypes.number,
    paperHeight: PropTypes.number,
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Card
      className="w-full h-full p-5 !rounded-none "
      variant="outlined"
      sx={{
        p: 2,
        width: { xs: "100%", sm: "auto" },
        alignItems: "center",
        gap: 2,
        background: colors.background[200],
      }}
    >
      <FolderIcon sx={{ fontSize: "50px" }} fontSize="inherit" />
      <Header
        titleVariant="h3"
        subTitleVariant="h4"
        title={title}
        subtitle={subtitle}
        margin="0px"
      />
    </Card>
  );
};

export default PaperSquare;
