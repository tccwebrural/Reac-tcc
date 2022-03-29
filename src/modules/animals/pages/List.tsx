import React, { ReactElement, useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UpdateIcon from '@mui/icons-material/Update';
import { Box, Button, Fab, Modal } from "@mui/material";
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Animal } from "../models/Animal.model";
import { AnimalService } from "../services/Animals.service";
import { Link } from "react-router-dom";

const ListAnimalsPage = (): ReactElement => {
    const animalService = new AnimalService();

    /** Configurações das colunas da tabela */
    const columns: GridColDef[] = [
        {
            field: 'identifier',
            headerName: 'Identificador',
            width: 250,
            headerAlign: 'center',
            align: 'center',
            sortable: false,
        },
        {
            field: 'name',
            headerName: 'Nome',
            width: 350,
            headerAlign: 'center',
            align: 'center',
            sortable: false,
        },
        {
            field: 'birthday',
            headerName: 'idade',
            headerAlign: 'center',
            sortable: false,
        },
        {
            field: 'category',
            headerName: 'Categoria',
            sortable: false,
            width: 100,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'type',
            headerName: 'Tipo',
            sortable: false,
            width: 350,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'qtyChildreen',
            headerName: 'Qtd Cria',
            headerAlign: 'center',
            sortable: false,
        },
        {
            field: 'weight',
            headerName: 'Peso aproximado',
            headerAlign: 'center',
            sortable: false,
        },
        {
            field: 'operacoes',
            headerName: 'Operacoes',
            width: 380,
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            renderCell: (params: GridRenderCellParams) => {
                const currentAnimalRow = params.row as Animal;              
                // setSelectedAnimal(animalSelected);
                return (
                    <>
                  <Link to={`/animals/form/${currentAnimalRow.id}/`}>
                            <Fab size="small" color="success">
                                <EditIcon />
                            </Fab>
                        </Link>
                        <Fab size="small" color="success" onClick={() => openDeleteAnimalModal(currentAnimalRow)}>
                            <DeleteIcon />
                        </Fab>
                        <Link to={`/ads/form/${currentAnimalRow.id}/`}>
                            <Fab size="small" color="success">
                                <ShoppingCartIcon />
                            </Fab>
                        </Link>
                        <Link to={`/animals/${currentAnimalRow.id}/report`}>
                            <Fab size="small" color="success">
                                <UpdateIcon />
                            </Fab>
                        </Link>
                        <Link to={`/animals/${currentAnimalRow.id}/report/form`}>
                            <Fab size="small" color="success">
                                <FormatAlignLeftIcon />
                            </Fab>
                        </Link>
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
        animalService.getAnimals().then(
            animals => setAnimals(animals)
        );
    }, []);

    /** Método responsável por abrir o modal de excluir o animal */
    const openDeleteAnimalModal = (animalSelected: Animal) => {
        setSelectedAnimal(animalSelected);
        setModalDeleteOpen(true);
    }


    /**
     * Método responsável por realizar a exclusão do animal no banco de dados;
     * @param isToDelete - Quando verdadeiro a ação de delete é realizada
     */
    // 
    const HandleDeleteAnimal = async (isToDelete: boolean) => {
        
        // useEffect(() => {
        
            
        // }, []);
      
        // useEffect(()=>{
        //     async function deleleteAnimal(selectedAnimal:any){
            
        //     await animalService.delteAnimalById(selectedAnimal?.id)
        //     setAnimals(animals)
            
        //     await animalService.getAnimals().then(
        //         ()=> setAnimals(animals)
        //     )
        //     }   
        //     deleleteAnimal(animals)
        //     console.log(deleleteAnimal)
        // },[]) 
      
        
        if (isToDelete && selectedAnimal && selectedAnimal.id) {
            //TODO: Chamar a api para realizar a exclusão
            //TODO: Chamar a api para atulizar a lista de animais;.

//      
       
                

          await  animalService.delteAnimalById(selectedAnimal.id)
          await animalService.getAnimals().then(setAnimals)
        //   animalService.getAnimals()
        //   .then(
        //      ()=> setAnimals(animals)
            
        //   )
        //   animalService.getAnimals().then(
        //     animals => setAnimals(animals)
        // );

        console.log(animals)
    
        }
     
  
        // Limpa o animal atual do campo de selecionado para evitar problemas
        setSelectedAnimal({});
        // Fecha o modal
        setModalDeleteOpen(false);
    };
    
    const renderDeleteAnimalModal = () => {
        
      
        if (selectedAnimal) {
            return <Modal
                hideBackdrop
                open={modalDeleteOpen}
                onClose={() => HandleDeleteAnimal(false)}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Box>
                    <h2>Você realmente deseja excluir esse animal ( {selectedAnimal.name} )?</h2>
                    <p>Após a exclusão não será possível recuperar os dados do animal ( {selectedAnimal.name} )</p>
                    <Button onClick={() => HandleDeleteAnimal(false)}>Não</Button>
                    <Button onClick={() => HandleDeleteAnimal(true)}>Sim</Button>
                </Box>
            </Modal>;
        }
    };

    return (<>
        <Paper sx={{ width: '100%', height: '100%', overflow: 'hidden', padding: '2%' }}>
            <TableContainer sx={{ height: '500px' }}>
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
    </>);
}

export default ListAnimalsPage;