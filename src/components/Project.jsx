import React from "react";
import PaperSquare from "./PaperSquare";
import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Header from "./Header/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../styles/Themes";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "R&D",
    link: "/ReD",
    subtitle:
      "Planilha de Gestão de Projetos: Alocação de Recursos e Cálculo de Receitas",
  },
  {
    title: "InvestSite",
    subtitle: "Planilha de...",
    link: "/ReD",
  },
  {
    title: "Outra planilha... ",
    link: "/ReD",
    subtitle: "Planilha de...",
  },
  {
    title: "Outra planilha...",
    link: "/ReD",
    subtitle: "Planilha de...",
  },
  {
    title: "Outra planilha...",
    link: "/ReD",
    subtitle: "Planilha de...",
  },
  {
    title: "Outra planilha...",
    link: "/ReD",
    subtitle: "Planilha de...",
  },
  {
    title: "Outra planilha...",
    link: "/ReD",
    subtitle: "Planilha de...",
  },
  {
    title: "Outra planilha...",
    link: "/ReD",
    subtitle: "Planilha de...",
  },
];

const Project = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Box className="container mx-auto p-5 mt-5 flex flex-col items-center  ">
        <Box className="flex text-center">
          <Header
            titleVariant="h1"
            subTitleVariant="h3"
            title="Projetos"
            subtitle="Visualize seus projetos"
          />
        </Box>{" "}
        <Box
          sx={{
            border: `2px solid ${colors.darkGreen[300]}`,
          }}
          className="flex mb-10 w-[80%]  rounded-full"
        >
          <TextField
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              fontSize: 50,
              "& .MuiInput-root": {
                fontWeight: "bold",
                fontSize: "22px",
                marginLeft: "10px",
                color: colors.primary[100],
                border: "none",
                padding: "2px",
              },
            }}
            className="w-full !border-none"
            variant="standard"
            placeholder="Pesquisar..."
          />
          <Button
            className="rounded-full"
            sx={{
              backgroundColor: colors.greenAccent[400],
              borderRadius: 1000,
            }}
            variant="oulined"
            startIcon={<SearchIcon />}
          />
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 3, sm: 8, md: 4, lg: 8, xl: 12 }}
        >
          {projects.length > 0
            ? projects.map((item) => (
                <Grid key={item} item xs={2} sm={4} lg={3} md={2} xl={3}>
                  {" "}
                  <Link to={item.link}>
                    <PaperSquare title={item.title} subtitle={item.subtitle} />{" "}
                  </Link>
                </Grid>
              ))
            : ""}
        </Grid>
      </Box>
    </Box>
  );
};

export default Project;
