import { Box, Container, Grid, TextField } from "@mui/material";
import React, { ReactElement } from "react";
import './registrar.css';
import logoPequena from "../../../imagens/logoPequena.png"

const registrar = (): ReactElement => {
    return (<>
        <Container>
            <section>
                <div id="login">
                    <div id="logoPequena">
                        <img src={logoPequena} alt="Erro..." />
                    </div>
                    <div id="form">
                        <Box sx={{display: "flex", flexDirection: "column"}}>
                            <Grid sx={{margin:"2% 0%"}}>
                                <TextField id="input" type="text" label="Fazenda" variant="outlined" />
                            </Grid>
                            <Grid sx={{margin:"2% 0%"}}>
                                <TextField id="input" type="text" label="E-mail" variant="outlined" />
                            </Grid>
                            <Grid sx={{margin:"2% 0%"}}>
                                <TextField id="input" type="text" label="Senha" variant="outlined" />
                            </Grid>
                            <Grid sx={{margin:"2% 0%"}}>
                                <TextField id="input" type="text" label="Confirmar Senha" variant="outlined" />
                            </Grid>
                            <Grid sx={{margin:"2% 0%"}}>
                                <button>Registrar</button>
                            </Grid>
                            <Grid sx={{margin:"2% 0%", textAlign:"center"}}>
                                <span>Já possuí cadastro?<a href="login">Login</a></span>
                            </Grid>
                        </Box>

                    </div>
                </div>
            </section>
        </Container>
    </>)
}
export default registrar;

//<TextField id="input" type="text" label="Fazenda" variant="outlined" />