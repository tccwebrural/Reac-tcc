import { FC } from "react";
import FormAnimalPage from "../modules/animals/pages/Form";
import ListAnimalsPage from "../modules/animals/pages/List";
import FormReportPage  from "../modules/Report/pages/ReportForm";
import ListReportPage  from "../modules/Report/pages/ReportList";
import Anuncio from "../modules/Anuncio/pages/Anuncio";
import ListReportPagetst from "../modules/Report/pages/Reportlisttst";

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
}

export const ROOT_ROUTES: Array<Route> = [
	{
		key: "list-animals",
		title: "Lista de animais",
		enabled: true,
		path: "animals/list",
		component: ListAnimalsPage,
	},
	{
		key: "create-animals",
		title: "Cadastrar animal",
		path: "animals/form",
		enabled: true,
		component: FormAnimalPage,
	},

	{
		key: "create-Form-Report",
		title: "Formulario Relatorio",
		path: "animals/:animalId/reports/form",
		enabled: false,
		component: FormReportPage,
	},

	{
		key: "create-List-Report",
		title: "Lista Relatorio",
		path: "animals/:animalId/reports",
		enabled:false,
		component: ListReportPage,
	},
	{
		key: "create-List-Report",
		title: "Lista Relatorio TESTE",
		path: "animals/:animalId/reportstst",
		enabled:false,
		component: ListReportPagetst,
	},
	{
		key: "create-Anuncio",
		title: "Anuncio",
		path: "Anuncio/Anuncio",
		enabled: true,
		component: Anuncio,
	},
];
