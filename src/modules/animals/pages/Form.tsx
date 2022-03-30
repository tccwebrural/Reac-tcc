import React, { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import './Form.css';
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
import {  Animal  } from '../models/Animal.model';

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

const FormAnimalPage = (): ReactElement => {   

  const [dataForm,setDataForm] = useState<Animal>({}); 
  const [animalForm,setAnimalForm] = useState<Animal>({}); 

  const animalService = new AnimalService();
  
  const onChangeDataForm = (event:any)=>{
    const {name, value} = event.target
    setDataForm({ ...dataForm,[name]: value});

    //  animalService.createAnimal(dataForm.id)
    // animalService.createAnimal(dataForm, '5ab6e784-ef43-4b67-b2b2-09745272319a')


  }
  const salvarDadosAnimal = () => {
 animalService.createAnimal(dataForm,'5ab6e784-ef43-4b67-b2b2-09745272319a').then(()=>{
   console.log('ok')
   Response.data(setDataForm)
 })



//  animalService.createAnimal(dataForm,'5ab6e784-ef43-4b67-b2b2-09745272319a').then(response=>{
//    setDataForm({
//      name : response.data.name,
//      identifier: response.data.identifier,
//      birthday: response.data.birthday,
//      qtyMilk: response.data.qtyMilk,
//      qtyChildreen: response.data.qtyChildreen,
//      type: response.data.type
//    })
   
//  })
    console.log(dataForm);
  }

  const showQtyChildreen = () => {
    if (dataForm.category === 1){
      return<>
      <TextField
          label="Quantidade de Cria"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          name=" qtyChildreen"
          onChange={onChangeDataForm}
          value={dataForm.qtyChildreen}
        />
      </>
    }
  }
  const showQtyMilk = () => {
    if(dataForm.category === 1 && dataForm.type === 2){
   return <>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel htmlFor="qtyMilk" >Qtd de Leite por dia</InputLabel>
          <Select  name='qtyMilk'  label="Grouping" onChange={onChangeDataForm} value={dataForm.qtyMilk}>
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
      </>    
    }
  }
   return (<>
     
    <Box sx={{'& .MuiTextField-root': { m: 1, width: '33ch', },}}>
      <Grid >
        <Item id="formCadAnimal">

        <h1>Cadastrar Animal</h1>
        
        <FormControl sx={{ m: 1, minWidth: 221 }}>
          <InputLabel htmlFor="grouped-select">Categoria</InputLabel>
          <Select label="Grouping" name="category" value={dataForm.category} onChange={onChangeDataForm} >
            <MenuItem  value={1} >Vaca</MenuItem>
            <MenuItem  value={2} >Boi</MenuItem>
            <MenuItem  value={3} >Bezerro</MenuItem>
            
          </Select>
          
        </FormControl>
        
        <TextField
          label="Identificador"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          name='indentifier'
          onChange={onChangeDataForm}
          value={dataForm.identifier}
           />
          
        <TextField 
          label="Nome"
          type="text"
          name='name'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChangeDataForm}
          value={dataForm.name}
        />

        <TextField
          label="Data de Nascimento"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          name='birthday'
          onChange={onChangeDataForm}
          value={dataForm.birthday}
        />
       <FormControl sx={{ m: 1, minWidth: 221 }}>
          <InputLabel htmlFor="type">Tipo</InputLabel>
          <Select label="Grouping" name="type" value={dataForm.type} onChange={onChangeDataForm} >
            <MenuItem  value={1} >Gado de Corte</MenuItem>
            <MenuItem  value={2} >Gado Leitero</MenuItem>
            
          </Select>
          
        </FormControl>
      
      <TextField
          label="Peso Aproximadamente"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          name='weigth'
          onChange={onChangeDataForm}
          value={dataForm.weight}
        />
       {showQtyChildreen()}
       {showQtyMilk()}

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