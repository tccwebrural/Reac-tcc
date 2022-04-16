import "../infoGado/meuGado.css";
import React, { ReactElement } from "react";
import { Box, Button, Container, Fab, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { MdCoronavirus } from "react-icons/md";
import { BsPrinter } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import vaca1 from "../../imagens/vaca1.png";
import vaca2 from "../../imagens/vaca2.png";
import vaca3 from "../../imagens/vaca3.png";
import vaca4 from "../../imagens/vaca4.png";


function imprimir() {
    window.print();
}

const meuGado = (): ReactElement => {
    return (<>
        <Container sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <div className="imgGados">
                <img src={vaca1} alt="Erro..." />
            </div>
            <div id="blocoGeral">
                <section>
                    <div id="blocoTitulo-criacao">
                        <h2 id="blocoTituloTxt-criacao">Minha Criação &gt; Gado</h2>
                        <span id="blocoTituloLine-criacao">
                            <Fab id="printIcon">
                                <button id="btPrintIcon" type="submit" onClick={imprimir}>
                                    <abbr title="Imprimir">
                                        <BsPrinter size={20} />
                                    </abbr>
                                </button>
                            </Fab>
                        </span>
                    </div>

                    <div id="infoGado">
                        <Box>
                            <FormControl sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
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
                                            name="tipo"

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
                        <div id="blocoTitulo-vacina">
                            <h2 id="blocoTituloTxt-vacina">Cartao de Vacina</h2>
                            <span id="blocoTituloLine-vacina">
                                <Fab id="printIconAddIcon"
                                    component={Link}
                                    to="/cadastroVacina/CadastroVacina"
                                >
                                    <button id="btPrintIconAddIcon">
                                        <abbr title="Adicionar Vacina">
                                            <AddIcon />
                                        </abbr>
                                    </button>
                                </Fab>

                            </span>
                        </div>

                        <div id="blocoVacinas">
                            <Grid id="vacinas">
                                <Button component={Link} to="/infoGado/formVacina" sx={{ display: "flex", flexDirection: "column" }}>
                                    <MdCoronavirus size={80} style={{}} />
                                    <h1>Virus 1</h1>
                                </Button>
                            </Grid>
                            <Grid id="vacinas">
                                <Button component={Link} to="/infoGado/formVacina" sx={{ display: "flex", flexDirection: "column" }}>
                                    <MdCoronavirus size={80} style={{}} />
                                    <h1>Virus 2</h1>
                                </Button>
                            </Grid>
                            <Grid id="vacinas">
                                <Button component={Link} to="/infoGado/formVacina" sx={{ display: "flex", flexDirection: "column" }}>
                                    <MdCoronavirus size={80} style={{}} />
                                    <h1>Virus 3</h1>
                                </Button>
                            </Grid>
                            <Grid id="vacinas">
                                <Button component={Link} to="/infoGado/formVacina" sx={{ display: "flex", flexDirection: "column" }}>
                                    <MdCoronavirus size={80} style={{}} />
                                    <h1>Virus 4</h1>
                                </Button>
                            </Grid>
                        </div>
                    </div>
                    <div id="button">
                        <Button
                            variant="contained"
                            color="inherit"
                            component={Link}
                            to="/animals/list"
                        >Voltar</Button>
                    </div>
                </section>
            </div>
        </Container>
    </>)
}
export default meuGado;