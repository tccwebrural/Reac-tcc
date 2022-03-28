import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { ReactElement } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import './ReportForm.css';

const FormReportPage = (): ReactElement => {
    const [name, setName] = useState("");

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props,ref,) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = React.useState(false);
      
    const handleClick = () => {
        setOpen(true);
    };
    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }    
        setOpen(false);
    };

    const {register, handleSubmit} = useForm();

    const onSubmit = (e:any) => {
        console.log(e);
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    }
    
   
    return(<>
       <Container>   
            <div className="form">
                <h1>Atualização de Registro</h1>
                <div id="Campos">
                    <form onSubmit={handleSubmit(onSubmit)}>                        
                        <TextField 
                            id="Text" 
                            type="number" 
                            label="Identificador"  
                            variant="outlined"   
                            {...register("Identificador")} />                        
                        <TextField 
                            id="Text" 
                            type="date" 
                            variant="outlined"
                            {...register("Data")} />
                        <Box sx={{ Width: 120 }}>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Vacinas" 
                                    onChange={handleChange}
                                    {...register("Vacinas")}
                                    >
                                <MenuItem value={1}>Vacina 1</MenuItem>
                                <MenuItem value={2}>Vacina 2</MenuItem>
                                <MenuItem value={3}>Vacina 3</MenuItem>
                                </Select>    
                            </FormControl>
                        </Box>
                        <TextField 
                            id="Text-Description" 
                            label="Descrição" 
                            multiline maxRows={4}    
                            {...register("Descricao")}/>  
                        <br/><br/>                      
                        <Button 
                            id="btSalvar" 
                            type ="submit" 
                            variant="outlined" 
                            onClick={handleClick}
                        >Salvar</Button> 
                        <Button 
                            id="btCancelar" 
                            variant="outlined"
                        >Cancelar</Button> 
                    </form>
                </div>
            </div>
        </Container>

        <Stack spacing={2} sx={{ width: '100%' }}>            
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Registro Enviado com Sucesso!
                </Alert>
            </Snackbar>
        </Stack>       
    </>);
}
export default FormReportPage;


