import { FC } from "react";
import FormAnimalPage from "../modules/animals/pages/Form";
import ListAnimalsPage from "../modules/animals/pages/List";
import FormReportPage  from "../modules/Report/pages/ReportForm";
import ListReportPage  from "../modules/Report/pages/ReportList";
import Anuncio from "../modules/Anuncio/pages/Anuncio";
import ListReportPagetst from "../modules/Report/pages/Reportlisttst";
import login from "../modules/credenciais/login/login";
import registrar from "../modules/credenciais/registrar/registrar";

interface Route {
	key: string;
	/* Título da página */
	title: string;
	/* Caminho da rota */
	path: string;
	/* Regra para ativar ou não o redirecionamento da rota */
	enabled: boolean;
	/* Componente a ser renderizado */
	component: FC<{}>;
	btnCabecalho: boolean;
}

export const ROOT_ROUTES: Array<Route> = [
	{
		key: "list-animals",
		title: "Lista de animais",
		enabled: true,
		path: "animals/list",
		btnCabecalho: false,
		component: ListAnimalsPage,
	},
	{
		key: "create-animals",
		title: "Cadastrar animal",
		path: "animals/form",
		enabled: true,
		btnCabecalho: false,
		component: FormAnimalPage,
	},

	{
		key: "create-Form-Report",
		title: "Formulario Relatorio",
		path: "animals/:animalId/reports/form",
		enabled: true,
		btnCabecalho: false,
		component: FormReportPage,
	},

	{
		key: "create-List-Report",
		title: "Lista Relatorio",
		path: "animals/:animalId/reports",
		enabled:true,
		btnCabecalho: false,
		component: ListReportPage,
	},
	{
		key: "create-List-Report",
		title: "Lista Relatorio TESTE",
		path: "animals/:animalId/reportstst",
		enabled: true,
		btnCabecalho: false,
		component: ListReportPagetst,
	},
	{
		key: "create-Anuncio",
		title: "Anuncio",
		path: "Anuncio/Anuncio",
		enabled: true,
		btnCabecalho: false,
		component: Anuncio,
	},

	{
		key: "login",
		title: "login",
		path: "/login",
		enabled: true,
		btnCabecalho: false,
		component: login,
	},

	{
		key: "registrar",
		title: "registrar",
		path: "/registrar",
		enabled: true,
		btnCabecalho: false,
		component: registrar,
	},
	

	
];
