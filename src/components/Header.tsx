import React, { ReactElement } from "react";
import "./Header.css";
import {
	Box,
	Link,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { ROOT_ROUTES } from "../routes/root-routes";
import { APP_TITLE, ROOT_THEME } from "../constants";
import logoPequena from "../imagens/logoPequena.png";

const Header = (props: any): ReactElement => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event: any) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<Box id="cabecalho">
				<Container maxWidth="xl" id="menu-cabecalho">
					<Toolbar disableGutters>
						{/* WEB */}
						<Typography
							variant="h6"
							noWrap
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
							}}
						>
							<img id="imgLogo-Header" src={logoPequena} />
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{ROOT_ROUTES.filter(page => page.btnCabecalho).map((page) => (
									<Link
										key={page.key}
										component={NavLink}
										to={page.path}
										color="black"
										underline="none"
										variant="button"
									>
										<MenuItem onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{page.title}</Typography>
										</MenuItem>
									</Link>
								))}
							</Menu>
						</Box>
						{/* MOBILE */}
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
						>
							{APP_TITLE}
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "flex-start",
									alignItems: "center",
									marginLeft: "1rem",
								}}
							>
								{ROOT_ROUTES.filter(page => page.btnCabecalho).map((page) => (
									<Link id="linksCabecalho"
										key={page.key}
										component={NavLink}
										to={page.path}
										color="black"
										underline="none"
										variant="button"
										sx={{ fontSize: "large", marginLeft: "2rem" }}
									>
										{page.title}
									</Link>
								))}
							</Box>
						</Box>
					</Toolbar>
				</Container>
			</Box>
		</>
	);
}

export default Header;
