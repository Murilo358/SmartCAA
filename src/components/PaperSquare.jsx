import { Paper, Typography, useTheme } from "@mui/material";
import { tokens } from "../styles/Themes";

const PaperSquare = ({ title, sector, paperWidth, paperHeight }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Paper
      sx={{
        width: paperWidth,
        height: paperHeight,
      }}
      className="w-full h-full p-5   "
      elevation={3}
    >
      <Typography variant="h2">Título: {title}</Typography>
      <Typography variant="h3">Setor: {sector}</Typography>
    </Paper>
  );
};

export default PaperSquare;
