import { FC } from "react";
import FormAnimalPage from "../modules/animals/pages/Form";
import ListAnimalsPage from "../modules/animals/pages/List";
import FormReportPage  from "../modules/Report/pages/ReportForm";
import ListReportPage  from "../modules/Report/pages/ReportList";
import ListReportPagetst from "../modules/Report/pages/Reportlisttst";
import login from "../modules/credenciais/login/login";
import registrar from "../modules/credenciais/registrar/registrar";
import Home from "../modules/home-private/HomePrivate";
import DeclareDoRebanho from "../modules/declareDoRebanho/DeclareDoRebanho";
import Perfil from "../modules/perfil/Perfil";
import EditAnimalData from "../modules/editAnimalData/EditAnimalData";
import CadastroVacina from"../modules/cadastroVacina/CadastroVacina";
import inicial from "../modules/home/Home";
import ListTeste from "../modules/animals/pages/ListTeste";
import meuGado from "../modules/infoGado/meuGado"
import formVacina from "../modules/infoGado/formVacina";
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
		key: "Create-inicial",
		title: "inicial",
		enabled: true,
		path: "/inicial",
		btnCabecalho: false,
		component: inicial,
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
		key: "key-listTeste",
		title: "Minha Criação Teste",
		enabled: true,
		path: "animals/ListTeste",
		btnCabecalho: false,
		component: ListTeste,
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
		key: "key-editAnimalData",
		title: "Editar Dados do Animal",
		enabled: true,
		path: "animals/:animalId/editAnimalData/EditAnimalData",
		btnCabecalho:false,
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
		btnCabecalho:  false,
		component: ListReportPagetst,
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

	{
		key: "create-meuGado",
		title: "Meu Gado",
		enabled: true,
		path: "infoGado/meuGado",
		btnCabecalho: true,
		component: meuGado,
	},
	
	{
		key: "create-FormVacina",
		title: "FormVacina",
		enabled: true,
		path: "infoGado/formVacina",
		btnCabecalho: true,
		component: formVacina,
	},

	
];
