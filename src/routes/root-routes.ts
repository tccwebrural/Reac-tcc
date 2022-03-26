import { FC } from "react";
import FormAnimalPage from "../modules/animals/pages/Form";
import ListAnimalsPage from "../modules/animals/pages/List";
import FormReportPage  from "../modules/Report/ReportForm";
import ListReportPage  from "../modules/Report/ReportList";

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
		path: "animals/list",
		enabled: true,
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
		path: "modules/Report/Pages/ReportForm",
		enabled: true,
		component: FormReportPage,
	},

	{
		key: "create-Form-Report",
		title: "Lista Relatorio",
		path: "modules/Repor/Pages/ReportList",
		enabled: true,
		component: ListReportPage,
	},
];
