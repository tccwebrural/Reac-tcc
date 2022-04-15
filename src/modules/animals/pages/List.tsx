import React, { ReactElement, useEffect, useState } from "react"
import "./List.css"
import "../../../../src/style.css"
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { ImEye } from "react-icons/im"
import VaccinesIcon from "@mui/icons-material/Vaccines"
import { Box, Fab } from "@mui/material"
import { Link } from "react-router-dom"
import AddIcon from "@mui/icons-material/Add"
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Identificador",
    headerAlign: "center",
    align: "center",
    width: 100,
  },
  {
    field: "category",
    headerName: "Categoria",
    sortable: false,
    width: 90,
    headerAlign: "center",
    align: "center",
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
    headerName: "Idade",
    headerAlign: "center",
    align: "center",
    width: 110,
    sortable: false,
  },
  {
    field: "type",
    headerName: "Tipo",
    sortable: false,
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "weight",
    headerName: "Peso",
    headerAlign: "center",
    align: "center",
    type: "number",
    width: 90,
  },
  {
    field: "qtyChildreen",
    headerName: "Qtd de Cria",
    headerAlign: "center",
    align: "center",
    width: 90,
    sortable: false,
  },
  {
    field: "operacoes",
    headerName: "Operações",
    description:
      "Nos botões abaixo você pode visualizar os dados do animal,visualizar o cartão de vacina, editar e deletar os dados do animal selecionado.",
    sortable: false,
    headerAlign: "center",
    width: 210,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <>
          <Fab
            size="small"
            style={{ color: "white" }}
            id="btn-ViewAnimalData"
            component={Link}
            to="/infoGado/meuGado"
          >
            <abbr title="Visualizar Dados do Animal">
              <ImEye size={20} />
            </abbr>
          </Fab>
          <Fab
            size="small"
            color="primary"
            id="btn-ViewVaccine"
            component={Link}
            to="/infoGado/formVacina"
          >
            <abbr title="Cartão de Vacina">
              <VaccinesIcon />
            </abbr>
          </Fab>
          <Fab
            size="small"
            style={{ color: "white" }}
            id="btn-EditAnimalData"
            component={Link}
            to="/animals/:animalId/editAnimalData/EditAnimalData"
          >
            <abbr title="Editar Dados do Animal">
              <EditIcon />
            </abbr>
          </Fab>
          <Fab
            style={{ marginBottom: 9 }}
            id="btn-DeleteAnimal"
            size="small"
            color="error"
          >
            <abbr title="Deletar">
              <DeleteIcon />
            </abbr>
          </Fab>
        </>
      );
    },
  },
];
const rows = [
  { id: 1, category: "Vaca",   name: 'Mimosa', birthday: 5, type: "Gado Leiteiro", weight: 350, qtyChildreen: 4 },
  { id: 2, category: "Vaca",   name: 'Malhada',birthday: 9, type: "Gado Leiteiro", weight: 420, qtyChildreen: 3 },
  { id: 3, category: "Novilha",name: null,     birthday: 2, type: "Gado de Corte", weight: 450, qtyChildreen: 2 },
  { id: 4, category: "Novilha",name: null,     birthday: 2, type: "Gado de Corte", weight: 160, qtyChildreen: 0 },
  { id: 5, category: "Boi",    name: 'Teló',   birthday: 5, type: "Gado de Corte", weight: null,qtyChildreen: null },
  { id: 6, category: "Vaca",   name: 'Vaca006',birthday: 3, type: "Gado Leiteiro", weight: 150, qtyChildreen: 22 },
  { id: 7, category: "Vaca",   name: 'Vaca007',birthday: 1, type: "Gado Leiteiro", weight: 440, qtyChildreen: 22 },
  { id: 8, category: "Vaca",   name: 'Vaca008',birthday: 1, type: "Gado Leiteiro", weight: 360, qtyChildreen: 22 },
  { id: 9, category: "Vaca",   name: 'Vaca009',birthday: 1, type: "Gado Leiteiro", weight: 650, qtyChildreen: 22 },
];

const List = (): ReactElement => {
  return (
    <>
      <div className="MainBlock">
        <div className="Block-Txt-Line">
          <h2 className="Block-Txt">Minha Criação</h2>
          <span className="Block-Line">
            <abbr title="Adicionar Animal">
              <Fab
                id="AddIcon"
                component={Link}
                to="/animals/form"
                style={{ width: 45, height: 45 }}
              >
                <AddIcon />
              </Fab>
            </abbr>
          </span>
        </div>

        <Box id="table-MinhaCriacao">
          <div style={{ height: 420, width: 948 }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
        </Box>
      </div>
    </>
  );
};

export default List;
