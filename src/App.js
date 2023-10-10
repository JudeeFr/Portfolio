import React from 'react';
import './assets/css/App.css';
import Home from './pages/home'
import About from './pages/about'
import Vision from './pages/vision'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Notfound from './pages/notfound'
import Skills from './pages/skills'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// ajout des chemins des pages
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'about',
		element: <About />,
	},
	{
		path: 'vision',
		element: <Vision />,
	},
	{
		path: 'projects',
		element: <Projects />,
	},
	{
		path: 'skills',
		element: <Skills />,
	},
  {
		path: 'contact',
		element: <Contact />,
	},
  {
		path: '*',
		element: <Notfound />,
	},
]);

function App() {
  return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;