import React, { ReactElement } from "react"
import { Box, Typography } from "@mui/material"
import { BsPrinter } from "react-icons/bs"
import "./DeclareDoRebanho.css"
import "../../../src/style.css"
import Checkbox from "@mui/material/Checkbox"
import vaca from "../../images/vaca-sem-chifre.png"
import Fab from "@mui/material/Fab"
import AddIcon from "@mui/icons-material/Add"
import TextField from "@mui/material/TextField"

const DeclareDoRebanho = (): ReactElement => {
  function imprimir() {
    window.print();
  }
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const userName = "George Michael";
  const email = "george@gmail.com";
  const cpf = "000.000.000.00";
  const nameFarm = "Fazenda Olhos d`agua";
  const tel = "(22) 99009900";

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        <div className="MainBlock">
          <div className="Block-Txt-Line">
            <h2 className="Block-Txt">Declare do Rebanho</h2>
            <span className="Block-Line">
              <Fab id="printIcon" onClick={imprimir}>
                  <BsPrinter size={20} />
              </Fab>
            </span>
          </div>

          <div>
          <p className="CattleDeclaration">Dados do Proprietário</p> {/* declare do gado */}
            <div id="OwnerData">                              {/* dados do proprietario */}
             
              <TextField
                  label="Nome do Proprietário"
                  id="standard-size-normal"
                  defaultValue={userName}
                  variant="standard"
                  sx={{ width:"100%"}} 
                                 
                />
              
                <TextField
                  label="E-mail"
                  id="standard-size-normal"
                  defaultValue={email}
                  variant="standard"
                  sx={{ width:"50%"}} 
                />
                <TextField
                  label="CPF"
                  id="standard-size-small"
                  defaultValue={cpf}
                  size="small"
                  variant="standard"
                  sx={{marginTop:0.3, width:"50%"}}  
                /><br/>
                <TextField
                  label="Telefone"
                  id="standard-size-small"
                  defaultValue={tel}
                  size="small"
                  variant="standard"
                  sx={{marginTop:0.3, width:"50%"}} 
                />
                <TextField
                  label="Nome da Fazenda"
                  id="standard-size-normal"
                  defaultValue={nameFarm}
                  variant="standard"
                  sx={{ width:"50%"}} 
                />
            </div>
          </div>

          <div>
            <p className="CattleDeclaration">Rebanho Bovino Atual Existente</p>
            <div id="RebanhoBovinoAtual">
              <div className="Rebanho-AtualExistente">
                <p id="blocosRebanhoBovAtualExitente">
                  Nascimento<br/>(de 0 à 6 meses)
                </p>
                <div id="MF">
                  <p className="M-txt">Macho</p>
                  <p className="F-txt">Fêmea</p>
                </div>
                <div className="CampoMFalt-Left"></div>
                <div className="CampoMFalt-Rigth"></div>
                <div className="CampoMFDown-left"></div>
                <div className="CampoMFDown-Rigth"></div>{" "}
              </div>

              <div className="Rebanho-AtualExistente">
                <p id="blocosRebanhoBovAtualExitente">
                  Animais Desmamados<br/>(de 7 à 12 meses)
                </p>
                <div id="MF">
                  <p className="M-txt">Macho</p>
                  <p className="F-txt">Fêmea</p>
                </div>
                <div className="CampoMFalt-Left"></div>
                <div className="CampoMFalt-Rigth"></div>
                <div className="CampoMFDown-left"></div>
                <div className="CampoMFDown-Rigth"></div>{" "}
              </div>

              <div className="Rebanho-AtualExistente">
                <p id="blocosRebanhoBovAtualExitente">
                  Garrotes<br/>(de 13 à 24 meses)
                </p>
                <div id="MF">
                  <p className="M-txt">Macho</p>
                  <p className="F-txt">Fêmea</p>
                </div>
                <div className="CampoMFalt-Left"></div>
                <div className="CampoMFalt-Rigth"></div>
                <div className="CampoMFDown-left"></div>
                <div className="CampoMFDown-Rigth"></div>{" "}
              </div>

              <div className="Rebanho-AtualExistente">
                <p id="blocosRebanhoBovAtualExitente">
                  Novilhos<br/>(de 25 à 36 meses)
                </p>
                <div id="MF">
                  <p className="M-txt">Macho</p>
                  <p className="F-txt">Fêmea</p>
                </div>
                <div className="CampoMFalt-Left"></div>
                <div className="CampoMFalt-Rigth"></div>
                <div className="CampoMFDown-left"></div>
                <div className="CampoMFDown-Rigth"></div>{" "}
              </div>

              <div className="Rebanho-AtualExistente">
                <p id="total">Total de Bovinos</p>
                <div id="MF">
                  <p className="M-txt">Macho</p>
                  <p className="F-txt">Fêmea</p>
                </div>
                <div className="CampoMFalt-Left"></div>
                <div className="CampoMFalt-Rigth"></div>
                <div className="CampoMFDown-left"></div>
                <div className="CampoMFDown-Rigth"></div>{" "}
              </div>
            </div>
          </div>
          <div>
            <p id="DeclareDoRebanho-Mortalidade">
              Mortalidade de Bovinos<br/>(ainda não declarados)
            </p>
            <div id="RebanhoBovinoAtual">
              <div className="Rebanho-AtualExistente">
                <p id="causas-txt">CAUSAS</p>
                <div id="Causas">
                  <p className="txt-consumoProprio">Consumo própio</p>
                  <p className="txt-ObitoCausasDiv">Obitos causas diversas</p>
                </div>
              </div>
              <div className="Rebanho-AtualExistente">
                <p id="mortalidade">Até 6 meses</p>

                <div id="MF">
                  <p className="M-txt">Macho</p>
                  <p className="F-txt">Fêmea</p>
                </div>
                <div className="CampoMFalt-Left"></div>
                <div className="CampoMFalt-Rigth"></div>
                <div className="CampoMFDown-left"></div>
                <div className="CampoMFDown-Rigth"></div>
              </div>
              <div className="Rebanho-AtualExistente">
                <p id="mortalidade">De 7 à 12 meses</p>

                <div id="MF">
                  <p className="M-txt">Macho</p>
                  <p className="F-txt">Fêmea</p>
                </div>
                <div className="CampoMFalt-Left"></div>
                <div className="CampoMFalt-Rigth"></div>
                <div className="CampoMFDown-left"></div>
                <div className="CampoMFDown-Rigth"></div>
              </div>
              <div className="Rebanho-AtualExistente">
                <p id="mortalidade">De 13 a 24 meses</p>

                <div id="MF">
                  <p className="M-txt">Macho</p>
                  <p className="F-txt">Fêmea</p>
                </div>
                <div className="CampoMFalt-Left"></div>
                <div className="CampoMFalt-Rigth"></div>
                <div className="CampoMFDown-left"></div>
                <div className="CampoMFDown-Rigth"></div>
              </div>
              <div className="Rebanho-AtualExistente">
                <p id="mortalidade">Mais de 24 meses</p>

                <div id="MF">
                  <p className="M-txt">Macho</p>
                  <p className="F-txt">Fêmea</p>
                </div>
                <div className="CampoMFalt-Left"></div>
                <div className="CampoMFalt-Rigth"></div>
                <div className="CampoMFDown-left"></div>
                <div className="CampoMFDown-Rigth"></div>
              </div>
            </div>
          </div>
          <div>
            <p className="CattleDeclaration">
              Marque a principal finalidade do seu rebanho bovino
            </p>
            <div id="DeclareDoRebanho-Finalidade">
              <div id="Corte-Leite">
                <div>
                  <p>Corte</p>
                  <Checkbox
                    {...label}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                </div>

                <p>Ou</p>
                <div>
                  <p>Leite</p>
                  <Checkbox
                    {...label}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28} }}
                    style={{marginRight:-35, marginTop:-80}}
                  />
                  <img id="imgVaca-DeclareDoRebanho" src={vaca} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default DeclareDoRebanho;
