import React, { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import "./CadastroVacina.css";
import {MdCoronavirus} from "react-icons/md";
import {GiLoveInjection} from "react-icons/gi";
import Checkbox from "@mui/material/Checkbox";

import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const label = { inputProps: { "aria-label": "" } };

const CadastroVacina = (): ReactElement => {

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div id="Bloco">
          <div id="CadastroVacinaTxt_Linha">
            <h2 id="CadastroVacina-titulo">Minha Criação &gt; Visualizar Gado &gt; Adicionar Vacina</h2>
            <span id="CadastroVacina-linha"></span>
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

        
            <TextField
                style={{ width: 180 }}
                id="outlined-disabled"
                label="Nome"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                style={{ width: 100 }}
                label="Lote"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                style={{ width: 160 }}
                label="Fabricante"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                style={{ width: 180 }}
                label="Data de Aplicação"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
                <TextField
                id="outlined-number"
                style={{ width: 180 }}
                label="Validade da Vacina"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            <div id="VacinaIcones">
                <fieldset id="FieldVacina">
                
                    <GiLoveInjection size={70} style={{marginTop:14, marginLeft:35}}/>
                    <p id="VacinaIcon-Virus">Vacina</p>
                        <Checkbox
                        {...label}
                        defaultChecked
                        sx={ { fontSize: 28 , marginLeft:6.5, marginTop:-1} }
                  />
                 
                </fieldset>

                <fieldset id="FieldVirus">
                    <MdCoronavirus size={80} style={{marginTop:5, marginLeft:35}}/>
                    
                    <p id="VacinaIcon-Virus">Vírus</p>
                        <Checkbox
                        {...label}
                        sx={ { fontSize: 28 , marginLeft:6.5, marginTop:-1}}
                  />
                </fieldset>
            </div>

            
            <div id="bts-AdcVacina-CancelAdd">
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
                    >
                      Adicionar
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

export default CadastroVacina;
