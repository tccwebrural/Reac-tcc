import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { ReactElement } from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import './ReportForm.css';
import { ReportForm } from "../models/Report.model";

const FormReportPage = (): ReactElement => {
    // OnChange
    const [dataForm, setDataForm] = useState<ReportForm>({});

    const onChangeDataForm = (event: any) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value })
    }

    const salvar = (e: any) => {
        console.log(dataForm);
    }
    //fim OnChange

    return (<>
        <Container>
            <div className="form">
                <h1>Atualização de Registro</h1>
                <div id="Campos">
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={2} sx={{ margin: 1, }}>
                                <TextField fullWidth
                                    id="Text"
                                    type="number"
                                    label="Identificador"
                                    variant="outlined"
                                    name="identifier"
                                    value={dataForm.identifier}
                                    onChange={onChangeDataForm}
                                />
                            </Grid>
                            <Grid item xs={3} sx={{ margin: 1, }}>
                                <TextField fullWidth
                                    id="Text"
                                    type="date"
                                    variant="outlined"
                                    name="date"
                                    value={dataForm.date}
                                    onChange={onChangeDataForm}
                                />
                            </Grid>
                            <Grid item xs={2} sx={{ margin: 1, }}>
                                <Box sx={{ Width: 120 }}>
                                    <FormControl sx={{ width: 150 }}>
                                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                        <Select fullWidth
                                            id="demo-simple-select"
                                            name="vacina"
                                            value={dataForm.vacina}
                                            label="Vacinas"
                                            onChange={onChangeDataForm}
                                        >
                                            <MenuItem value={1}>Vacina 1</MenuItem>
                                            <MenuItem value={2}>Vacina 2</MenuItem>
                                            <MenuItem value={3}>Vacina 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sx={{ margin: 1, }}>
                                <TextField fullWidth
                                    id="Text-Description"
                                    label="Descrição"
                                    multiline maxRows={4}
                                    name="description"
                                    value={dataForm.description}
                                    onChange={onChangeDataForm}
                                />
                            </Grid>
                            <Grid item xs={2} sx={{ margin: 1, }}>
                                <Button fullWidth
                                    id="btSalvar"
                                    variant="outlined"
                                    onClick={salvar}
                                >Salvar</Button>
                            </Grid>
                            <Grid item xs={2} sx={{ margin: 1, }}>
                                <Button fullWidth
                                    id="btCancelar"
                                    variant="outlined"
                                >Cancelar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </Container>


    </>);
}
export default FormReportPage;