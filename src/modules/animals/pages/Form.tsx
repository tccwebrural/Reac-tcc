import React, { ReactElement } from "react"
import "./Form.css"
import "../../../../src/style.css"
import { Box } from "@mui/material"
import TextField from "@mui/material/TextField"
import { Link } from "react-router-dom"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import bezerro from "../../../images/bezerro.png"
import vaca from "../../../images/vaca-com-chifre-andando.png"

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: "auto",
  marginTop: 32,
  maxWidth: 928,
  height: 390,
  borderTop: 2,
}));

const FormAnimalPage = (): ReactElement => {
  return (
    <>        
      <div className="MainBlock">
         <div className="Block-Txt-Line"> 
          <h2 className="Block-Line"><span className="Block-Txt">Minha Criação &gt; Cadastrar Gado</span></h2>
         </div> 
        <Box sx={{ "& .MuiTextField-root": { m: 1, width: "33ch" } }}>
          <Grid >
            <Item id="AnimalRegister-Form">
              <FormControl  sx={{ m: 1, minWidth: 255 }}>
                <InputLabel htmlFor="grouped-select">Categoria</InputLabel>
                <Select label="Grouping" name="category">
                  <MenuItem value={1}>Vaca</MenuItem>
                  <MenuItem value={2}>Boi</MenuItem>
                  <MenuItem value={3}>Bezerra</MenuItem>
                  <MenuItem value={4}>Bezerro</MenuItem>
                  <MenuItem value={5}>Novilha</MenuItem>
                  <MenuItem value={6}>Novilho</MenuItem>
                </Select>
              </FormControl>

              <TextField
                // disabled
                label="Identificador"
                type="number"
                name="identifier"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: 268 }}
              />

              <TextField
                label="Nome"
                type="text"
                name="name"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: 340 }}
              />

              <TextField
                label="Data de Nascimento"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                name="birthday"
              />
              <FormControl sx={{ m: 1, minWidth: 270 }}>
                <InputLabel htmlFor="type">Tipo</InputLabel>
                <Select label="Grouping" name="type">
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
              />

              <Stack direction="row" spacing={2}>
                <Grid container justifyContent="flex-end">
                  <Stack spacing={2} direction="row" sx={{ marginRight: 1 }}>
                    <div id="Block-CowImage-Form">
                      <img id="CowImage-Form" src={vaca} alt="vaca" />
                    </div>
                    <div id="Block-CalfImage-Form">
                      <img id="CalfImage-Form" src={bezerro} alt="bezerro" />
                    </div>
                    <div id="Btns-SaveCancel-Form">
                      <Button
                       sx={{ marginRight: 1 }}
                        variant="contained"
                        color="error"
                        component={Link}
                        to="/animals/list"
                      >
                        Cancelar
                      </Button>

                      <Button variant="contained" color="success" sx={{paddingTop:2.3,paddingBottom:2.3}}>
                        Salvar
                      </Button>
                    </div>
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
