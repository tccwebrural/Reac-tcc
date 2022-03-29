
import React, { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from "react";

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

 function salvarDadosAnimal(){
   alert("Dados Salvos")
   
 }

const FormAnimalPage = (): ReactElement => {   

  const [categoria, setCategoria] = useState();
    
  
   return (<>
     
    <Box sx={{'& .MuiTextField-root': { m: 1, width: '33ch', },}}>
      <Grid >
        <Item >

        <h1>Cadastrar Animal</h1>
        
        <FormControl sx={{ m: 1, minWidth: 221 }}>
          <InputLabel htmlFor="grouped-select">Categoria</InputLabel>
          <Select label="Grouping" name="categoria" value={categoria} onChange={(e:any) => setCategoria(e.target.value)}>
            <MenuItem  value='0' >Vaca</MenuItem>
            <MenuItem  value='1' >Boi</MenuItem>
            <MenuItem  value='2' >Bezerro</MenuItem>
            
          </Select>
          
        </FormControl>
        
        <TextField
          label="Identificador"
          type="number"
          InputLabelProps={{
            shrink: true,
          }} />
          
        <TextField 
          label="Nome"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          
        />

        <TextField
          label="Data de Nascimento"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
       <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel htmlFor="grouped-native-select">Tipo</InputLabel>
        <Select native   label="Grouping">
            <option aria-label="None" value="" />
            <option value={1}>Gado de corte</option>
            <option value={2}>Gado Leitero</option>
        </Select>
      </FormControl>
      <TextField
          label="Peso Aproximadamente"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div id='camposVaca'>
         <TextField
          label="Quantidade de Cria"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel >Qtd de Leite por dia</InputLabel>
        <Select  id="grouped-select"  label="Grouping">
          <MenuItem value={1}>1 Litro</MenuItem>
          <MenuItem value={2}>2 Litros</MenuItem>
          <MenuItem value={3}>3 Litros</MenuItem>
          <MenuItem value={4}>4 Litros</MenuItem>
          <MenuItem value={5}>5 Litros</MenuItem>
          <MenuItem value={6}>6 Litros</MenuItem>
          <MenuItem value={7}>7 Litros</MenuItem>
          <MenuItem value={8}>8 Litros</MenuItem>
          <MenuItem value={9}>9 Litros</MenuItem>
          <MenuItem value={10}>10 Litros</MenuItem>
          <MenuItem value={11}>À cima de 10 Litros</MenuItem>
        </Select>
      </FormControl>
      </div>
      <Stack direction="row" spacing={2}>
       
        <Grid container justifyContent="flex-end" >
          <Stack spacing={2} direction="row" sx={{margin:3, marginTop:8}}>
            
              <Button variant="contained" color="error"component={Link} to='animals/list'>
                Cancelar
              </Button> 
          
            <Button variant="contained" color="success" onClick={salvarDadosAnimal}>
              Salvar
            </Button>
            </Stack>
          </Grid>
        </Stack>
        </Item>
      </Grid>
    </Box>
      
    </>
  );
}

export default FormAnimalPage