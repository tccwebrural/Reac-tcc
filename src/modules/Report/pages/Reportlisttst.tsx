import React, { ReactElement, useEffect } from "react";
import { useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './ReportList.css';
import { ReportService } from "../services/Reports.services";
import { ReportForm } from "../models/Report.model";

const ListReportPagetst = (): ReactElement=> {    
  
  const [reports, setReports]  = useState<ReportForm[]>([])
  const reportService = new ReportService()

  const getReportAnimal= () =>{

    reportService.getReportById('').then()
  }
  useEffect(() => {
    //TODO: Implementar chamada para o backend
    reportService.getReportById('20d4dd92-95cc-4d58-ad2f-4fa0fb6af08a').then((reports) => setReports(reports));
  }, []);

  
    return(
        <>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
           
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Vacina</TableCell>
          
          </TableRow>
        </TableHead>;
        <TableBody>
          {reports.map(report => (
            <TableRow
            //   key={report.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
           
           <TableCell align="right">{report.register_date}</TableCell>
           <TableCell align="right">{report.description}</TableCell>
           <TableCell align="right">{report.vacine}</TableCell>



         
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </>
    )

    
  
}
export default ListReportPagetst;  