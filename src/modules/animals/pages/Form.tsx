import React, { ReactElement } from "react";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./Form.css";
import { Link } from "react-router-dom";
import { AnimalService } from "../services/Animals.service";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Animal } from "../models/Animal.model";
import { checkServerIdentity } from "tls";
import bezerro from "../../../images/bezerro.png";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: "auto",
  marginTop: 32,
  maxWidth: 928,
  height: 390,
  borderTop: 2,
}));

interface SnackBarProps {
  message?: string;
  show: boolean;
  severity?: "success" | "error";
}
const FormAnimalPage = (): ReactElement => {
  const [dataForm, setDataForm] = useState<Animal>({});

  const [snackbar, setSnackbar] = useState<SnackBarProps>({ show: false });

  const animalService = new AnimalService();

  const onChangeDataForm = (event: any) => {
    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value });

    //  animalService.createAnimal(dataForm.id)
    // animalService.createAnimal(dataForm, '5ab6e784-ef43-4b67-b2b2-09745272319a')
  };
  const salvarDadosAnimal = () => {
    animalService
      .createAnimal(dataForm, "363dcf73-3155-4a3c-a69a-385fbd9b643f")
      .then(() => {
        setSnackbar({
          show: true,
          severity: "success",
          message: "Animal cadastro com sucesso!",
        });
      })
      .catch(() => {
        setSnackbar({
          show: true,
          severity: "error",
          message: "Falha ao cadastrar o animal, tente novamente mais tarde!",
        });
      });

    console.log(dataForm);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason !== "clickaway") {
      setSnackbar({ show: false });
    }
  };

  const showQtyChildreen = () => {
    if (dataForm.category === 1) {
      return (
        <>
          <TextField
            label="Quantidade de Cria"
            type="number"
            name="qtyChildreen"
            InputLabelProps={{
              shrink: true,
            }}
            value={dataForm.qtyChildreen}
            onChange={onChangeDataForm}
            // name= 'showQtyChildreen'
          />
        </>
      );
    }
  };
  const showQtyMilk = () => {
    if (dataForm.category === 1 && dataForm.type === 2) {
      return (
        <>
        
          {/* <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel htmlFor="qtyMilk">Qtd de Leite por dia</InputLabel>
            <Select
              name="qtyMilk"
              label="Grouping"
              onChange={onChangeDataForm}
              value={dataForm.qtyMilk}
            >
              <MenuItem value={1}>1 Litro</MenuItem>
              <MenuItem value={2}>2 Litros</MenuItem>
              <MenuItem value={3}>3 Litros</MenuItem>
              <MenuItem value={4}>4 Litros</MenuItem>
              <MenuItem value={5}>5 Litros</MenuItem>
              <MenuItem value={6}>6 Litros</MenuItem>
              <MenuItem value={7}>7 Litros</MenuItem>
              <MenuItem value={8}>8 Litros</MenuItem>
              <MenuItem value={9}>9 Litros</MenuItem>
              <MenuItem value={10}>10 Litros</MenuItem>
              <MenuItem value={11}>À cima de 10 Litros</MenuItem>
            </Select>
          </FormControl> */}
        </>
      );
    }
  };
  return (
    <>
    <div id="Bloco">
        <div id="FormTxt_Linha">
            <h2 id="Form-titulo">Minha Criação &gt; Cadastrar Gado</h2>
            <span id="Form-linha">
            </span>
        </div>
      <Box sx={{ "& .MuiTextField-root": { m: 1, width: "33ch" } }}>
        <Grid>
          <Item id="formCadAnimal">

            <FormControl sx={{ m: 1, minWidth: 221 }}>
              <InputLabel htmlFor="grouped-select">Categoria</InputLabel>
              <Select
                label="Grouping"
                name="category"
                value={dataForm.category}
                onChange={onChangeDataForm}
              >
                <MenuItem value={1}>Vaca</MenuItem>
                <MenuItem value={2}>Boi</MenuItem>
                <MenuItem value={3}>Bezerra</MenuItem>
                <MenuItem value={4}>Bezerro</MenuItem>
                <MenuItem value={5}>Novilha</MenuItem>
                <MenuItem value={6}>Novilho</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Identificador"
              type="number"
              name="identifier"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChangeDataForm}
              // name= 'identifier'

              // value={dataForm.identifier}
            />

            <TextField
              label="Nome"
              type="text"
              name="name"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChangeDataForm}
              value={dataForm.name}
            />

            <TextField
              label="Data de Nascimento"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              name="birthday"
              onChange={onChangeDataForm}
              value={dataForm.birthday}
            />
            <FormControl sx={{ m: 1, minWidth: 221 }}>
              <InputLabel htmlFor="type">Tipo</InputLabel>
              <Select
                label="Grouping"
                name="type"
                value={dataForm.type}
                onChange={onChangeDataForm}
              >
                <MenuItem value={1}>Gado de Corte</MenuItem>
                <MenuItem value={2}>Gado Leitero</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Peso Aproximadamente"
              name="weight"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChangeDataForm}
              // value={dataForm.weight}
              value={dataForm.weight}
            />
            {showQtyChildreen()}
            {showQtyMilk()}

            <Stack direction="row" spacing={2}>
              <Grid container justifyContent="flex-end">
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ marginRight:7.5 }}
                >
                  <div id="bloco-imgBezerro-Form">
                    <img id="imgBezerro-Form" src={bezerro} alt="bezerro"/>
                  </div>
                  <div id="bts-CadastrarAnimal-CancelSave">
                    <Button
                      style={{marginRight: 4,paddingTop:2.5,paddingBottom:2.5,paddingLeft:13, paddingRight:13}}
                      variant="contained"
                      color="error"
                      component={Link}
                      to="/animals/list"
                    >
                      Cancelar
                    </Button>

                    <Button
                      variant="contained"
                      color="success"
                      onClick={salvarDadosAnimal}
                    >
                      Salvar
                    </Button>
                  </div>
                  <Snackbar
                    open={snackbar.show}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity={snackbar.severity}>
                      {snackbar.message}
                    </Alert>
                  </Snackbar>
                </Stack>
              </Grid>
            </Stack>
          </Item>
        </Grid>
      </Box>
      </div>
    </>
  );
};

export default FormAnimalPage;
