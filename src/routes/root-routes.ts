import { FC } from "react";
import FormAnimalPage from "../modules/animals/pages/Form";
import ListAnimalsPage from "../modules/animals/pages/List";
import FormReportPage  from "../modules/Report/pages/ReportForm";
import ListReportPage  from "../modules/Report/pages/ReportList";
import ListReportPagetst from "../modules/Report/pages/Reportlisttst";
import Home from "../modules/home-private/HomePrivate";
import DeclareDoRebanho from "../modules/declareDoRebanho/DeclareDoRebanho";
import Perfil from "../modules/perfil/Perfil";
import EditAnimalData from "../modules/editAnimalData/EditAnimalData";
import CadastroVacina from"../modules/cadastroVacina/CadastroVacina";

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
		key: "key-home-private",
		title: "Home",
		enabled: true,
		path: "home-private/HomePrivate",
		btnCabecalho: true,
		component: Home,
	},
	{
		key: "list-animals",
		title: "Minha Criação",
		enabled: true,
		path: "animals/list",
		btnCabecalho: true,
		component: ListAnimalsPage,
	},
	{
		key: "key-declareDoRebanho",
		title: "Declare do Rebanho",
		enabled: true,
		path: "declareDoRebanho/DeclareDoRebanho",
		btnCabecalho: true,
		component: DeclareDoRebanho,
	},
	{
		key: "key-perfil",
		title: "Meu Perfil",
		enabled: true,
		path: "perfil/Perfil",
		btnCabecalho: true,
		component: Perfil,
	},

	{
		key: "create-animals",
		title: "Cadastrar animal",
		path: "animals/form",
		enabled: true,
		btnCabecalho:  true,
		component: FormAnimalPage,
	},
	{
		key: "key-editAnimalData",
		title: "Editar Dados do Animal",
		enabled: true,
		path: "animals/:animalId/editAnimalData/EditAnimalData",
		btnCabecalho:true,
		component: EditAnimalData,
	},
	{
		key: "key-cadastroVacina",
		title: "Cadastro Vacina",
		enabled: true,
		path: "cadastroVacina/CadastroVacina",
		btnCabecalho:true,
		component: CadastroVacina,
	},

	{
		key: "create-Form-Report",
		title: "Formulario Relatorio",
		path: "animals/:animalId/reports/form",
		enabled: true,
		btnCabecalho:  false,
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
		btnCabecalho:  false,
		component: ListReportPagetst,
	},

];
