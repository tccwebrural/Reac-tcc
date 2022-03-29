import { FC } from "react";
import FormAnimalPage from "../modules/animals/pages/Form";
import ListAnimalsPage from "../modules/animals/pages/List";
import FormReportPage  from "../modules/Report/pages/ReportForm";
import ListReportPage  from "../modules/Report/pages/ReportList";

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

<<<<<<< HEAD
=======
	{
		key: "create-Form-Report",
		title: "Formulario Relatorio",
		path: "animals/reportForm",
		enabled: true,
		component: FormReportPage,
	},
>>>>>>> da9dc3c1a405e6f7c5f10265d8a61da2c98b3782

	{
		key: "create-List-Report",
		title: "Lista Relatorio",
		path: "animals/ReportList",
		enabled: true,
		component: ListReportPage,
	},
];
