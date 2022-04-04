import { Animal } from './../../animals/models/Animal.model';
import { API_ANIMALS_ROUTE } from './../../../constants';
import { ReportForm } from './../models/Report.model';

import { AXIOS_CONNECTOR_API } from '../../../services/axios.service';
import {API_REPORT_ROUTE } from '../../../constants';
import { Params } from 'react-router-dom';

/**
 * Serviço responsável por se comunicar com api de animais
 */
export class ReportService {

    

    get_Animal_Id_Reports(animalId: string) {
        //TODO: Implementar chamada para a api para realizar a operação;
        return AXIOS_CONNECTOR_API.get(`/${API_ANIMALS_ROUTE}/${animalId}/${API_REPORT_ROUTE}`)
            .then(response => response.data)
            .catch(err => console.error(err));
    }

    create_Report(reportForm: ReportForm, animalId: String ) {

        return AXIOS_CONNECTOR_API.post(`/${API_ANIMALS_ROUTE}/${animalId}/${API_REPORT_ROUTE}`, reportForm)
        .then(response => response.data)
        .catch(err=>  console.error(err))
    }

    delete_Report(animalId: String) {
        
        return AXIOS_CONNECTOR_API.delete(`/${API_ANIMALS_ROUTE}/${animalId}/${API_REPORT_ROUTE}`)
        .then(response => response.data)
        .catch(err=>  console.error(err))

        
    }
    update_Report(animalId: String) {

        return AXIOS_CONNECTOR_API.delete(`/${API_ANIMALS_ROUTE}/${animalId}/${API_REPORT_ROUTE}`)
        .then(response => response.data)
        .catch(err=>  console.error(err))

    }
    

}