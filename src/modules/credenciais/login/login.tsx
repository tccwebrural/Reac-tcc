import { Box, Grid, Container, TextField } from "@mui/material";
import React, { ReactElement } from "react";
import './login.css';
import { textAlign } from "@mui/system";
import logoPequena from "../../../imagens/logoPequena.png"

const login = (): ReactElement => {
    return (<>
        <Container>
            <section>
                <div id="logi">
                    <div id="logoPequena">
                        <img src={logoPequena} alt="Erro..." />
                    </div>
                    <div id="form">
                        <Box>
                            <Grid sx={{margin:"2% 0%"}}>
                                <TextField id="input" type="email" label="E-mail" variant="outlined" />
                            </Grid>
                            <Grid sx={{margin:"2% 0%"}}>
                                <TextField id="input" type="password" label="Senha" variant="outlined" />
                            </Grid>
                            <Grid sx={{margin:"2% 0%"}}>
                                <button>Entrar</button>
                            </Grid>
                            <Grid sx={{margin:"2% 0%", textAlign:"center"}}>
                                <span>Você ainda não tem conta?<a href="registrar">Registre-se</a></span>
                            </Grid>
                            <Grid sx={{margin:"2% 0%", textAlign:"center"}}>
                                <span><a>Esqueci minha senha</a></span>
                            </Grid>
                        </Box>
                    </div>
                </div>
            </section>
        </Container>
    </>)
}
export default login; 