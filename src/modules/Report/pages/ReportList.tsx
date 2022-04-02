import React, { ReactElement , useEffect} from "react";
import { useState } from "react";

import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './ReportList.css';
import { ReportService } from "../services/Reports.services";
import { ReportForm } from "../models/Report.model";

const ListReportPage = (): ReactElement=> {    
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
 
  const [reports, setReports]  = useState<ReportForm[]>([])
  useEffect(() => {
    //TODO: Implementar chamada para o backend
    reportService.getReportById('20d4dd92-95cc-4d58-ad2f-4fa0fb6af08a').then((reports) => setReports(reports));
  }, []);
  const reportService = new ReportService()


  const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
  };

  const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  interface Column {
    id: 'Data' | 'Description';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }
  
    const columns: readonly Column[] = [
        { id: 'Data', label: 'Data', minWidth: 10 },
        { id: 'Description', label: 'Descrição', minWidth: 600 },
    ];
      
      interface Data {
        Data: String;
        Description: string;
    }
      
      function createData(Data: String, Description: string): Data {
        const density = '';
        return { Data, Description };
    }

<<<<<<< HEAD
    const rows = [];
=======
    const rows = [
        createData( '20/02/2022', 'Vacina aplicada'),
        createData( '20/02/2022', 'Vacina aplicada'),
       
    ];
>>>>>>> b67fb90be96adec9f7f1d3998ce8c810ea3624c1

    return(<>
    
    <div id="table">
      <h1>Lista de Relatorio</h1>
      <Paper>
        <TableContainer sx={{ maxHeight: 370 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>              
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.Description}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );                        
                      })}
                      <div id="btDelete">
                          <Tooltip title="Deletar">
                            <IconButton>
                              <DeleteIcon/>
                            </IconButton>
                          </Tooltip>
                      </div>  
                    </TableRow>
                  );
                })}
              </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[8, 16, 32]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>

    <div id="Button">
      <Button id="btVoltar" variant="outlined">Voltar</Button>
    </div>    
    </>);
}
export default ListReportPage;  