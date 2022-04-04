import React, { ReactElement, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import { Animal } from "../../animals/models/Animal.model";


const ListReportPage = (): ReactElement=> {    
  
  const params = useParams();
  //  console.log(params)
  const [reports, setReports] = useState<ReportForm[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [animal, setAnimals] = useState<Animal[]>([]);

  const reportService = new ReportService();

  useEffect(() => {
    //TODO: Implementar chamada para o backend

    if (params.animalId) {
      reportService.get_Animal_Id_Reports(params.animalId ).then((reports) => setReports(reports));

    }

    console.log(reportService);
    // console.log(reportService)
  }, []);

    return(<>
    
    <div id="table">
      <h1>Lista de Relatorio</h1>
      <TableContainer component={Paper}>
        <Table sx={{ maxHeight: 370 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Descrição</TableCell>
              <TableCell align="right">Vacina</TableCell>
            </TableRow>
          </TableHead>
          ;
          <TableBody>
            {reports.map((report) => (
              <TableRow
                //   key={report.date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{report.register_date}</TableCell>
                <TableCell align="right">{report.description}</TableCell>
                <TableCell align="right">{report.vacine}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>

    <div id="Button">
      <Button id="btVoltar" variant="outlined">Voltar</Button>
    </div>    
    </>);
}
export default ListReportPage;