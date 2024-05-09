import React from "react";
import Header from "../components/Header/Header";
import { Box } from "@mui/material";

const ReD = () => {
  return (
    <Box className="container mx-auto p-5 mt-5 flex flex-col   ">
      <Header
        titleVariant="h1"
        subTitleVariant="h3"
        title="R&D"
        subtitle="Planilha de Gestão de Projetos: Alocação de Recursos e Cálculo de Receitas"
      />
    </Box>
  );
};

export default ReD;
