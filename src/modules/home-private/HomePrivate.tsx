import React, { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import "./HomePrivate.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  periodo: Number,
  bezerros: number,
  desmamados: number,
  garrotes: number,
  novilhos: number,
  acimaDe: number,
  total: number
) {
  return { periodo, bezerros, desmamados, garrotes, novilhos, acimaDe, total };
}

const rows = [
  createData(2021, 159, 6.0, 24, 4.0, 10, 150),
  createData(2021, 237, 9.0, 37, 4.3, 10, 150),
  createData(2021, 262, 16.0, 24, 6.0, 10, 150),
  createData(2021, 305, 3.7, 67, 4.3, 10, 150),
  createData(2021, 356, 16.0, 49, 3.9, 10, 150),
  createData(2021, 356, 16.0, 49, 3.9, 10, 150),
];

const Home = (): ReactElement => {
  return (
    <>
      <main>
        <div className="MainBlock">
          <div className="Block-Txt-Line">
            <h2 className="Block-Txt">Meus Relatórios</h2>
            <span className="Block-Line"></span>
          </div>
          <Box id="Block-MyReports">
            <div>
              <TableContainer id="Table-MyReports" component={Paper}>
                <Table sx={{ maxWidth: 1000 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell className="Table-MyReports-Itens-txt">Período </TableCell>
                      <TableCell className="Table-MyReports-Itens-txt">
                        Bezerros{" "}
                        <p className="txt_parenteses">de 0 à 6 meses</p>
                      </TableCell>
                      <TableCell className="Table-MyReports-Itens-txt">
                        Desmamados
                        <p className="Itens-txt-caption">de 7 à 12 meses</p>
                      </TableCell>
                      <TableCell className="Table-MyReports-Itens-txt">
                        Garrotes{" "}
                        <p className="Itens-txt-caption">de 13 à 24 meses</p>
                      </TableCell>
                      <TableCell className="Table-MyReports-Itens-txt">
                        Novilhos{" "}
                        <p className="Itens-txt-caption">de 25 à 36 meses</p>
                      </TableCell>
                      <TableCell className="Table-MyReports-Itens-txt">
                        Acima de <p className="Itens-txt-caption">de 36 meses </p>
                      </TableCell>
                      <TableCell className="Table-MyReports-Itens-txt">TOTAL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, i) => (
                      <TableRow key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.periodo}
                        </TableCell>
                        <TableCell>{row.bezerros}</TableCell>
                        <TableCell>{row.desmamados}</TableCell>
                        <TableCell>{row.garrotes}</TableCell>
                        <TableCell>{row.novilhos}</TableCell>
                        <TableCell>{row.acimaDe}</TableCell>
                        <TableCell>{row.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Box>
        </div>
      </main>
    </>
  );
};

export default Home;
