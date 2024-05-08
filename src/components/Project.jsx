import React from "react";
import PaperSquare from "./PaperSquare";
import { Box } from "@mui/material";

const Project = () => {
  return (
    <Box className="p-10 grid grid-cols-6 gap-2">
      {" "}
      <PaperSquare
        title="D&d"
        sector="Contabilidade"
        paperWidth={250}
        paperHeight={250}
      />
      <PaperSquare
        title="Dha"
        sector="Contabilidade"
        paperWidth={250}
        paperHeight={250}
      />
      <PaperSquare
        title="asd"
        sector="Contabilidade"
        paperWidth={250}
        paperHeight={250}
      />
      <PaperSquare
        title="asd"
        sector="Contabilidade"
        paperWidth={250}
        paperHeight={250}
      />
      <PaperSquare
        title="asd"
        sector="Contabilidade"
        paperWidth={250}
        paperHeight={250}
      />
      <PaperSquare
        title="asd"
        sector="Contabilidade"
        paperWidth={250}
        paperHeight={250}
      />
      <PaperSquare
        title="asd"
        sector="Contabilidade"
        paperWidth={250}
        paperHeight={250}
      />
    </Box>
  );
};

export default Project;
