import axios from "axios";

/* Conexão principal para a API */
export const AXIOS_CONNECTOR_API = axios.create({
    baseURL: 'http://localhost:4003',
});