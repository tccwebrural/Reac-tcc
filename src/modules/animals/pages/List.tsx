import React, { ReactElement, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {ImEye} from "react-icons/im" ;
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import {HiPlus} from "react-icons/hi";
import { Box, Button, Fab, Modal } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Animal } from "../models/Animal.model";
import { AnimalService } from "../services/Animals.service";
import { Link } from "react-router-dom";
import "./List.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const ListAnimalsPage = (): ReactElement => {
  const animalService = new AnimalService();

  /** Configurações das colunas da tabela */
  const columns: GridColDef[] = [
    {
      field: "identifier",
      headerName: "Identificador",
      width: 100,
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
    {
      field: "name",
      headerName: "Nome",
      width: 115,
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
    {
      field: "birthday",
      headerName: "idade",
      headerAlign: "center",
      width: 110,
      sortable: false,
    },
    {
      field: "category",
      headerName: "Categoria",
      sortable: false,
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "type",
      headerName: "Tipo",
      sortable: false,
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "qtyChildreen",
      headerName: "Qtd Cria",
      headerAlign: "center",
      width: 100,
      sortable: false,
    },
    {
      field: "weight",
      headerName: "Peso aproximado",
      headerAlign: "center",
      width: 135,
      sortable: false,
    },
    // {
    //   field: "qtyMilk",
    //   headerName: "Quantidade de leite/dia",
    //   headerAlign: "center",
    //   sortable: false,
    // },
    {
      field: "operacoes",
      headerName: "Operacoes",
      width: 210,
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
        const currentAnimalRow = params.row as Animal;
        // setSelectedAnimal(animalSelected);
        return (
          <>
            {/* <Link to={`/ads/form/${currentAnimalRow.id}/`}>
              <Fab size="small" color="success">
                <ShoppingCartIcon />
              </Fab>
            </Link> */}
             {/* AQUI VAMOS MUDAR ESSA ROTA */}
             <Link to={`/animals/${currentAnimalRow.id}/reports`}>
              <Fab size="small" style={{color:'white'}} id="btVisualizarDadosAnimal">
                <abbr title="Visualizar Dados do Animal"><ImEye size={20} /></abbr>
              </Fab>
            </Link>
            <Link to={`/animals/${currentAnimalRow.id}/reports/form`}>
              <Fab size="small" color="primary" id="btVacina">
                <abbr title="Cartão de Vacina"><VaccinesIcon/></abbr>
              </Fab>
            </Link>
            <Link to={`editAnimalData/EditAnimalData`}>
              <Fab size="small"style={{color:'white'}} id="btEditar">
                <abbr title="Editar Dados do Animal"><EditIcon/></abbr>
              </Fab>
            </Link>
           
            <Fab
              id="btDelete"
              size="small"
              color="error"
              onClick={() => openDeleteAnimalModal(currentAnimalRow)}
            >
              <abbr title="Deletar"><DeleteIcon/></abbr>
            </Fab>
          </>
        );
      },
    },
  ];

  const [selectedAnimal, setSelectedAnimal] = useState<Animal>();
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  /**
   * No inicio do carregamento da pagina é executado a função de carregar os animais
   */
  useEffect(() => {
    //TODO: Implementar chamada para o backend
    animalService.getAnimals().then((animals) => setAnimals(animals));
  }, []);

  /** Método responsável por abrir o modal de excluir o animal */
  const openDeleteAnimalModal = (animalSelected: Animal) => {
    setSelectedAnimal(animalSelected);
    setModalDeleteOpen(true);
  };

  /**
   * Método responsável por realizar a exclusão do animal no banco de dados;
   * @param isToDelete - Quando verdadeiro a ação de delete é realizada
   */
  //
  const HandleDeleteAnimal = async (isToDelete: boolean) => {
    if (isToDelete && selectedAnimal && selectedAnimal.id) {
      //TODO: Chamar a api para realizar a exclusão
      //TODO: Chamar a api para atulizar a lista de animais;.

      //
      await animalService.delteAnimalById(selectedAnimal.id);
      await animalService.getAnimals().then(setAnimals);

      console.log(animals);
    }

    // Limpa o animal atual do campo de selecionado para evitar problemas
    setSelectedAnimal({});
    // Fecha o modal
    setModalDeleteOpen(false);
  };

  const renderDeleteAnimalModal = () => {
    if (selectedAnimal) {
      return (
        <Modal
          hideBackdrop
          open={modalDeleteOpen}
          onClose={() => HandleDeleteAnimal(false)}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box>
            <h2>
              Você realmente deseja excluir esse animal ( {selectedAnimal.name}{" "}
              )?
            </h2>
            <p>
              Após a exclusão não será possível recuperar os dados do animal ({" "}
              {selectedAnimal.name} )
            </p>
            <Button onClick={() => HandleDeleteAnimal(false)}>Não</Button>
            <Button onClick={() => HandleDeleteAnimal(true)}>Sim</Button>
          </Box>
        </Modal>
      );
    }
  };

  return (
    <>
    <div id="Bloco">
     <div id="MinhaCriacaoTxt_Linha">
            <h2 id="MinhaCriacao-titulo">Minha Criação</h2>
            <span id="MinhaCriacao-linha">
            <abbr title="Adicionar Animal">
  
            <Fab id="AddIcon" 
            component={Link}
            to="animals/form"
            style={{width:50, height:50}}
            >
              <AddIcon/>
            </Fab>
            
              </abbr>
            </span>
      </div>
    <main id="mainMinhaCriacao">
      <Paper
       id="tabelaMinhaCriacao"
      >
        <TableContainer sx={{ height: "400px" }}>
          <DataGrid
            getRowId={(e: any) => e.id}
            rows={animals}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </TableContainer>
      </Paper>
      {renderDeleteAnimalModal()}
      </main>
      </div>
    </>
  );
};

export default ListAnimalsPage;
