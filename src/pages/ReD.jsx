import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import DataGridBox from "../components/DataGridBox";
import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@emotion/react";
import { tokens } from "../styles/Themes";
import SaveIcon from "@mui/icons-material/Save";

const ReD = () => {
  const [loading, setLoading] = useState();
  const [calculatorResult, setCalculatorResult] = useState();

  const [costOfCapital, setCostOfCapital] = useState();
  const [sameAmortAmountForAllRef, setSameAmortAmountForAllRef] = useState(); //check if this will be exactly the name
  const [volumeAmortPercentage, setVolumePercentage] = useState();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const getKeys = async () => {
      setLoading(true);
      await fetch(
        "http://localhost:8080/keys/getByKeys?keys=sameAmortAmountForAllRef&keys=costOfcapital&keys=volumeAdjInPercentage",
        {
          method: "GET",
        }
      ).then(async (res) => {
        const data = await res.json();

        setCostOfCapital(
          data.find((item) => item.key === "costOfcapital").value * 100
        );

        setVolumePercentage(
          data.find((item) => item.key === "volumeAdjInPercentage").value * 100
        );
        setSameAmortAmountForAllRef(
          data.find((item) => item.key === "sameAmortAmountForAll").value
        );
      });
    };

    const getCalculatorResult = async () => {
      setLoading(true);
      await fetch("http://localhost:8080/calculate/calculateProjects", {
        method: "GET",
      }).then(async (res) => {
        const responseBody = await res.json();
        console.log(responseBody);
        setCalculatorResult(responseBody);
      });
      setLoading(false);
    };

    getKeys();
    getCalculatorResult();
  }, []);

  const columns = [
    {
      field: "projectName",
      headerName: "Nome",
      editable: false,
      flex: 1,
    },
    {
      field: "adjustedVolumeAmort",
      headerName: "adjustedVolumeAmort",
      editable: false,
      flex: 1,
    },
    {
      field: "amortToBeFinancedInKBRL",
      headerName: "amortToBeFinancedInKBRL",
      editable: false,
      flex: 1,
    },
    {
      field: "avgAnnualVolume",
      headerName: "avgAnnualVolume",
      editable: false,
      flex: 1,
    },
    {
      field: "costOfCapital",
      headerName: "costOfCapital",
      editable: false,
      flex: 1,
    },
    {
      field: "financeCharges",
      headerName: "financeCharges",
      editable: false,
      flex: 1,
    },
    {
      field: "months",
      headerName: "months",
      editable: false,
      flex: 1,
    },
    {
      field: "numberofyears",
      headerName: "numberofyears",
      editable: false,
      flex: 1,
    },
    {
      field: "unitsforAmort",
      headerName: "unitsforAmort",
      editable: false,
      flex: 1,
    },
    {
      field: "amortizationPiecePrice",
      headerName: "amortizationPiecePrice",
      editable: false,
      flex: 1,
    },
  ];

  function generateRandom() {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  const pinnedRows = {
    bottom: [{ projectName: "Total" }],
  };

  return (
    <Box className="container mx-auto  mt-5 flex flex-col  ">
      <Header
        titleVariant="h1"
        subTitleVariant="h3"
        title="R&D"
        subtitle="Planilha de Gestão de Projetos: Alocação de Recursos e Cálculo de Receitas"
      />
      <Box
        sx={{
          border: `2px solid ${colors.darkGreen[300]}`,
        }}
        className="flex mb-4 justify-evenly gap-10 rounded-full pl-5"
      >
        <TextField
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
          value={volumeAmortPercentage}
          className="w-full !border-none"
          variant="standard"
          type="number"
          label="	Volume Adj for R&D in %"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
        <TextField
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
          value={costOfCapital}
          className="w-full !border-none"
          variant="standard"
          type="number"
          label="Cost of capital"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
        <FormControlLabel
          className="flex flex-nowrap w-full "
          control={<Checkbox />}
          label="Same amort. amount for all ref?"
        />
        <Button
          className="rounded-full  "
          sx={{
            backgroundColor: colors.greenAccent[400],
            borderRadius: 1000,
          }}
          variant="oulined"
        >
          <SaveIcon />
        </Button>
      </Box>

      {!loading && calculatorResult != null && (
        <DataGridBox>
          <DataGrid
            className="w-full "
            editMode="row"
            pinnedRows={pinnedRows}
            getRowId={(row) => generateRandom()}
            initialState={{
              sorting: {
                sortModel: [{ field: "name", sort: "asc" }],
              },
            }}
            localeText={{
              toolbarDensity: "Densidade da tabela",
              toolbarExport: "Exportar",
              toolbarExportCSV: "Baixar como CSV",
              toolbarExportPrint: "Imprimir",
              toolbarDensityCompact: "Compacto",
              toolbarDensityStandard: "Padrão",
              toolbarDensityComfortable: "Confortável",
            }}
            loading={loading}
            rows={calculatorResult}
            columns={columns}
            getRowClassName={(params) => {
              if (params.row.projectName === "Total") {
                return "total-row";
              }
            }}
          />
        </DataGridBox>
      )}
    </Box>
  );
};

export default ReD;
