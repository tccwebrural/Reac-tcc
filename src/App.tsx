import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './modules/home/Home';
import { ROOT_ROUTES } from './routes/root-routes';

function App() {
	return (
		<>
			<CssBaseline />
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						{ROOT_ROUTES.map(
							element =>
								<Route
									key={element.key}
									path={element.path}
									element={< element.component />}
								/>
						)}
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	);
}

export default App;
