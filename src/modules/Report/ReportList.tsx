import React, { ReactElement } from "react";
import { useState } from "react";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const ListReportPage = (): ReactElement => {        

    interface Column {
        id: 'name' | 'code';
        label: string;
        minWidth?: number;
        align?: 'right';
        format?: (value: number) => string;
    }

    const columns: readonly Column[] = [
        { id: 'name', label: 'Name', minWidth: 100 },
        { id: 'code', label: 'Descripition', minWidth: 200 },
    ];
      
      interface Data {
        name: string;
        code: string;
    }
      
      function createData(name: string, code: string): Data {
        const density = '';
        return { name, code };
    }

    const rows = [
        createData('Leticia', 'Vacina aplicada'),
        createData('George', 'Vacina aplicada'),
    ];

    export default function StickyHeadTable() {
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
      
        const handleChangePage = (event: unknown, newPage: number) => {
            setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        };
    

    return(
    <>
        <Paper sx={{ width: '90%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
    </>
    );
    }
}

export default ListReportPage;