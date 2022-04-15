import React, { ReactElement } from "react";
import "./CadastroVacina.css";
import "../../../src/style.css";
import { Box } from "@mui/material";
import { MdCoronavirus } from "react-icons/md";
import { GiLoveInjection } from "react-icons/gi";
import Checkbox from "@mui/material/Checkbox";
import bezerro from "../../images/bezerro.png";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

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
        <div className="MainBlock">
          <div className="Block-Txt-Line">
            <h2 className="Block-Txt">
              Minha Criação &gt; Visualizar Gado &gt; Adicionar Vacina
            </h2>
            <span className="Block-Line"></span>
          </div>

          <div className="Block-AnimalData">
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
            >
             
                <TextField
                  style={{ width: 180 }}
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
                  style={{ width: 180 }}
                  label="Data de Aplicação"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  style={{ width: 180 }}
                  label="Validade da Vacina"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <div id="Block-VaccineIcons">
                  <fieldset id="FieldVaccineIcons">
                    <GiLoveInjection
                      size={70}
                      style={{ marginTop: 14, marginLeft: 35 }}
                    />
                    <p id="VacinaIcon-Txt">Vacina</p>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{ fontSize: 28, marginLeft: 6.5, marginTop: -1 }}
                    />
                  </fieldset>

                  <fieldset id="FieldVirus">
                    <MdCoronavirus
                      size={80}
                      style={{ marginTop: 5, marginLeft: 35 }}
                    />

                    <p id="VacinaIcon-Txt">Vírus</p>
                    <Checkbox
                      {...label}
                      sx={{ fontSize: 28, marginLeft: 6.5, marginTop: -1 }}
                    />
                  </fieldset>
                </div>

                <div id="Block-CalfImgae-CadastroVacina">
                  <img
                    id="CalfImgae-CadastroVacina"
                    src={bezerro}
                    alt="bezerro"
                  />
                </div>

                <div id="Btns-Add-Cancel-CadastroVacina">
                  <Grid item xs={2} sx={{ margin: 1 }}>
                    <Button
                      sx={{ margin: 1 }}
                      variant="contained"
                      color="error"
                      component={Link}
                      to="/animals/list"
                    >
                      Cancelar
                    </Button>

                    <Button variant="contained" color="success" sx={{
                        paddingTop:2.2,
                        paddingBottom:2.2,
                      }}>
                      Adicionar
                    </Button>
                  </Grid>
                </div>
              
            </Box>
          </div>
        </div>
      </Box>
    </>
  );
};

export default CadastroVacina;
