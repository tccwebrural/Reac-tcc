import React, { ReactElement } from "react";
import './Anuncio.css';
import { Animal } from "../../animals/models/Animal.model";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const rows = [
  createData('Vacina contra Brucelose', 305, 3.7),
  createData('Vacina contra doencas da febre aftosa', 452, 25.0),
  createData('Vacina contra raiva', 262, 16.0),
  createData('Vacina', 159, 6.0),
  createData('Vacina', 356, 16.0),
  createData('Vacina', 408, 3.2),
  createData('Vacina', 237, 9.0),
  createData('Vacina', 375, 0.0),
  createData('Vacina', 518, 26.0),

].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin:'auto',
  marginTop:120,
  maxWidth:800,
  minheight:420, 
  borderTop:2,
  color: theme.palette.text.secondary,
}));

const Anuncio = (): ReactElement => { 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
    return(
        <>
         
    <Box  sx={{'& .MuiTextField-root': { m: 1, width: '30ch', },}}>
      <Grid >
        <Item id="formAnuncio">
          <h2>Anuncio de Venda</h2>
      <div >
        <FormControl sx={{ m: 1, minWidth: 233 }}>
            <InputLabel htmlFor="grouped-select">Categoria</InputLabel>
            <Select label="Grouping" name="category"  >
              <MenuItem  value={1} >Vaca</MenuItem>
              <MenuItem  value={2} >Boi</MenuItem>
              <MenuItem  value={3} >Bezerro</MenuItem>
              
            </Select>
        </FormControl>
        
        <FormControl sx={{ m: 1, minWidth: 233 }}>
          <InputLabel htmlFor="type">Tipo</InputLabel>
          <Select label="Grouping" name="type"  >
            <MenuItem  value={1} >Gado de Corte</MenuItem>
            <MenuItem  value={2} >Gado Leitero</MenuItem>
            
          </Select>
          
        </FormControl>

        <TextField
          label="Data de Nascimento"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          name='birthday'
          
        />
        <TextField
          label="Identificador"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          name='indentifier'
        
           />
         
      
      
      <TextField
          label="Peso Aproximadamente"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          name='weigth'
          
        />
         <TextField
          label="Valor"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          name='weigth'
          
        />
      </div>
      <Box>   
            <h2>Registros</h2>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody>
                  {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                  ).map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.calories}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.fat}
                      </TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                      colSpan={3}
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: {
                          'aria-label': 'rows per page',
                        },
                        native: true,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
        </Box>
      <Grid container justifyContent="flex-end" >
            <Stack spacing={2} direction="row" sx={{margin:3, marginTop:8}}>
              
                <Button variant="contained" color="error"component={Link} to='animals/list'>
                  Cancelar
                </Button> 
            
              <Button variant="contained" color="success">
                Salvar
              </Button>
              </Stack>
            </Grid>
      </Item>
      </Grid>
    </Box>
        </>
    )
}
export default Anuncio;