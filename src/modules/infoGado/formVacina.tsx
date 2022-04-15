import { Box, Button, Checkbox, Container, Fab, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { ReactElement, useState } from "react";
import { BsPrinter } from "react-icons/bs";
import { MdCoronavirus } from "react-icons/md";
import { Animal } from "../animals/models/Animal.model";
import "./formVacina.css"
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";



function imprimir() {
    window.print();
}

const formVacina = (): ReactElement => {
    return (<>
        <Container sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                <div id="blocoGeralVacina">
                    <section>
                        <div id="DeclareDoRebanhoTxt_Linha">
                            <h2 id="DeclareDoRebanho-titulo">Cartao de Vacina</h2>
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
                                <span id="DeclareDoRebanho-linha">
                                    <Fab id="printIconAddIcon"
                                        component={Link}
                                        to="/cadastroVacina/CadastroVacina"
                                    >
                                        <button id="btPrintIconAddIcon">
                                            <AddIcon/>
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
                                                 
                                                >
                                                    <MenuItem value={1}>Macho</MenuItem>
                                                    <MenuItem value={2}>Femea</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </FormControl>
                                </Box>
                            </div>
                            <div id="blocoVacinas">
                                <Grid id="vacinas">
                                    <MdCoronavirus size={80} style={{}} />
                                    <h1>Virus 1</h1>
                                    <Checkbox sx={{ fontSize: 28 }} />
                                </Grid>

                            </div>
                        </div>
                        <div id="button">
                            <Button
                                variant="contained"
                                color="inherit"
                            >Voltar</Button>
                        </div>
                    </section>
                </div>
            </Box>
        </Container>
    </>)
}
export default formVacina;