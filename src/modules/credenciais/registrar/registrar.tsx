import { Box, Container, Grid, TextField } from "@mui/material";
import React, { ReactElement } from "react";
import './registrar.css';
import logoPequena from "../../../imagens/logoPequena.png"
import footer from "../../../imagens/footer.png"
import vaca3 from '../../../imagens/vaca3.png'
import vaca2 from '../../../imagens/vaca2.png'

const registrar = (): ReactElement => {
    return (<>
        <div id="imgFooter">
            <img src={footer} alt="" />
        </div>
        <div id="imgVaca1">
            <img src={vaca2} alt="" />
        </div>
        <div id="imgVaca2">
            <img src={vaca3} alt="" />
        </div>
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