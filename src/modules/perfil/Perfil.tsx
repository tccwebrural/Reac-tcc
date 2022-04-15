import React, { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import "./Perfil.css";
import { BiMenu } from "react-icons/bi";
import rodape from "../../images/rodape.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import imgUser from "../../images/imgUser.png";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const Perfil = (): ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const userName = "George Michael";
  const cpf = "000.000.000.00";
  const email = "george@gmail.com";
  const tel = "(22) 99009900";
  const nameFarm = "Fazenda Olhos d`agua";

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div id="BlocoPerfil">
          <div id="MeuPerfilTxt_Linha">
            <h2 id="MeuPerfil-titulo">Meu Perfil</h2>
            <span id="MeuPerfil-linha"></span>
          </div>
          <div id="perfil">
            <div id="bloPerfil">
              <div>
                <Button
                  id="menuPerfil"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <BiMenu size={30} style={{ color: "var(--cor005)" }} />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Editar Perfil</MenuItem>
                  <MenuItem onClick={handleClose}>Sair da conta</MenuItem>
                  <MenuItem onClick={handleClose}>Desativar conta</MenuItem>
                </Menu>
              </div>

              <div id="imgPerfil">
                <fieldset id="img">
                  <img id="imgUser" src={imgUser} />
                </fieldset>
              </div>

              <span id="blocoNomePerfil">
                <input id="nomePerfil" defaultValue={userName} />
              </span>
              <div id="camposPerfil">
                {/* <label className="labelCamposPerfil">CPF: </label>
                <input className="txt-camposPerfil" id="InputCpf" value={cpf} />
                <br />
                <label className="labelCamposPerfil">E-mail: </label>
                <input className="txt-camposPerfil" id="InputEmail" value={email}/>
                <br />
                <label className="labelCamposPerfil">Telefone: </label>
                <input className="txt-camposPerfil" id="InputTel" value={tel} />
                <br />
                <label className="labelCamposPerfil">Nome da Fazenda: </label>
                <input className="txt-camposPerfil" id="InputNameFarm" value={nameFarm} />
                <br /> */}
                <TextField
                  label="CPF"
                  id="standard-size-small"
                  defaultValue={cpf}
                  size="small"
                  variant="standard"
                  className="txt-camposPerfil"
                />
                <TextField
                  label="E-mail"
                  id="standard-size-normal"
                  defaultValue={email}
                  variant="standard"
                  className="txt-camposPerfil"
                />
                <TextField
                  label="Telefone"
                  id="standard-size-small"
                  defaultValue={tel}
                  size="small"
                  variant="standard"
                  className="txt-camposPerfil"
                />
                <TextField
                  label="Nome da Fazenda"
                  id="standard-size-normal"
                  defaultValue={nameFarm}
                  variant="standard"
                  className="txt-camposPerfil"
                />
                <div></div>
              </div>
            </div>
          </div>
          <img id="imgRodape-Perfil" src={rodape} />
        </div>
      </Box>
    </>
  );
};

export default Perfil;
