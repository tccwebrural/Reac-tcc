import { Box, Container, Fab } from "@mui/material";
import './incial.css';
import React, { ReactElement } from "react";
import logoInicial from '../../imagens/logoInicial.png'
import beatriz from '../../imagens/beatriz.png'
import pablo from '../../imagens/pablo.png'
import leticia from '../../imagens/leticia.png'
import george from '../../imagens/george.png'
import laranjeira from '../../imagens/laranjeira.png'
import estacio from '../../imagens/estacio.png'
import logoPequena from '../../imagens/logoPequena.png'
import footer from '../../imagens/footer.png'
import meio from '../../imagens/meio.png'
import vaca3 from '../../imagens/vaca3.png'
import vaca2 from '../../imagens/vaca2.png'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const Home = (): ReactElement => {
    return (<>
        <header>
            <div id="img-logoPequena">
                <img src={logoPequena} alt="Erro..." />
            </div>
            <div id="cabecalho">
                <a id="btn" href="#Home">Home</a>
                <a id="btn" href="#projeto">Projeto</a>
                <a id="btn" href="#inst">Instituição</a>
                <a id="btn" href="#sobre_Nos">Sobre</a>
            </div>
            <div id="credenciais">
                <button id="btn"><a href="registrar">Registrar</a></button>
                <button id="btn"><a href="login">Login</a></button>
            </div>
        </header>

        <div id="imgMeio">
            <img src={meio} alt="Erro..." />
        </div>
        <div id="imgMeio1">
            <img src={vaca3} alt="Erro..." />
        </div>
        <div id="imgMeio2">
            <img src={vaca2} alt="Erro..." />
        </div>

        <main>

            <Container>
                <section id="home">
                    <div id="logo">
                        <img id="img-logo" src={logoInicial} alt="" />
                    </div>


                    <div id="agroRural">
                        <h1>O que é o AGRO RURAL?</h1>

                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                            Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.
                            Donec sed vehicula ante, sit amet dictum odio. Nullam nec nunc molestie, lacinia odio eget, vestibulum ante.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Fusce ligula sapien, mollis tincidunt imperdiet et, vulputate sit amet velit.
                            In porta mi a mi fringilla sollicitudin. Maecenas dictum odio et risus finibus ullamcorper.
                        </span>
                    </div>


                    <section id="projeto">
                        <div id="ideia">
                            <h1>Como Surgiu a Ideia?</h1>

                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                                Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.
                                Donec sed vehicula ante, sit amet dictum odio. Nullam nec nunc molestie, lacinia odio eget, vestibulum ante.
                                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                Fusce ligula sapien, mollis tincidunt imperdiet et, vulputate sit amet velit.
                                In porta mi a mi fringilla sollicitudin. Maecenas dictum odio et risus finibus ullamcorper.
                            </span>
                        </div>
                    </section>
                    <div id="objetivo">
                        <h1>Nosso  Objetivo</h1>

                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                            Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.
                            Donec sed vehicula ante, sit amet dictum odio. Nullam nec nunc molestie, lacinia odio eget, vestibulum ante.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Fusce ligula sapien, mollis tincidunt imperdiet et, vulputate sit amet velit.
                            In porta mi a mi fringilla sollicitudin. Maecenas dictum odio et risus finibus ullamcorper.
                        </span>
                        <div>
                            <Box sx={{ display: "flex", flexDirection: "column", margin: "2%" }}>
                                <div id="teste">
                                    <CheckOutlinedIcon sx={{ color: "green", margin: "2%" }} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                                        Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.</p>
                                </div>
                                <div id="teste">
                                    <CheckOutlinedIcon sx={{ color: "green", margin: "2%" }} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                                        Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.</p>
                                </div>
                                <div id="teste">
                                    <CheckOutlinedIcon sx={{ color: "green", margin: "2%" }} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                                        Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.</p>
                                </div>
                            </Box>
                        </div>
                    </div>
                </section>



                <section id="inst">
                    <div id="instituicao">
                        <h1>Instituição</h1>
                        <div className="conjunto">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                                Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.
                                Donec sed vehicula ante, sit amet dictum odio. Nullam nec nunc molestie, lacinia odio eget, vestibulum ante.
                                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                Fusce ligula sapien, mollis tincidunt imperdiet et, vulputate sit amet velit.
                                In porta mi a mi fringilla sollicitudin. Maecenas dictum odio et risus finibus ullamcorper.
                            </span>
                            <div id="img-instituicao">
                                <img src={estacio} alt="Erro..." />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sobre_Nos">
                    <h1>Orientador</h1>
                    <div id="orientador">
                        <div>
                            <img id="img-sobre" src={laranjeira} alt="Erro..." />
                        </div>
                        <h2>Alessandro Laranjeiras</h2>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                            Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.
                            Donec sed vehicula ante, sit amet dictum odio. Nullam nec nunc molestie, lacinia odio eget, vestibulum ante.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Fusce ligula sapien, mollis tincidunt imperdiet et, vulputate sit amet velit.
                            In porta mi a mi fringilla sollicitudin. Maecenas dictum odio et risus finibus ullamcorper.
                        </span>
                    </div>

                    <div id="sobreNos">
                        <h1>Sobre nos</h1>
                        <div id="sobre-nos">
                            <div className="sobre">
                                <div>
                                    <img id="img-sobre" src={beatriz} alt="Erro..." />
                                </div>
                                <h2>Beatriz</h2>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                                    Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.
                                    Donec sed vehicula ante, sit amet dictum odio. Nullam nec nunc molestie, lacinia odio eget, vestibulum ante.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                    Fusce ligula sapien, mollis tincidunt imperdiet et, vulputate sit amet velit.
                                    In porta mi a mi fringilla sollicitudin. Maecenas dictum odio et risus finibus ullamcorper.
                                </span>
                            </div>

                            <div className="sobre">
                                <div>
                                    <img id="img-sobre" src={george} alt="Erro..." />
                                </div>
                                <h2>Georger</h2>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                                    Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.
                                    Donec sed vehicula ante, sit amet dictum odio. Nullam nec nunc molestie, lacinia odio eget, vestibulum ante.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                    Fusce ligula sapien, mollis tincidunt imperdiet et, vulputate sit amet velit.
                                    In porta mi a mi fringilla sollicitudin. Maecenas dictum odio et risus finibus ullamcorper.
                                </span>
                            </div>

                            <div className="sobre">
                                <div>
                                    <img id="img-sobre" src={leticia} alt="Erro..." />
                                </div>
                                <h2>Leticia Brites</h2>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                                    Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.
                                    Donec sed vehicula ante, sit amet dictum odio. Nullam nec nunc molestie, lacinia odio eget, vestibulum ante.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                    Fusce ligula sapien, mollis tincidunt imperdiet et, vulputate sit amet velit.
                                    In porta mi a mi fringilla sollicitudin. Maecenas dictum odio et risus finibus ullamcorper.
                                </span>
                            </div>

                            <div className="sobre">
                                <div>
                                    <img id="img-sobre" src={pablo} alt="Erro..." />
                                </div>
                                <h2>Pablo Redig</h2>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla sit amet enim hendrerit commodo.
                                    Proin venenatis metus et ipsum dapibus, quis ullamcorper risus luctus.
                                    Donec sed vehicula ante, sit amet dictum odio. Nullam nec nunc molestie, lacinia odio eget, vestibulum ante.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                    Fusce ligula sapien, mollis tincidunt imperdiet et, vulputate sit amet velit.
                                    In porta mi a mi fringilla sollicitudin. Maecenas dictum odio et risus finibus ullamcorper.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </main>

        <footer>
            <section id="rodape">
                <div id="imgfooter">
                    <img src={footer} alt="Erro..." />
                </div>
            </section>
        </footer>

    </>)
}
export default Home;