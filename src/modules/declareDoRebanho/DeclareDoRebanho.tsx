import React, { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import { BsPrinter } from "react-icons/bs";
import "./DeclareDoRebanho.css";
import Checkbox from "@mui/material/Checkbox";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

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
        <div id="Bloco">
          <div id="DeclareDoRebanhoTxt_Linha">
            <h2 id="DeclareDoRebanho-titulo">Declare do Rebanho</h2>
            <span id="DeclareDoRebanho-linha">
              <Fab id="printIcon">
                <button id="btPrintIcon" type="submit" onClick={imprimir}>
                  <BsPrinter size={20} />
                </button>
              </Fab>
            </span>
          </div>

          <div>
            <p className="DeclareDoRebanho">Dados do Proprietário</p>
            <div id="dadosDoPropietario">
              <label className="labelDadosProprietario">
                Nome do Proprietário:{" "}
              </label>
              <input
                className="Declare-dadosDoPropietario"
                id="userNameInput"
                value={userName}
              />
              <br />
              <label className="labelDadosProprietario">Email: </label>
              <input
                className="Declare-dadosDoPropietario"
                id="emailInput"
                value={email}
              />
              <label className="labelDadosProprietario">CPF: </label>
              <input
                className="Declare-dadosDoPropietario"
                id="cpfInput"
                value={cpf}
              />
              <br />
              <label className="labelDadosProprietario">
                Nome da Fazenda:{" "}
              </label>
              <input
                className="Declare-dadosDoPropietario"
                id="nameFarmInput"
                value={nameFarm}
              />
              <label className="labelDadosProprietario">Telefone: </label>
              <input
                className="Declare-dadosDoPropietario"
                id="telInput"
                value={tel}
              />
              <br />
            </div>
          </div>

          <div>
            <p className="DeclareDoRebanho">Rebanho Bovino Atual Existente</p>
            <div id="RebanhoBovinoAtual">
              <div className="Rebanho-AtualExistente">
                <p id="blocosRebanhoBovAtualExitente">
                  Nascimento<p>(de 0 à 6 meses)</p>
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
                  Animais Desmamados<p>(de 7 à 12 meses)</p>
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
                  Garrotes<p>(de 13 à 24 meses)</p>
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
                  Novilhos<p>(de 25 à 36 meses)</p>
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
              Mortalidade de Bovinos<p>(ainda não declarados)</p>
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
            <p className="DeclareDoRebanho">
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
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
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
