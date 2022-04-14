import "../infoGado/meuGado.css";
import React, { ReactElement, useState } from "react";
import { Box, Container, Fab, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { MdCoronavirus } from "react-icons/md";
import { Animal } from "../animals/models/Animal.model";
import { BsPrinter } from "react-icons/bs";

const onChangeDataForm = (event: any) => {
    const [dataForm, setDataForm] = useState<Animal>({});
    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value });
}

function imprimir() {
    window.print();
}

const meuGado = (): ReactElement => {
    return (<>
        <Container sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                <div id="blocoGeral">
                    <section>
                        <div id="DeclareDoRebanhoTxt_Linha">
                            <h2 id="DeclareDoRebanho-titulo">Minha Criação &gt; Gado</h2>
                            <span id="DeclareDoRebanho-linha">
                                <Fab id="printIcon">
                                    <button id="btPrintIcon" type="submit" onClick={imprimir}>
                                        <BsPrinter size={20} />
                                    </button>
                                </Fab>
                            </span>
                        </div>

                        <div id="infoGado">
                            <Box>
                                <FormControl sx={{ display: "flex", flexDirection: "row", margin: "auto" }}>
                                    <Grid item xs={2} sx={{ margin: "1%" }}>
                                        <TextField
                                            style={{ width: 180 }}
                                            id="outlined-disabled"
                                            label="Nome"
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid sx={{ margin: "1%" }}>
                                        <TextField
                                            style={{ width: 80 }}
                                            id="outlined-disabled"
                                            label="Peso"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid sx={{ margin: "1%" }}>
                                        <FormControl sx={{ minWidth: 221 }}>
                                            <InputLabel>Tipo</InputLabel>
                                            <Select
                                                label="Grouping"
                                                name="type"
                                                onChange={onChangeDataForm}
                                            >
                                                <MenuItem value={1}>Gado de Corte</MenuItem>
                                                <MenuItem value={2}>Gado Leitero</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid sx={{ margin: "1%" }}>
                                        <TextField
                                            style={{ width: 180 }}
                                            id="outlined-disabled"
                                            label="Data de Nascimento"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid sx={{ margin: "1%" }}>
                                        <TextField
                                            style={{ width: 100 }}
                                            id="Qtd de Cria"
                                            label="Qtd de Cria"
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid sx={{ margin: "1%" }}>
                                        <FormControl sx={{ minWidth: 100 }}>
                                            <InputLabel htmlFor="type">Sexo</InputLabel>
                                            <Select
                                                label="Grouping"
                                                name="type"
                                                onChange={onChangeDataForm}
                                            >
                                                <MenuItem value={1}>Macho</MenuItem>
                                                <MenuItem value={2}>Femea</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </FormControl>
                            </Box>
                        </div>
                    </section>

                    <section>
                        <div>
                            <div id="DeclareDoRebanhoTxt_Linha">
                                <h2 id="DeclareDoRebanho-titulo">Cartao de Vacina</h2>
                                <span id="DeclareDoRebanho-linha"></span>
                            </div>

                            <div id="blocoVacinas">
                                <Grid id="vacinas">
                                    <MdCoronavirus size={80} style={{}} />
                                    <h1>Virus 1</h1>
                                </Grid>
                                <Grid id="vacinas">
                                    <MdCoronavirus size={80} style={{}} />
                                    <h1>Virus 2</h1>
                                </Grid>
                                <Grid id="vacinas">
                                    <MdCoronavirus size={80} style={{}} />
                                    <h1>Virus 3</h1>
                                </Grid>
                                <Grid id="vacinas">
                                    <MdCoronavirus size={80} style={{}} />
                                    <h1>Virus 4</h1>
                                </Grid>
                                <Grid id="vacinas">
                                    <MdCoronavirus size={80} style={{}} />
                                    <h1>Virus 5</h1>
                                </Grid>
                            </div>
                        </div>
                    </section>
                </div>
            </Box>
        </Container>
    </>)
}
export default meuGado;