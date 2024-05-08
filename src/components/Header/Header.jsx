import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../styles/Themes";

const Header = ({
  title,
  subtitle,
  margin = "20px",
  titleVariant = "h2",
  subTitleVariant = "h4",
}) => {
  Header.propTypes = {
    title: String,
    subtitle: String,
    margin: String,
    titleVariant: String,
    subTitleVariant: String,
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={margin}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box mb="30px">
          <Typography
            variant={titleVariant}
            color={colors.primary[100]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            {title}
          </Typography>
          <Typography variant={subTitleVariant} color={colors.primary[100]}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
