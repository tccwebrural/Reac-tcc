import React, { ReactElement } from "react"
import { Box, Typography } from "@mui/material"
import "./Perfil.css"
import "../../../src/style.css"
import { BiMenu } from "react-icons/bi"
import rodape from "../../images/rodape.png"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import imgUser from "../../images/imgUser.png"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"

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
        <div className="MainBlock">
        <div className="Block-Txt-Line"> 
          <h2 className="Block-Line"><span className="Block-Txt">Meu Perfil</span></h2>
         </div> 
          
          <div id="Profile">
            <div id="SmallBlock-Profile">
              <div>
              <abbr title="Menu">
                <Button
                  id="menuProfile"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <BiMenu size={30} style={{ color: "var(--cor005)" }} />
                </Button>
                </abbr>
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

              <div id="imgProfile">
                <fieldset id="img">
                  <abbr title="Adicionar foto de perfil">
                  <img id="imgUser" src={imgUser} />
                  </abbr>
                </fieldset>
              </div>

              <span id="BlockNameProfile">
                <input id="nameProfile" defaultValue={userName} />
              </span>
              <div id="FieldsProfile">
                <TextField
                  label="CPF"
                  defaultValue={cpf}
                  size="small"
                  variant="standard"
                  className="txt-FieldsProfile"
                />
                <TextField
                  label="E-mail"
                  defaultValue={email}
                  variant="standard"
                  className="txt-FieldsProfile"
                />
                <TextField
                  label="Telefone"
                  defaultValue={tel}
                  size="small"
                  variant="standard"
                  className="txt-FieldsProfile"
                />
                <TextField
                  label="Nome da Fazenda"
                  defaultValue={nameFarm}
                  variant="standard"
                  className="txt-FieldsProfile"
                />
                <div></div>
              </div>
            </div>
          </div>
          <img id="imgFooter-Profile" src={rodape} />
        </div>
      </Box>
    </>
  );
};

export default Perfil;
