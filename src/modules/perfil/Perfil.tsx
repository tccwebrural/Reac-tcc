import React, { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import "./Perfil.css";
import { BiMenu } from "react-icons/bi";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
        <div id="Bloco">
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
                <fieldset id="img"></fieldset>
              </div>

              <span id="blocoNomePerfil">
                <input id="nomePerfil" value={userName} />
              </span>
              <div id="camposPerfil">
                <label className="labelCamposPerfil">CPF: </label>
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
                <br />
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Perfil;
