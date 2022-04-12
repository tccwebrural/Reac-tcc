import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import "./EditAnimalData.css";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EditAnimalData = (): ReactElement => {
  const salvarDadosAnimal = (e: any) => {
    alert("Dados Atualizados com Sucesso");
  };
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "block",
          justifyContent: "center",
        }}
      >
        <div id="Bloco">
        <div id="EditAnimalDataTxt_Linha">
          <h2 id="EditAnimalData-titulo">Minha Criação &gt; Atualizar Gado</h2>
          <span id="EditAnimalData-linha"></span>
        </div>

        <form id="form-AtualizarDadosAnimal">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            // noValidate
            // autoComplete="off"
          >
            <div id="Bloco-camposEditAnimalData">

              <FormControl sx={{ m: 1, minWidth: 221 }}>
              <InputLabel htmlFor="grouped-select">Categoria</InputLabel>
              <Select
                label="Grouping"
                name="category"
                
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
                style={{ width: 250 }}
                label="Identificador"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                style={{ width: 300 }}
                id="outlined-disabled"
                label="Nome"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                style={{ width: 280 }}
                label="Data de Nascimento"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
             
              <FormControl sx={{ m: 1, minWidth: 231 }}>
              <InputLabel htmlFor="type">Tipo</InputLabel>
              <Select
                label="Grouping"
                name="type" 
              >
                <MenuItem value={1}>Gado de Corte</MenuItem>
                <MenuItem value={2}>Gado Leitero</MenuItem>
              </Select>
            </FormControl>

               <TextField
                id="outlined-password-input"
                style={{ width: 260 }}
                label="Peso"
                type="password"
                InputLabelProps={{
                  shrink: true,
                }}
              />
{/*               
              <TextField
                id="outlined-helperText"
                style={{ width: 270 }}
                label="Qtd de Cria"
                InputLabelProps={{
                  shrink: true,
                }}
              /> */}
            
            <div id="bts-AtualizarDadosAnimal">
              <Grid item xs={2} sx={{ margin: 1 }}>
              <Button
                      style={{marginRight: 4}}
                      variant="contained"
                      color="error"
                      component={Link}
                      to="animals/list"
                    >
                      Cancelar
                    </Button>

                    <Button
                      variant="contained"
                      color="success"
                      onClick={salvarDadosAnimal}
                    >
                      Atualizar
                    </Button>
              </Grid>
            </div>
            </div>
          </Box>
        </form>
        </div>
      </Box>
    </>
  );
};

export default EditAnimalData;
